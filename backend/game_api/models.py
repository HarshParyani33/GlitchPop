from django.db import models

class Score(models.Model):
    player_name = models.CharField(max_length=100, default="Guest")
    points = models.IntegerField(default=0)
    combo_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-points']