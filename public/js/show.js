const inputpass = document.getElementById('password');
const inputshowpass = document.getElementById('showpass');

inputshowpass.addEventListener('click', function(){
    const type = inputpass.getAttribute('type') === 'password' ? 'text': 'password';
    inputpass.setAttribute('type',type);
    inputshowpass.classList.toggle('active');
});