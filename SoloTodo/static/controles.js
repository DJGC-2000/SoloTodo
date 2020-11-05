
// CREACIÓN DE ARRAY CON ELEMENTOS PARA GENERAR DESPUES DE FILTRAR
let productos = [{
        id: 1,
        nombre: "Gear G2450M (M2559P)",
        precio: 189990,
        foto: "https://media.solotodo.com/media/cache/5c/61/5c6115ce46f2bbe64ff96a1808a04002.png",
        descripcionPro: "LED 25.0 Full HD (1920x1080)",
        marcaP: "INTEL",
        stockP: 1,
        procedenciaP: "China"
    },
    {
        id: 2,
        nombre: "Samsung Galaxy J2 Core (J260 / Black)",
        precio: 79990,
        foto: "https://publicapi.solotodo.com/products/52608/picture/?width=1000&height=520",
        descripcionPro: "La media nae",
        marcaP: "AMD",
        stockP: 1,
        procedenciaP: "China"
    },
    {
        id: 3,
        nombre: "Cooler Master MasterBox MB320L",
        precio: 63900,
        foto: "https://publicapi.solotodo.com/products/86265/picture/?width=1000&height=520",
        descripcionPro: "Cooler Master Micro ATX RGB",
        marcaP: "NVIDIA",
        stockP: 1,
        procedenciaP: "China"
    },
    {
        id: 4,
        nombre: "LG OLED65GXPSA + Soundbar LG",
        precio: 100000,
        foto: "https://publicapi.solotodo.com/products/86503/picture/?width=1000&height=520",
        descripcionPro: "Loremp ajhajajajaj",
        marcaP: "INTEL",
        stockP: 1,
        procedenciaP: "China"
    },
    {
        id: 5,
        nombre: "Sony XBR-75X945E",
        precio: 999999,
        foto: "https://publicapi.solotodo.com/products/38710/picture/?width=1000&height=520",
        descripcionPro: "LED 75.0 4k Ultra HD (3840x2160)",
        marcaP: "AMD",
        stockP: 1,
        procedenciaP: "China"
    },
    {
        id: 6,
        nombre: "HP EliteBook 840 G5 [4TS53EC]",
        precio: 1671260,
        foto: "https://publicapi.solotodo.com/products/84189/picture/?width=1000&height=520",
        descripcionPro: "Intel Core i7-8650U / 16 GB RAM",
        marcaP: "INTEL",
        stockP: 1,
        procedenciaP: "China"
    },
    {
        id: 7,
        nombre: "Samsung RH25H5613SG/ZS",
        precio: 1407999,
        foto: "https://publicapi.solotodo.com/products/37501/picture/?width=1000&height=520",
        descripcionPro: "Refrigerador side by side No Frost",
        marcaP: "NVIDIA",
        stockP: 1,
        procedenciaP: "China"
    },
    {
        id: 8,
        nombre: "Samsung RH25H5613SG/ZS",
        precio: 1407999,
        foto: "https://publicapi.solotodo.com/products/37501/picture/?width=1000&height=520",
        descripcionPro: "Refrigerador side by side No Frost",
        marcaP: "NVIDIA",
        stockP: 1,
        procedenciaP: "China"
    }

];

// ELIMINA PRODUCTOS 
function eliminarProducto(id) {
    // SWEETALERT
    // swal({
    //         title: "Estas seguro de eliminar el producto?",
    //         text: "No recargar el sitio mientras se realiza esta acción!",
    //         icon: "warning",
    //         buttons: ["Cancelar", "Eliminar"],
    //         dangerMode: false,
    //     })
    //     .then((Eliminado) => {
    //         if (Eliminado) {

    //             articuloEliminar = document.getElementById(id); // LLAMAMOS A LA ID DE LA CARD
    //             padre = articuloEliminar.parentNode;
    //             padre.removeChild(articuloEliminar); // REMOVEMOS LA CARD

    //             console.log(document.getElementById(id));
    //             swal("Producto eliminado!", {
    //                 icon: "error",
    //             });
    //         } else {

    //         }
    //     })
    alert("hola");
    alert(id);
}

function ocultarbtn() {
    // OCULTA LOS BOTONES PONIENDOLOS EN DISABLED, Y SE INICIALIZAN OTROS.
    document.getElementById("btnSave").setAttribute("disabled", "");
    document.getElementById("btnUpdate").setAttribute("disabled", "");
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnSave").style.display = "initial";
}

