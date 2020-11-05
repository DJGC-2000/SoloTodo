from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator
# Create your models here.

class Producto(models.Model):
    nombre = models.CharField(max_length = 45, blank = False)
    descripcion = models.TextField(max_length = 45, blank = False)
    marca = models.CharField(max_length = 45, blank = False)
    procedencia = models.CharField(max_length = 45, blank = False)
    precio = models.PositiveIntegerField(blank = False, validators=[MinValueValidator(1)])
    stock = models.PositiveIntegerField(blank = False, validators=[MinValueValidator(1)])
    imagen = models.ImageField(upload_to = 'imagens')
    # usuario = models.ForeignKey(User, on_delete = models.CASCADE)


class Compra(models.Model):
    usuario = models.ForeignKey(User, on_delete = models.CASCADE)
    fechaCompra = models.DateTimeField(auto_now_add=True, null=True)


class DetalleCompra(models.Model):
    idCompra = models.ForeignKey(Compra, on_delete = models.CASCADE)
    # usuario = models.ForeignKey(Compra.usuario, on_delete = models.CASCADE)
    idProducto = models.ForeignKey(Producto, on_delete = models.CASCADE)
    totalCompra = models.PositiveIntegerField()