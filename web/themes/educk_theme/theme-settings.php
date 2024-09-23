<?php

declare(strict_types=1);

/**
 * @file
 * Theme settings form for educk_theme theme.
 */

use Drupal\Core\Form\FormState;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function educk_theme_form_system_theme_settings_alter(array &$form, FormState $form_state): void {

  $form['educk_theme'] = [
    '#type' => 'details',
    '#title' => t('educk_theme'),
    '#open' => TRUE,
  ];

  $form['educk_theme']['example'] = [
    '#type' => 'textfield',
    '#title' => t('Example'),
    '#default_value' => theme_get_setting('example'),
  ];

}