function crearProducto(form) {

    swal({
            title: "Estas seguro de agregar el producto?",
            text: "No recargar el sitio mientras se realiza esta acción!",
            icon: "warning",
            buttons: ["Cancelar", "Agregar"],
            dangerMode: false,
        })
        .then((confirma) => {
            if (confirma) {
                // SE INGRESAN LOS CAMPOS DEL FORMULARIO AL ARRAY
                document.getElementById(producto)
                nombreProducto = form[0].value;
                precioProducto = form[1].value;
                descProducto = form[2].value;
                marcaProducto = form[3].value;
                stockProducto = form[5].value;
                procedenciaProducto = form[6].value;
                fotoProducto = form[7].value;
                
                // GENERA LA ID Y LA INCREMENTA EN 3
                idProducto = producto.childElementCount + 3

                // AÑADE ELEMENTOS/ETIQUETAS A LA CARD
                const _producto = document.getElementById("producto");
                const _article = document.createElement("article");
                const divCard = document.createElement("div");
                const divCardImg = document.createElement("div");
                const _img = document.createElement("img");
                const botonEliminar = document.createElement("button");
                const _i = document.createElement("i");
                const divCardContent = document.createElement("div");
                const spanTitle = document.createElement("span");
                const linkActualizar = document.createElement("a");
                const spanPrecio = document.createElement("span");
                const descripcion = document.createElement("p");
                const marca = document.createElement("p");
                const stock = document.createElement("p");
                const procedencia = document.createElement("p");

                // añade atributos a la card
                linkActualizar.setAttribute("href", "#modal");
                linkActualizar.setAttribute("onclick", 'verProducto(' + idProducto + ',crear)');
                _article.setAttribute("id", idProducto);
                _img.setAttribute("src", fotoProducto);
                botonEliminar.setAttribute('onclick', 'eliminarProducto(' + idProducto + ')');

                // añade clases a la CARD
                _article.classList.add("col", "s12", "m2", "l3", "xl2");
                linkActualizar.classList.add("modal-trigger");
                divCard.classList.add("card");
                divCardImg.classList.add("card-image");
                botonEliminar.classList.add("btn-floating", "halfway-fab", "waves-effect", "waves-light", "red");
                _i.classList.add("material-icons");
                divCardContent.classList.add("card-content", "bkg-content");
                spanTitle.classList.add("card-title", "size");
                spanPrecio.classList.add("precio");

                // añade texto
                spanTitle.innerText = nombreProducto;
                spanPrecio.innerText = precioProducto;
                descripcion.innerText = descProducto;
                marca.innerText = marcaProducto;
                stock.innerText = stockProducto;
                procedencia.innerText = procedenciaProducto;
                _i.innerText = "close";

                // añade hijos
                _article.appendChild(divCard);
                divCard.appendChild(divCardImg);
                divCardImg.appendChild(_img);
                divCardImg.appendChild(botonEliminar);
                botonEliminar.appendChild(_i);
                divCard.appendChild(divCardContent);
                divCardContent.appendChild(linkActualizar);
                linkActualizar.appendChild(spanTitle);
                divCardContent.appendChild(spanPrecio);
                divCardContent.appendChild(descripcion);
                divCardContent.appendChild(marca);
                divCardContent.appendChild(stock);
                divCardContent.appendChild(procedencia);
                _producto.appendChild(_article);

                limpiarFormulario(form);

                swal("Producto agregado! Felicidades!", {
                    icon: "success",
                });
            } else {

            }

            cerrarModal(form);

        })
}

// AL CERRAR LA PESTAÑA MODAL, SE LIMPIARÁ EL FORMULARIO
function cerrarModal(form) {
    limpiarFormulario(form);
}

function verProducto(id, form) {

    articulo = document.getElementById(id);
    // DESHABILITA EL SAVE DEL CARD Y INICIA EL MODIFICAR.
    document.getElementById("btnSave").style.display = "none";
    document.getElementById("btnUpdate").style.display = "initial";

    // BUSCA DE HIJO EN HIJO LOS VALORES DE CADA ELEMENTO EN BASE A LA ID
    nombre = articulo.childNodes[0].children[1].children[0].children[0].innerText;
    precioP = parseInt(articulo.childNodes[0].children[1].children[1].innerText);
    descP = articulo.childNodes[0].children[1].children[2].innerText;
    marcaP = articulo.childNodes[0].children[1].children[3].innerText;
    fotoUrl = articulo.childNodes[0].children[0].children[0].src;
    stockP = parseInt(articulo.childNodes[0].children[1].children[4].innerText);
    procedenciaP = articulo.childNodes[0].children[1].children[5].innerText;
    
    // PARA LA FUNCIÓN SELECT
    let selecMarcas = document.getElementById("marca");


    for (let i = 0; i < selecMarcas.length; i++) {
        selecMarcas[i].removeAttribute("selected");
    }
    for (let j = 0; j < selecMarcas.length; j++) {
        if (selecMarcas[j].value == marcaP) {
            selecMarcas[j].setAttribute("selected", "");
        }
    }

    $("#divselect input").val(marcaP);

    // Muestra en los campos los datos correspondientes a la CARD consultada.
    form[0].value = nombre; // FORMULARIO_0 = NOMBRE DENTRO DE LA ARRAY
    form[1].value = parseInt(precioP);
    form[2].value = descP;
    form[5].value = stockP;
    form[6].value = procedenciaP;
    form[7].value = fotoUrl;

}

