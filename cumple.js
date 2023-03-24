const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const messageInput = document.querySelector('#message');
const messageSection = document.querySelector('#messages');

// Escucha el evento submit del formulario
form.addEventListener('submit', function(event) {
  // Prevenir el comportamiento predeterminado del formulario
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const name = nameInput.value;
  const message = messageInput.value;

  // Crear un objeto para representar el mensaje
  const messageObj = { name, message };

  // Obtener los mensajes existentes de localStorage y agregar el nuevo mensaje
  let messages = JSON.parse(localStorage.getItem('messages')) || [];
  messages.push(messageObj);

  // Almacenar los mensajes en localStorage
  localStorage.setItem('messages', JSON.stringify(messages));

  // Mostrar los mensajes en la sección de mensajes
  messageSection.innerHTML = '';
  messages.forEach(function(message) {
    const div = document.createElement('section');
    div.innerHTML = `<strong>${message.name}:</strong> ${message.message}`;
    messageSection.appendChild(div);
  });

  // Limpiar los campos del formulario
  nameInput.value = '';
  messageInput.value = '';
});

// Obtener los mensajes de localStorage y mostrarlos en la sección de mensajes
let messages = JSON.parse(localStorage.getItem('messages')) || [];
messages.forEach(function(message) {
  const div = document.createElement('section');
  div.innerHTML = `<strong>${message.name}:</strong> ${message.message}`;
  messageSection.appendChild(div);
});

