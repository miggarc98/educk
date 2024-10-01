/**
 * @file
 * educk_theme behaviors.
 */


(function ($, Drupal) {
  Drupal.behaviors.educkThemeDropdown = {
    attach: function (context, settings) {
      $(context).find('.dropdown-toggle').once('educkThemeDropdown').each(function () {
        new bootstrap.Dropdown(this);
      });
    }
  };
})(jQuery, Drupal);
(function ($, Drupal) {
  Drupal.behaviors.educkThemeDropdown = {
    attach: function (context, settings) {
      // Usar .each() en lugar de .once()
      $(context).find('.dropdown-toggle').each(function () {
        var $this = $(this);
        // Verificar si ya hemos inicializado este elemento
        if (!$this.data('dropdown-initialized')) {
          $this.on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            var $dropdownMenu = $this.siblings('.dropdown-menu');
            $('.dropdown-menu').not($dropdownMenu).removeClass('show');
            $dropdownMenu.toggleClass('show');
          });
          // Marcar como inicializado
          $this.data('dropdown-initialized', true);
        }
      });

      // Cerrar el dropdown al hacer clic fuera de él
      $(document).on('click', function (e) {
        if (!$(e.target).closest('.dropdown').length) {
          $('.dropdown-menu').removeClass('show');
        }
      });
    }
  };
})(jQuery, Drupal);

document.addEventListener('DOMContentLoaded', function() {
  const menuWrapper = document.querySelector('.menu-lateral-wrapper');
  const menuToggle = document.getElementById('menu-toggle');
  const layoutContainer = document.querySelector('.layout-container');

  menuToggle.addEventListener('click', function() {
    menuWrapper.classList.toggle('menu-lateral-wrapper--collapsed');
    menuWrapper.classList.toggle('menu-lateral-wrapper--expanded');
    layoutContainer.classList.toggle('layout-container--expanded');
  });

  // Código existente para los submenús
  document.querySelectorAll('.menu-lateral__toggle').forEach(button => {
    button.addEventListener('click', () => {
      const menuItem = button.closest('.menu-lateral__item');
      menuItem.classList.toggle('menu-lateral__item--expanded');
      button.setAttribute('aria-expanded', 
        button.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
      button.textContent = button.textContent === '+' ? '-' : '+';
    });
  });
});