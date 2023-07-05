<?php
    require_once ('../../config/config.php');
    require_once ('./DishController.php');

    $dishRepository = new DishRepository($db);
    $dishController = new DishController($dishRepository);
    $dishController->apiDishList();
?>
