from django.db import models

# Create your models here.
class Admin_add_product(models.Model):
    Pro_name=models.CharField(max_length=50)
    Price=models.IntegerField()
    Description=models.TextField()
    Image=models.ImageField(upload_to='uploads/')
    
    status=models.CharField(max_length=20,default='Available')

    class Meta:
        db_table = "products"