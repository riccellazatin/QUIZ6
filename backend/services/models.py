from django.db import models

# Create your models here.
class Service(models.Model):
    _id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to='services/')
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    numReviews = models.IntegerField()

def _str_(self):
    return self.name