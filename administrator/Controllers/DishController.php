<?php

    interface DishRepositoryInterface {
        public function getAllDishes();
    }

    class DishRepository implements DishRepositoryInterface {
        private $db;
    
        public function __construct($db) {
            $this->db = $db;
        }
    
        public function getAllDishes() {
            $stmt = $this->db->query('SELECT * FROM dishes');
            $dishes = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $dishes;
        }
        
    }
    
    class DishController {
        private $dishRepository;
    
        public function __construct(DishRepositoryInterface $dishRepository) {
            $this->dishRepository = $dishRepository;
        }
    
        public function dishList() {
            $dishes = $this->dishRepository->getAllDishes();
    
            return $dishes;
        }
    }
?>