from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Experience, ProfileInfo, Project, Skill
from .serializers import (
    ExperienceSerializer,
    ProfileInfoSerializer,
    ProjectSerializer,
    SkillSerializer,
)


class ProfileInfoView(RetrieveAPIView):
    serializer_class = ProfileInfoSerializer

    def get_object(self):
        return ProfileInfo.get_solo()


class ExperienceListView(ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class ProjectListView(ListAPIView):
    queryset = Project.objects.prefetch_related("technologies_used").all()
    serializer_class = ProjectSerializer


class SkillListView(ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
