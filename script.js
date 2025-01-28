// script.js
document.querySelectorAll('.navbar button').forEach(button => {
    button.addEventListener('click', () => {
      const target = document.querySelector(button.dataset.target);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
// script.js
function switchLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
      element.style.display = element.getAttribute('data-lang') === lang ? '' : 'none';
    });
  }
  
  // Alterna para Português
  document.getElementById('pt-btn').addEventListener('click', () => {
    switchLanguage('pt');
  });
  
  // Alterna para Inglês
  document.getElementById('en-btn').addEventListener('click', () => {
    switchLanguage('en');
  });
  
  // Defina o idioma padrão
  switchLanguage('pt'); // Define como "pt" no início

  
  