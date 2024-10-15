<?php

declare(strict_types=1);

namespace Drupal\educk_institution\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for Educk institution routes.
 */
final class EduckInstitutionController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function __invoke(): array {

    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];

    return $build;
  }

}
