from django import forms
from customerapp.models import*

class Product_add_Form(forms.ModelForm):
    class Meta:
        model =Admin_add_product
        fields = '__all__'
