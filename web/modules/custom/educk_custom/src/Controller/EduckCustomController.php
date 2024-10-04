<?php

declare(strict_types=1);

namespace Drupal\educk_custom\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Returns responses for Educk custom routes.
 */
class MessageController extends ControllerBase {

  public function addMessage($type, $message) {
    $this->messenger()->addMessage($this->t($message), $type);
    return new JsonResponse(['status' => 'success']);
  }

}
