from django.db import models

from django.core.validators import FileExtensionValidator
from profiles.models import Profile
# Create your models here.


class Post(models.Model):
    content = models.TextField()
    image = models.ImageField(upload_to='posts', validators=(
        ['png', 'jpg', 'jpeg']), blank=True)
    liked = models.ManyToManyField(
        Profiles, default=None, related_name='likes')
