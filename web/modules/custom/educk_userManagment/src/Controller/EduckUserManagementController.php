<?php

namespace Drupal\educk_userManagment\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Password\PasswordGeneratorInterface;
use Drupal\Core\Logger\LoggerChannelFactoryInterface;
use Drupal\Core\Messenger\MessengerInterface;
use Drupal\views\ViewExecutableFactory;
use Drupal\views\Views;

class EduckUserManagementController extends ControllerBase {

    protected $entityTypeManager;
    protected $passwordGenerator;
    protected $logger;
    protected $messenger;
    protected $viewExecutableFactory;

    public function __construct(
        EntityTypeManagerInterface $entity_type_manager,
        PasswordGeneratorInterface $password_generator,
        LoggerChannelFactoryInterface $logger_factory,
        MessengerInterface $messenger,
        ViewExecutableFactory $view_executable_factory
      ) {
        $this->entityTypeManager = $entity_type_manager;
        $this->passwordGenerator = $password_generator;
        $this->logger = $logger_factory->get('educk_userManagment');
        $this->messenger = $messenger;
        $this->viewExecutableFactory = $view_executable_factory;
      }
      
  public function content() {

  
    
  }
}