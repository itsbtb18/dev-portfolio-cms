import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringSpringX = useSpring(mouseX, { stiffness: 250, damping: 20 });
  const ringSpringY = useSpring(mouseY, { stiffness: 250, damping: 20 });

  const handleHoverStart = useCallback(() => setIsHovered(true), []);
  const handleHoverEnd = useCallback(() => setIsHovered(false), []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    const bindHoverListeners = () => {
      const elements = document.querySelectorAll(
        "a, button, [role='button'], input, select, textarea"
      );
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    bindHoverListeners();

    const observer = new MutationObserver(() => {
      requestAnimationFrame(bindHoverListeners);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
    };
  }, [mouseX, mouseY, handleHoverStart, handleHoverEnd]);

  if (!isVisible) return null;

  return (
    <>
      {/* Core Pointer — snaps to cursor instantly */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#00B4D8] pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "#ffffff" : "#00B4D8",
          boxShadow: isHovered
            ? "0 0 10px rgba(255,255,255,0.8)"
            : "0 0 4px rgba(0,180,216,0.5)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />

      {/* Trailing Glow Ring — follows with spring lag */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-[#00B4D8]/45 bg-[#00B4D8]/5 pointer-events-none z-[9998]"
        style={{
          x: ringSpringX,
          y: ringSpringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered
            ? "rgba(255, 255, 255, 0.6)"
            : "rgba(0, 180, 216, 0.45)",
          backgroundColor: isHovered
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(0, 180, 216, 0.05)",
          boxShadow: isHovered
            ? "0 0 15px rgba(255,255,255,0.2)"
            : "0 0 0px rgba(0,0,0,0)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;
