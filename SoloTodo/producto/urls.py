from django.urls import path
from .views import agregarProducto, eliminarProducto, listarProductos, editarProducto, detallarProducto, productoDisponible, agregarAlCarro, filtrarTabla
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('dashboard/', listarProductos),
    path('producto/', agregarProducto),
    path('', productoDisponible),
    path('eliminar/<int:id>', eliminarProducto),
    path('editar/<int:id>',editarProducto),
    path('detalle/<int:id>', detallarProducto),
    path('enviarACarro/<str:idProducto>', agregarAlCarro),
    path('filtrar/<str:filtro>',filtrarTabla)
] 