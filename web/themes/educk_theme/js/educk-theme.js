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
