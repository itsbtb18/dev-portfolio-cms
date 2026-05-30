from rest_framework import serializers

from .models import Experience, ProfileInfo, Project, Skill


class ProfileInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileInfo
        fields = "__all__"


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = "__all__"


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    technologies_used = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = "__all__"
