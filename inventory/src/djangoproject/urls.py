"""djangoproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from djangoapp.views import home as ho, computer_entry as cen, computer_list as cli, computer_edit as ced, computer_delete as cde


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', ho),
    path('computer_entry/', cen, name='computer_entry'),
    path('computer_list/', cli, name='computer_list'),
    path('computer_list/<id>', ced, name='computer_edit'),
    path('computer_list/<id>/delete', cde, name='computer_delete'),
]
