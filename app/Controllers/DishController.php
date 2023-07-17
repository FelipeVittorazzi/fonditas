<?php

require_once ('../Repository/DishRepository.php');

header("Access-Control-Allow-Origin: *"); // Ou '*' para permitir qualquer origem
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS'); 
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');

class DishController
{
    private $dishRepository;

    public function __construct(DishRepositoryInterface $dishRepository)
    {
        $this->dishRepository = $dishRepository;
    }

    public function getDish($id) {
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            $dishe = $this->dishRepository->getOneDish($id);
            echo json_encode($dishe);
        }
    }

    public function apiDishList()
    {
        $dishes = $this->dishRepository->getAllDishes();
        echo json_encode($dishes);
    }

    public function createDish() {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            // Ler os dados da requisição JSON
            $json = file_get_contents('php://input');
            $data = json_decode($json, true);

            // Aqui você pode adicionar validação dos dados como quiser
            $name = $data['name'];
            $description = $data['description'];
            $image = $data['image'];
            $ingredients = $data['ingredients'];
            $price = $data['price'];
            $rating = $data['rating'];
            $prepTime = $data['prep_time'];
            $categoryId = $data['category_id'];

            $this->dishRepository->submitNewDish($name, $description, $image, $ingredients, $price, $rating, $prepTime, $categoryId);

            echo json_encode($data);
        }
    }

    public function updateDish($id) {
        if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
            $json = file_get_contents('php://input');
            $data = json_decode($json, true);
    
            $name = $data['name'];
            $description = $data['description'];
            $image = $data['image'];
            $ingredients = $data['ingredients'];
            $price = $data['price'];
            $rating = $data['rating'];
            $prepTime = $data['prep_time'];
            $categoryId = $data['category_id'];
    
            $this->dishRepository->submitUpdateDish($name, $description, $image, $ingredients, $price, $rating, $prepTime, $categoryId, $id);
    
            echo json_encode($data);
        }
    }

    public function deleteDish($id) {
        if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
            $this->dishRepository->deleteOneDish($id);
        }
    }
}