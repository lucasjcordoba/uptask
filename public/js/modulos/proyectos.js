import swal from 'sweetalert2';
import axios from 'axios'

const btnEliminar = document.querySelector('#eliminar-proyecto');

if (btnEliminar){
  btnEliminar.addEventListener('click', (e) => {
    const urlProyecto = e.target.dataset.proyectoUrl;

    //console.log(urlProyecto);


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
            
        const url = `${location.origin}/proyectos/${urlProyecto}`
        
        axios.delete(url, {params: {urlProyecto}})
          .then(function(respuesta){
            console.log(respuesta);
          });

       
          swal.fire(
              'Eliminado',
              respuesta.data,
              'error');
             
        } else {
            swal.fire(
                'No eliminado',
                'No has eliminado tu proyecto',
                'success');
        }
        setTimeout(() => {
          window.location.href = '/'
      }, 2000)

      
      });
})
}

export default btnEliminar ;
