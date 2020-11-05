import django_filters
from .models import Producto

class ProductosFilter(django_filters.FilterSet):
    class Meta:
        model = Producto
        fields = ['nombre','marca']
