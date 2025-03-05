const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log(`None: ${name},E-mail ${email}, Mensagem: ${message}`);

})

document.getElementById("submit").addEventListener('click', function(){
    Swal.fire({
        title: "Obrigado pela mensagem!",
        text: "Estaremos analisando sua mensagem, e entraremos em contato.",
        icon: "success",
        button: "fechar",
        draggable: true
      });
    });