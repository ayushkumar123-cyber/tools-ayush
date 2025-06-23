document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-include]').forEach(function(el) {
    fetch(el.getAttribute('data-include'))
      .then(response => response.text())
      .then(data => { el.innerHTML = data; });
  });
}); 