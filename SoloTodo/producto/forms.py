from django import forms
from .models import Producto
# --------------------

class FormProducto(forms.ModelForm):
    class Meta:
        model = Producto
        fields = (
            'nombre',
            'descripcion',
            'marca',
            'procedencia',
            'precio',
            'stock',
            'imagen'
        )