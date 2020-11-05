from django.shortcuts import render
# IMPORT
from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login, logout, authenticate
from .forms import FormularioCreacionUsuario
from django.contrib import messages
from django.contrib.auth.decorators import login_required
# -------------------------

# Views para registro y autenticación
    
def registro(request):
    
    formulario = FormularioCreacionUsuario()
    if request.method == 'POST':
       
        formulario = FormularioCreacionUsuario( data = request.POST)
        if formulario.is_valid():
            usuarioGuardado = formulario.save()
            if usuarioGuardado is not None:
                messages.add_message(request, messages.SUCCESS, 'Registro Exitoso !!')
                login(request, usuarioGuardado)
                return redirect('/index/inicio')

    else:
        formulario = FormularioCreacionUsuario()
    context = {
        'formulario':formulario
    }
    return render(
        request,
        'usuario/registro.html',
        context
    )
    

def iniciarSesion(request):
    
    formulario = AuthenticationForm()
    if request.method == 'POST':
        formulario = AuthenticationForm(data = request.POST)
        if formulario.is_valid():
            username = formulario.cleaned_data['username']
            password = formulario.cleaned_data['password']
            usuarioLogeado = authenticate(username = username, password = password)
            if usuarioLogeado is not None:
                login(request,usuarioLogeado)
                return redirect('/index/')
    else:
        formulario = AuthenticationForm()
    context = {
        'formulario':formulario
    }
    return render(
        request,
        'usuario/login.html',
        context
    )
    
def salir(request):
    logout(request)
    return redirect('/index/inicio/')

#-----------------------------------------------------





# Create your views here.
