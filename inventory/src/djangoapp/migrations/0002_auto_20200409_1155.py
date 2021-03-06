# Generated by Django 3.0.5 on 2020-04-09 10:55

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('djangoapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='computer',
            name='purchase_date',
            field=models.DateField(blank=True, null=True, verbose_name='Purchase Date (mm/dd/yyy)'),
        ),
        migrations.AddField(
            model_name='computer',
            name='timestamp',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
