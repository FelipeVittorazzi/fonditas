<?php 

interface DishRepositoryInterface
{
    public function getOneDish($id);
    public function getAllDishes();
    public function submitNewDish($name, $description, $image, $ingredients, $price, $rating, $prepTime, $categoryId);
    public function submitUpdateDish($name, $description, $image, $ingredients, $price, $rating, $prepTime, $categoryId, $id);
    public function deleteOneDish($id);
}

?>