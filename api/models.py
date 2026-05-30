from cloudinary.models import CloudinaryField
from django.core.exceptions import ValidationError
from django.db import models


class SingletonModel(models.Model):
    """Base class enforcing a single row in the table."""

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        if not self.pk and self.__class__.objects.exists():
            raise ValidationError("Only one instance is allowed.")
        return super().save(*args, **kwargs)

    @classmethod
    def get_solo(cls):
        obj = cls.objects.first()
        if obj is None:
            obj = cls.objects.create()
        return obj


class ProfileInfo(SingletonModel):
    full_name = models.CharField(max_length=200)
    greeting_text = models.CharField(max_length=255)
    role_title = models.CharField(max_length=200)
    hero_image_url = CloudinaryField(blank=True, null=True)
    hero_video_url = CloudinaryField(resource_type="video", blank=True, null=True)

    about_me_text = models.TextField()
    about_me_image_url = CloudinaryField(blank=True, null=True)

    what_i_do_text = models.TextField()
    what_i_do_image_url = CloudinaryField(blank=True, null=True)

    cv_file_url = CloudinaryField(resource_type="auto", blank=True, null=True)
    contact_email = models.EmailField()
    github_link = models.URLField(max_length=500, blank=True)
    linkedin_link = models.URLField(max_length=500, blank=True)

    class Meta:
        verbose_name = "Profile info"
        verbose_name_plural = "Profile info"

    def __str__(self) -> str:
        return self.full_name


class Experience(models.Model):
    company_name = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    location = models.CharField(max_length=200, blank=True)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    is_current = models.BooleanField(default=False)
    description = models.TextField()
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ["order", "-start_date"]

    def __str__(self) -> str:
        return f"{self.role} @ {self.company_name}"


class Skill(models.Model):
    CATEGORY_BACKEND = "Backend"
    CATEGORY_FRONTEND = "Frontend"
    CATEGORY_DEVOPS = "DevOps"
    CATEGORY_AI = "AI"

    CATEGORY_CHOICES = [
        (CATEGORY_BACKEND, "Backend"),
        (CATEGORY_FRONTEND, "Frontend"),
        (CATEGORY_DEVOPS, "DevOps"),
        (CATEGORY_AI, "AI"),
    ]

    name = models.CharField(max_length=100, unique=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    icon_class_or_url = models.CharField(max_length=255, blank=True)
    proficiency_percentage = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ["category", "name"]

    def __str__(self) -> str:
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image_url = CloudinaryField(blank=True, null=True)
    live_demo_url = models.URLField(max_length=500, blank=True)
    github_repo_url = models.URLField(max_length=500, blank=True)
    order = models.IntegerField(default=0)
    technologies_used = models.ManyToManyField(
        Skill, related_name="projects", blank=True
    )

    class Meta:
        ordering = ["order", "title"]

    def __str__(self) -> str:
        return self.title
