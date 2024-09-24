/**
 * @file
 * educk_theme behaviors.
 */
(function (Drupal) {
  'use strict';

  // Definición del comportamiento de Drupal
  Drupal.behaviors.educkTheme = {
    attach: function (context, settings) {
      console.log('It works!'); // Este mensaje se mostrará cada vez que se cargue o actualice el contenido
    }
  };

  console.log('Educk theme JS is loaded'); // Este mensaje se mostrará una vez cuando se cargue el archivo JS

})(Drupal);
