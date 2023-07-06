<?php 

interface DishRepositoryInterface
{
    public function getOneDish($id);
    public function getAllDishes();
    public function submitNewDish($name, $description, $image);
    public function submitUpdateDish($name, $description, $image, $id);
    public function deleteOneDish($id);
}

?>