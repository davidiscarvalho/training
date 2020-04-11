from django.contrib import admin

# Register your models here.
from .models import Computers, Operating_system
from .forms import ComputerForm


class ComputerAdmin(admin.ModelAdmin):
    list_display = ['computer_name', 'IP_address', 'users_name',
                    'MAC_address', 'purchase_date', 'timestamp']
    form = ComputerForm
    list_filter = ['computer_name', 'IP_address']
    search_fields = ['computer_name', 'IP_address']


admin.site.register(Computers, ComputerAdmin)
admin.site.register(Operating_system, ComputerAdmin)
