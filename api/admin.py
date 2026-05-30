from django.contrib import admin

from .models import Experience, ProfileInfo, Project, Skill


@admin.register(ProfileInfo)
class ProfileInfoAdmin(admin.ModelAdmin):
    list_display = (
        "full_name",
        "role_title",
        "contact_email",
        "github_link",
        "linkedin_link",
    )

    def has_add_permission(self, request):
        if ProfileInfo.objects.exists():
            return False
        return super().has_add_permission(request)


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = (
        "company_name",
        "role",
        "location",
        "start_date",
        "end_date",
        "is_current",
        "order",
    )
    list_filter = ("is_current", "location")
    ordering = ("order", "-start_date")


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "order")
    ordering = ("order", "title")
    filter_horizontal = ("technologies_used",)


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "proficiency_percentage")
    list_filter = ("category",)
    ordering = ("category", "name")