function actualizarProducto(form) {
    swal({
            title: "Estas seguro de modificar el producto?",
            text: "No recargar el sitio mientras se realiza esta acción!",
            icon: "warning",
            buttons: ["Cancelar", "Modificar"],
            dangerMode: false,
        })
        .then((modifica) => {
            if (modifica) {

                let nombreMarca = document.querySelector("#divselect input").value;
                nombreMarca;
                nombre = form[0].value
                precioP = form[1].value;
                descP = form[2].value;
                stockP = form[5].value;
                fotoUrl = form[6].value;

                // BUSCA POR NODOS PADRE/HIJO LOS DATOS DE CADA UNO Y LOS MODIFICA
                articulo.childNodes[0].children[1].children[0].children[0].innerText = nombre;
                articulo.childNodes[0].children[1].children[1].innerText = precioP;
                articulo.childNodes[0].children[1].children[2].innerText = descP;
                articulo.childNodes[0].children[1].children[3].innerText = marcaP;
                articulo.childNodes[0].children[1].children[4].innerText = stockP;
                articulo.childNodes[0].children[0].children[0].src = fotoUrl;
                articulo.childNodes[0].children[1].children[3].innerText = nombreMarca;
                swal("Producto modificado con exito!", {
                    icon: "success",
                });
            } else {

            }

        })
}

// VALIDA ESPACIOS VACÍOS
function validar(form) {
    let habilitar = true;
    for (let i = 0; i < form.length; i++) {
        let val = form[i].value
        x = val.trim();
        if (x == "") {
            habilitar = false;
            _btnS = document.getElementById("btnSave");
            _btnU = document.getElementById("btnUpdate");
            if (!_btnS.disabled) {
                _btnS.setAttribute("disabled", "");
            }
            if (!_btnU.disabled) {
                _btnU.setAttribute("disabled", "");
            }
            break;
        }
    }
    if (habilitar) {
        document.getElementById("btnSave").removeAttribute("disabled");
        document.getElementById("btnUpdate").removeAttribute("disabled");
    }
}


function limpiarFormulario(form) {
    for (let i = 0; i < form.length; i++) {
        form[i].value = null;
    }
}

