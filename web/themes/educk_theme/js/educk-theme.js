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
            
            // Cerrar todos los otros dropdowns
            $('.dropdown-menu').not($dropdownMenu).removeClass('show');
            
            // Alternar la clase 'show' en el dropdown actual
            $dropdownMenu.toggleClass('show');
            
            // Si el dropdown actual estaba abierto, cerrarlo
            if (!$dropdownMenu.hasClass('show')) {
              $dropdownMenu.removeClass('show');
            }
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

function showLoader() {
  document.getElementById('loader-spinner').style.display = 'block';
}

function hideLoader() {
  document.getElementById('loader-spinner').style.display = 'none';
}

(function ($, Drupal) {
  Drupal.behaviors.globalMessages = {
    attach: function (context, settings) {
      once('global-messages', 'body', context).forEach(function () {
        // Asegúrate de que el contenedor de mensajes existe
        if (!$('#global-message-container').length) {
          $('body').prepend('<div id="global-message-container"></div>');
        }

        // Función global para mostrar mensajes
        Drupal.showMessage = function(message, type = 'status', duration = 5000) {
          const container = $('#global-message-container');
          const iconSrc = obtenerRutaIcono(type);
          const messageElement = $(`
            <div class="message message-${type}">
              <span class="message-text">
                <img src="${iconSrc}" alt="Icono de ${type}" class="message-icon">
                ${message}
              </span>
              <button class="message-close">&times;</button>
            </div>
          `);

          container.append(messageElement);

          messageElement.find('.message-close').on('click', function() {
            messageElement.fadeOut('fast', function() { $(this).remove(); });
          });

          if (duration > 0) {
            setTimeout(() => {
              messageElement.fadeOut('slow', function() { $(this).remove(); });
            }, duration);
          }
        };

        // Ejemplo de uso (puedes eliminar esto en producción)
        // $('#add-test-message').on('click', function() {
        //   Drupal.showMessage('Este es un mensaje de prueba', 'status');
        // });
      });
    }
  };
})(jQuery, Drupal);
function obtenerRutaIcono(type) {
  const baseUrl = '/themes/educk_theme/images/'; // Ajusta esta ruta según tu estructura de archivos
  switch(type) {
    case 'status':
      return baseUrl + 'check_circle.svg';
    case 'warning':
      return baseUrl + 'warning_triangle.svg';
    case 'error':
      return baseUrl + 'ERROR.png';
    default:
      return baseUrl + 'info_circle-menu.svg';
  }
}