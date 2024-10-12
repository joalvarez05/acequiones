<script>
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evitar que se recargue la página

    const formData = new FormData(form);

    const response = await fetch('/send-email', {
      method: 'POST',
      body: JSON.stringify({
        nombre: formData.get('nombre'),
        email: formData.get('email'),
        consulta: formData.get('consulta')
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.text();
    document.getElementById('responseMessage').textContent = result;
  });
</script>
