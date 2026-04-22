from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
  
    list_display = ('nome', 'categoria', 'preco', 'estoque')
   
    list_filter = ('categoria',)
   
    search_fields = ('nome', 'descricao')