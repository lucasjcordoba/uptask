import swal from 'sweetalert2';
import axios from 'axios'

const btnEliminar = document.querySelector('#eliminar-proyecto');

btnEliminar.addEventListener('click', () => {
    swal.fire({
        title: "Realmente quieres eliminar éste proyecto?",
        text: "Un proyecto eliminado no se puede recuperar!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar',
        cancelButtonText: 'No, cancelar'
      })
      .then((willDelete) => {
        if (willDelete.value) {
          swal.fire(
              'Eliminado',
              'Tu proyecto ha sido eliminado con éxito',
              'error');
              setTimeout(() => {
                  window.location.href = '/'
              }, 2000)
        } else {
            swal.fire(
                'No eliminado',
                'No has eliminado tu proyecto',
                'success');
        }
      });
})