<?php
    // Exemplo de roteador simples
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    
    // Inclua as classes necessárias
    require_once ('config/config.php');
    require_once ('Controllers/DishController.php');
    
    $dishRepository = new DishRepository($db);
    $dishController = new DishController($dishRepository);

    if ('/fonditas/app/v1/dishes' === $uri) {
        $dishController->apiDishList();
    } else {
        header('HTTP/1.1 404 Not Found');
    }
?>
