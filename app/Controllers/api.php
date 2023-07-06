<?php
    require_once ('../../config/config.php');
    require_once ('./DishController.php');

    $request = $_SERVER['REQUEST_URI'];

    $dishRepository = new DishRepository($db);
    $dishController = new DishController($dishRepository);

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Content-Type: application/json');

    if ($_SERVER['REQUEST_METHOD'] === 'GET' && preg_match('#^/fonditas/app/v1/dishes/(\d+)$#', $request, $matches)) {
        $api_response = $dishController->getDish($matches[1]);
    } elseif ($_SERVER['REQUEST_METHOD'] === 'GET' && $request === '/fonditas/app/v1/dishes') {
        $api_response = $dishController->apiDishList();
    } elseif ($_SERVER['REQUEST_METHOD'] === 'POST' && $request === '/fonditas/app/v1/dish') {
        $api_response = $dishController->createDish();
        http_response_code(201);
    } elseif ($_SERVER['REQUEST_METHOD'] === 'PUT' && preg_match('#^/fonditas/app/v1/dish/(\d+)$#', $request, $matches)) {
        $api_response = $dishController->updateDish($matches[1]);
        http_response_code(200);
    } elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE' && preg_match('#^/fonditas/app/v1/dish/(\d+)$#', $request, $matches)) {
        $api_response = $dishController->deleteDish($matches[1]);
        http_response_code(204);
    } else {
        http_response_code(404);
        $api_response = ['error' => 'Endpoint not found: ' . $request];
    }
?>
