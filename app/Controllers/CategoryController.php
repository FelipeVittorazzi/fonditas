<?php

require_once ('../Repository/CategoryRepository.php');

header("Access-Control-Allow-Origin: *"); 
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS'); 
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');

class CategoryController
{
    private $categoryRepository;

    public function __construct(CategoryRepositoryInterface $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function getCategory($id) {
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            $category = $this->categoryRepository->getOneCategory($id);
            echo json_encode($category);
        }
    }

    public function apiCategoryList()
    {
        $categories = $this->categoryRepository->getAllCategories();
        echo json_encode($categories);
    }

    public function createCategory() {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $json = file_get_contents('php://input');
            $data = json_decode($json, true);

            $name = $data['name'];
            $description = $data['description'];
            $image = $data['image'];

            $this->categoryRepository->submitNewCategory($name, $description, $image);

            echo json_encode($data);
        }
    }

    public function updateCategory($id) {
        if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
            $json = file_get_contents('php://input');
            $data = json_decode($json, true);
    
            $name = $data['name'];
            $description = $data['description'];
            $image = $data['image'];
    
            $this->categoryRepository->submitUpdateCategory($name, $description, $image, $id);
    
            echo json_encode($data);
        }
    }

    public function deleteCategory($id) {
        if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
            $this->categoryRepository->deleteOneCategory($id);
        }
    }
}
