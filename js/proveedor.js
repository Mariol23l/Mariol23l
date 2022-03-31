$(document).ready(function() {
    var funcion;
    var edit = false;
    buscar_prov();
    $('#form-crear').submit(e => {
        let id = $('#id_edit_prov').val();
        let nombre = $('#nombre').val();
        let razsocial = $('#razsocial').val();
        let telefono = $('#telefono').val();
        let correo = $('#correo').val();
        let direccion = $('#direccion').val();  
        if (edit==true) {
            funcion = 'editar';
        } else {
            funcion = 'crear';
        }
        $.post('../controlador/ProveedorController.php', { id, nombre, razsocial, telefono, correo, direccion, funcion }, (response) => {
            console.log(response);
           if (response=='add') {
                $('#addprov').hide('slow');
                $('#addprov').show(1000);
                $('#addprov').hide(2000);
                $('#form-crear').trigger('reset');
               buscar_prov();
           } else if (response == 'edit') {
                $('#editprov').hide('slow');
                $('#editprov').show(1000);
                $('#editprov').hide(2000);
               $('#form-crear').trigger('reset');            
               buscar_prov();
           } else {
                $('#noaddprov').hide('slow');
                $('#noaddprov').show(1000);
                $('#noaddprov').hide(2000);
                $('#form-crear').trigger('reset');
            }
            edit = false;
        });
        e.preventDefault();
    });

    function buscar_prov(consulta) {
        funcion = 'buscar';
        $.post('../controlador/ProveedorController.php', { funcion, consulta }, (response) => {
            const proveedores = JSON.parse(response);
            let template = '';
            proveedores.forEach(proveedor => {
                template += `
                <div provId="${proveedor.id}" provNombre="${proveedor.nombre}" provRazsocial="${proveedor.razsocial}" provTelefono="${proveedor.telefono}" provCorreo="${proveedor.correo}" provDireccion="${proveedor.direccion}" provAvatar="${proveedor.avatar}" class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
 
              <div class="card bg-light d-flex flex-fill">
                <div class="card-header  border-bottom-0">
                  <h1 class="badge bg-maroon text-navy">Proveedor</h1>
                </div>
                <div class="card-body pt-0">
                  <div class="row">
                    <div class="col-7">
                      <h2 class="lead"><b>${proveedor.nombre}</b></h2>
                      <ul class="ml-4 mb-0 fa-ul">
                        <li class="small"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span> RazonSocial: ${proveedor.razsocial}</li>
                        <li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span> Telefono : ${proveedor.telefono}</li>
                        <li class="small"><span class="fa-li"><i class="fas fa-lg fa-at"></i></span> Correo : ${proveedor.correo}</li>
                        <li class="small"><span class="fa-li"><i class="fas fa-map-marker-alt"></i></span> Direccion : ${proveedor.direccion}</li>
                      </ul>
                    </div>
                    <div class="col-5 text-center">
                      <img src="${proveedor.avatar}" alt="user-avatar" class="img-circle img-fluid">
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="text-right">
                    <button class="avatar btn btn-sm bg-teal mr-1" title="Editar logo" type="button" data-toggle="modal" data-target="#cambiologo">
                      <i class="fas fa-image"></i>
                    </button>
                    <button class="editar btn btn-sm bg-info mr-1" title="Editar Proveedor" data-toggle="modal" data-target="#crearproveedor">
                      <i class="fas fa-pencil"></i>
                    </button>
                    <button class="borrar btn btn-sm bg-maroon mr-1" title="Borra Proveedor">
                      <i class="fas fa-trash"></i>
                    </button>
          
                    </a>
                  </div>
                </div>
              </div>
            </div>
                `;
            });
            $('#proveedores').html(template);
        });
    } 

    $(document).on('keyup', '#buscar_proveedor', function () {
        let valor = $(this).val();
        if (valor!='') {
            buscar_prov(valor);
        } else {
            buscar_prov();
        }
    });
     
    $(document).on('click', '.avatar', (e) => {
        funcion = 'cambiar_logo';
        const elemento = $(this)[0].activeElement.parentElement.parentElement.parentElement.parentElement;
        const id = $(elemento).attr('provId');
        const nombre = $(elemento).attr('provNombre');
        const avatar = $(elemento).attr('provAvatar');

        $('#logoactual').attr('src',avatar);
        $('#nombre_logo').html(nombre);
        $('#id_edit_prov').val(id);
        $('#funcion').val(funcion);
        $('#avatar').val(avatar);
    });

    $(document).on('click', '.editar', (e) => {
        const elemento = $(this)[0].activeElement.parentElement.parentElement.parentElement.parentElement;
        const id = $(elemento).attr('provId');
        const nombre = $(elemento).attr('provNombre');
        const razsocial = $(elemento).attr('provRazsocial');
        const direccion = $(elemento).attr('provDireccion');
        const telefono = $(elemento).attr('provTelefono');
        const correo = $(elemento).attr('provCorreo');
        $('#id_edit_prov').val(id);
        $('#nombre').val(nombre);
        $('#razsocial').val(razsocial);
        $('#direccion').val(direccion);
        $('#telefono').val(telefono);
        $('#correo').val(correo);
        edit = true;
    });

    $('#form-logo').submit(e => {
        let formData = new FormData($('#form-logo')[0]);
        $.ajax({
            url: '../controlador/ProveedorController.php',
            type: 'POST',
            data: formData,
            cache: false,
            processData: false,
            contentType: false
        }).done(function (response) {
            const json = JSON.parse(response);  
            if (json.alert == 'edit') {          
                $('#logoactual').attr('src', json.ruta);
                $('#edit-prov').hide('slow');
                $('#edit-prov').show(1000);
                $('#edit-prov').hide(2000);
                $('#form-logo').trigger('reset');
                buscar_prov();
            } else {
                $('#noedit-prov').hide('slow');
                $('#noedit-prov').show(1000);
                $('#noedit-prov').hide(2000);
                $('#form-logo').trigger('reset');              
            }
        });
        e.preventDefault();
    });

    $(document).on('click', '.borrar', (e) => {
        funcion = "borrar";
        const elemento = $(this)[0].activeElement.parentElement.parentElement.parentElement.parentElement;
        const id = $(elemento).attr('provId');
        const nombre = $(elemento).attr('provNombre');
        const avatar = $(elemento).attr('provAvatar');
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger mr-2'
            },
            buttonsStyling: false
        })
          
        swalWithBootstrapButtons.fire({
            title: 'Desea eliminar el proveedor ' + nombre + '?',
            text: "No podras revertir esto!",
            imageUrl: '' + avatar + '',
            imageWidth: 100,
            imageHeight: 100,
            showCancelButton: true,
            confirmButtonText: 'Si, borrar esto!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                $.post('../controlador/ProveedorController.php', { id, funcion }, (response) => {
                    if (response == 'borrado') {
                        swalWithBootstrapButtons.fire(
                            'Borrado!',
                            'El proveedor ' + nombre + ' ha sido eliminado con exito.',
                            'success'
                        )
                        buscar_prov();
                    } else {
                        swalWithBootstrapButtons.fire(
                            'No se pudo borrar!!',
                            'El proveedor' + nombre + ' no fue borrado porque esta siendo usado en un lote',
                            'error'
                        )
                    }
                })
                
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'El proveedor ' + nombre + ' no fue borrado',
                    'error'
                )
            }
        })
    });

});