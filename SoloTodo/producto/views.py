from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import FormProducto
from django.contrib import messages
from .models import Producto
from .filters import ProductosFilter

@login_required 
def agregarProducto(request):
    formulario = FormProducto()
    if request.method == 'POST':
        formulario = FormProducto(request.POST, request.FILES)
        if formulario.is_valid():
            productoNuevo = formulario.save(commit = False)
            productoNuevo.usuario = request.user
            productoNuevo.save()
            messages.add_message(
                request,
                messages.SUCCESS,
                'Producto Ingresado!!'
            )
            return redirect('/index/dashboard')
    context = {
        'formulario':formulario
    }
    return render(
        request,
        'producto/agregar.html',
        context
    )

@login_required 
def eliminarProducto(request, id):
    productoEncontrado = Producto.objects.get(pk=id)
    productoEncontrado.delete()

    return redirect('/index/dashboard/')
    
@login_required 
def listarProductos(request):



    productos = Producto.objects.all()
    totalProductos = productos.__len__
    filtro = ProductosFilter(request.GET, queryset=productos)
    productos = filtro.qs

    context = {
        'productos':productos,
        'totalProductos':totalProductos,
        'filtro':filtro
    }
    return render(
        request,
        'usuario/dashboard.html',
        context
    )

@login_required 
def editarProducto(request,id):
    productoEncontrado = Producto.objects.get(pk = id)
    formulario = None

    if request.method == 'POST':
        formulario = FormProducto(request.POST, request.FILES, instance= productoEncontrado)
        if formulario.is_valid():
            formulario.save()
            return redirect('/index/dashboard/')
    else:
        formulario = FormProducto(instance= productoEncontrado)
        context = {
        'titulo':'Modificar producto ingresado',
        'formulario':formulario
        }

    return render(
        request,
        'producto/modificar.html',
        context
    )


def detallarProducto(request, id):
    productos = Producto.objects.get(pk = id)
    context = {
        'titulo': 'Detalle Producto',
        'producto' : productos
    }

    return render(
        request,
        'producto/detalle.html',
        context
    )

def productoDisponible(request):

    productos = Producto.objects.all()
    context = {
        'productos':productos
    }
    return render (
        request,
        'producto/producto.html',
        context
    )
pushCarro = []


def agregarAlCarro (request, idProducto):
    global pushCarro  
    pushCarro = Producto.objects.get(id = idProducto)
    context = {
        'titulo': 'Detalle Producto',
        'pushCarro' : pushCarro,       
    }
    return render(request,'producto/carrito.html',context)


def filtrarTabla(request, filtro):
    productos = Producto.objects.filter(nombre = filtro)
    totalProductos = productos.__len__
    context = {
        'productos':productos,
        'totalProductos':totalProductos
    }
    return render(
        request,
        'usuario/dashboard.html',
        context
    )