fetch('mensajes.json')
  .then(response => response.json())
  .then(data => {
    const mensajesDiv = document.getElementById('mensages');
    const messages = data.messages;

    messages.forEach(mensaje => {
      const mensajeElement = document.createElement('section');
      mensajeElement.innerHTML= `<strong>${mensaje.nombre}:</strong> ${mensaje.mensaje}`;
      mensajesDiv.appendChild(mensajeElement);
    });
  })
  .catch(error => console.error(error));
