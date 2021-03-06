# Generated by Django 3.0.5 on 2020-04-10 11:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('djangoapp', '0003_auto_20200409_1340'),
    ]

    operations = [
        migrations.CreateModel(
            name='Operating_system',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('operating_system', models.CharField(blank=True, max_length=30)),
            ],
        ),
        migrations.AlterField(
            model_name='computer',
            name='operating_system',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='djangoapp.Operating_system'),
        ),
    ]
