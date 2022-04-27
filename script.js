
      let opciones  = document.querySelector(".opciones")
      let textoArea = document.querySelector(".areaTexto")
      
      opciones.addEventListener("change", (event) => {
        let opcion = event.target.value
        textoArea.innerText = opcion
      })