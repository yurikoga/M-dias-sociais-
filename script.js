const btn = document.getElementById('fabBtn');
const menu = document.getElementById('socialMenu');
const icon = document.getElementById('fabIcon');

btn.addEventListener('click', () => {
  // Alterna o menu
  menu.classList.toggle('active');
  
  // Alterna a cor e o ícone do botão
  if (menu.classList.contains('active')) {
    btn.classList.remove('roxo');
    btn.classList.add('vermelho');
    icon.classList.replace('fa-plus', 'fa-xmark');
  } else {
    btn.classList.remove('vermelho');
    btn.classList.add('roxo');
    icon.classList.replace('fa-xmark', 'fa-plus');
  }
});
