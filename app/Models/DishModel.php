<?php
    class Dish {
        private $id;
        public $name;
        public $price;
        public $description;
        public $image;
        public $category_id;
        public $prep_time;
        public $rating;
        public $availability;
        public $ingredients;

    
        public function getId() {
            return $this->id;
        }
    }
?>