<?php

    require_once ('../../config/config.php');
    require_once ('../Controllers/DishController.php');

    $dishRepository = new DishRepository($db);
    $dishController = new DishController($dishRepository);
    $dishController->dishList();
    $dishes = $dishController->dishList();

    header('Content-Type: application/json');
    echo json_encode($dishes);
?>