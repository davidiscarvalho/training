from django.db import models
from datetime import datetime, date


class Operating_system(models.Model):
    operating_system = models.CharField(max_length=30, blank=True)

    def __unicode__(self):
        return self.operating_system


class Computer(models.Model):
    computer_name = models.CharField(max_length=30, blank=True)
    IP_address = models.CharField(max_length=30, blank=False)
    MAC_address = models.CharField(max_length=30, blank=False)
    operating_system = models.ForeignKey(
        'Operating_system', on_delete=models.SET_NULL, blank=True, null=True)
    users_name = models.CharField(max_length=30, blank=True)
    location = models.CharField(max_length=30, blank=False)
    purchase_date = models.DateField(
        "Purchase Date (mm/dd/yyy)", auto_now_add=False, auto_now=False, blank=True, null=True)
    timestamp = models.DateField(auto_now_add=True, auto_now=False)

    def __unicode__(self):
        return self.computer_name
