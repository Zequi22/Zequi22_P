document.addEventListener('DOMContentLoaded', () => {
  const languageToggle = document.getElementById('language-toggle');
  const elementsWithLang = document.querySelectorAll('[data-lang-es], [data-lang-en]');
  
  let currentLanguage = 'es';

  languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    updateLanguage();
  });

  function updateLanguage() {
    elementsWithLang.forEach(element => {
      const esText = element.getAttribute('data-lang-es');
      const enText = element.getAttribute('data-lang-en');
      
      if (currentLanguage === 'es') {
        element.textContent = esText;
        document.querySelector('.lang-es').classList.remove('hidden');
        document.querySelector('.lang-en').classList.add('hidden');
        document.documentElement.lang = 'es';
      } else {
        element.textContent = enText;
        document.querySelector('.lang-es').classList.add('hidden');
        document.querySelector('.lang-en').classList.remove('hidden');
        document.documentElement.lang = 'en';
      }
    });
  }

  // Update any hardcoded references to the name
  const nameElements = document.querySelectorAll('[data-lang-es*="Juan"], [data-lang-en*="Juan"]');
  nameElements.forEach(element => {
    const esText = element.getAttribute('data-lang-es').replace('Juan', 'Ezequiel');
    const enText = element.getAttribute('data-lang-en').replace('Juan', 'Ezequiel');
    
    element.setAttribute('data-lang-es', esText);
    element.setAttribute('data-lang-en', enText);
    
    // Update current language
    element.textContent = currentLanguage === 'es' ? esText : enText;
  });

  // Initial language setup
  updateLanguage();
});