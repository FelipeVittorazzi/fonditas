<?php
    require_once ('../../config/config.php');
    require_once ('./DishController.php');
    require_once ('./CategoryController.php');

    $request = $_SERVER['REQUEST_URI'];

    $dishRepository = new DishRepository($db);
    $dishController = new DishController($dishRepository);

    $categoryRepository = new CategoryRepository($db);
    $categoryController = new CategoryController($categoryRepository);

    header("Access-Control-Allow-Origin: *"); // Ou '*' para permitir qualquer origem
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS'); 
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
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
    } elseif ($_SERVER['REQUEST_METHOD'] === 'GET' && preg_match('#^/fonditas/app/v1/categories/(\d+)$#', $request, $matches)) {
        $api_response = $categoryController->getCategory($matches[1]);
    } elseif ($_SERVER['REQUEST_METHOD'] === 'GET' && $request === '/fonditas/app/v1/categories') {
        $api_response = $categoryController->apiCategoryList();
    } elseif ($_SERVER['REQUEST_METHOD'] === 'POST' && $request === '/fonditas/app/v1/category') {
        $api_response = $categoryController->createCategory();
        http_response_code(201);
    } elseif ($_SERVER['REQUEST_METHOD'] === 'PUT' && preg_match('#^/fonditas/app/v1/category/(\d+)$#', $request, $matches)) {
        $api_response = $categoryController->updateCategory($matches[1]);
        http_response_code(200);
    } elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE' && preg_match('#^/fonditas/app/v1/category/(\d+)$#', $request, $matches)) {
        $api_response = $categoryController->deleteCategory($matches[1]);
        http_response_code(204);
    } else {
        http_response_code(404);
        $api_response = ['error' => 'Endpoint not found: ' . $request];
    }
?>
