from urllib import request

from django.shortcuts import render
from customerapp.forms import*
def index(request):
    return render(request, "index.html")
def about(request):
    return render(request, "about.html")
def login(request):
    return render(request, "login.html")
def products(request):
    data=Admin_add_product.objects.all
    return render(request, "products.html",{'data':data})

