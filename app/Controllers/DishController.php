<?php

require_once ('../Repository/DishRepository.php');

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

            $this->dishRepository->submitNewDish($name, $description, $image);

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
    
            $this->dishRepository->submitUpdateDish($name, $description, $image, $id);
    
            echo json_encode($data);
        }
    }

    public function deleteDish($id) {
        if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
            $this->dishRepository->deleteOneDish($id);
        }
    }
}