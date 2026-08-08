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
    data=Admin_add_product.objects.all()
    return render(request, "products.html",{'data':data})
def addproduct(request):
    if request.method=="POST":
        form=Product_add_Form(request.POST,request.FILES)
        if form.is_valid():
            form.save()
            return render(request,"addproduct.html",{'form':form})
    else:
        form=Product_add_Form()
    return render(request,"addproduct.html",{'form':form})

