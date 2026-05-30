from django.urls import path

from .views import ExperienceListView, ProfileInfoView, ProjectListView, SkillListView

urlpatterns = [
    path("profile/", ProfileInfoView.as_view(), name="profile"),
    path("experiences/", ExperienceListView.as_view(), name="experiences"),
    path("projects/", ProjectListView.as_view(), name="projects"),
    path("skills/", SkillListView.as_view(), name="skills"),
]