function filtrarElemntos() {
    _filtro = document.getElementById("filtro").value;

    let = filtroProdutos = productos.filter(x => x.marcaP.toLowerCase() == _filtro.toLowerCase())
    if (filtroProdutos.length > 0) {
        _producto = document.getElementById("producto");
        while (_producto.firstChild) {
            _producto.removeChild(_producto.lastChild);
        }
        for (let i = 0; i < filtroProdutos.length; i++) {

            // crea elementos
            const _producto = document.getElementById("producto");
            const _article = document.createElement("article");
            const divCard = document.createElement("div");
            const divCardImg = document.createElement("div");
            const _img = document.createElement("img");
            const botonEliminar = document.createElement("button");
            const _i = document.createElement("i");
            const divCardContent = document.createElement("div");
            const spanTitle = document.createElement("span");
            const linkActualizar = document.createElement("a");
            const spanPrecio = document.createElement("span");
            const descripcion = document.createElement("p");
            const marca = document.createElement("p");
            const stock = document.createElement("p");
            const procedencia = document.createElement("p");

            // añade atributos
            linkActualizar.setAttribute("href", "#modal");
            linkActualizar.setAttribute("onclick", 'verProducto(' + filtroProdutos[i].id + ',crear)');
            _article.setAttribute("id", filtroProdutos[i].id);
            _img.setAttribute("src", filtroProdutos[i].foto);
            botonEliminar.setAttribute('onclick', 'eliminarProducto(' + filtroProdutos[i].id + ')');

            // añade clases
            _article.classList.add("col", "s12", "m2", "l3", "xl2");
            linkActualizar.classList.add("modal-trigger");
            divCard.classList.add("card");
            divCardImg.classList.add("card-image");
            botonEliminar.classList.add("btn-floating", "halfway-fab", "waves-effect", "waves-light", "red");
            _i.classList.add("material-icons");
            divCardContent.classList.add("card-content", "bkg-content");
            spanTitle.classList.add("card-title", "size", "cursorp");
            spanPrecio.classList.add("precio");

            //añade texto
            spanTitle.innerText = filtroProdutos[i].nombre;
            spanPrecio.innerText = filtroProdutos[i].precio;
            descripcion.innerText = filtroProdutos[i].descripcionPro;
            marca.innerText = filtroProdutos[i].marcaP;
            stock.innerText = filtroProdutos[i].stockP;
            procedencia.innerText = filtroProdutos[i].procedenciaP;

            _i.innerText = "close";

            // añade hijos
            _article.appendChild(divCard);
            divCard.appendChild(divCardImg);
            divCardImg.appendChild(_img);
            divCardImg.appendChild(botonEliminar);
            botonEliminar.appendChild(_i);
            divCard.appendChild(divCardContent);
            divCardContent.appendChild(linkActualizar);
            linkActualizar.appendChild(spanTitle);
            divCardContent.appendChild(spanPrecio);
            divCardContent.appendChild(descripcion);
            divCardContent.appendChild(marca);
            divCardContent.appendChild(stock);
            divCardContent.appendChild(procedencia);
            _producto.appendChild(_article);
        }
    }

    if (filtroProdutos.length == 0) {
        _producto = document.getElementById("producto");
        while (_producto.firstChild) {
            _producto.removeChild(_producto.lastChild);
        }

        swal("Filtro no encuentra nada :C!", "Se ha recargado la información", "info");
        for (let i = 0; i < productos.length; i++) {
            // crea elementos
            const _producto = document.getElementById("producto");
            const _article = document.createElement("article");
            const divCard = document.createElement("div");
            const divCardImg = document.createElement("div");
            const _img = document.createElement("img");
            const botonEliminar = document.createElement("button");
            const _i = document.createElement("i");
            const divCardContent = document.createElement("div");
            const spanTitle = document.createElement("span");
            const linkActualizar = document.createElement("a");
            const spanPrecio = document.createElement("span");
            const descripcion = document.createElement("p");
            const marca = document.createElement("p");
            const stock = document.createElement("p");
            const procedencia = document.createElement("p");

            // añade atributos
            linkActualizar.setAttribute("href", "#modal");
            linkActualizar.setAttribute("onclick", 'verProducto(' + productos[i].id + ',crear)');
            _article.setAttribute("id", productos[i].id);
            _img.setAttribute("src", productos[i].foto);
            botonEliminar.setAttribute('onclick', 'eliminarProducto(' + productos[i].id + ')');

            // añade clases
            _article.classList.add("col", "s12", "m2", "l3", "xl2");
            linkActualizar.classList.add("modal-trigger");
            divCard.classList.add("card");
            divCardImg.classList.add("card-image");
            botonEliminar.classList.add("btn-floating", "halfway-fab", "waves-effect", "waves-light", "red");
            _i.classList.add("material-icons");
            divCardContent.classList.add("card-content", "bkg-content");
            spanTitle.classList.add("card-title", "size", "cursorp");
            spanPrecio.classList.add("precio");

            //añade texto
            spanTitle.innerText = productos[i].nombre;
            spanPrecio.innerText = productos[i].precio;
            descripcion.innerText = productos[i].descripcionPro;
            marca.innerText = productos[i].marcaP;
            stock.innerText = productos[i].stockP;
            procedencia.innerText = productos[i].procedenciaP;

            _i.innerText = "close";

            // añade hijos
            _article.appendChild(divCard);
            divCard.appendChild(divCardImg);
            divCardImg.appendChild(_img);
            divCardImg.appendChild(botonEliminar);
            botonEliminar.appendChild(_i);
            divCard.appendChild(divCardContent);
            divCardContent.appendChild(linkActualizar);
            linkActualizar.appendChild(spanTitle);
            divCardContent.appendChild(spanPrecio);
            divCardContent.appendChild(descripcion);
            divCardContent.appendChild(marca);
            divCardContent.appendChild(stock);
            divCardContent.appendChild(procedencia);
            _producto.appendChild(_article);
    }

    }

}