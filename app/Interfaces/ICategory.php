<?php 

interface CategoryRepositoryInterface
{
    public function getOneCategory($id);
    public function getAllCategories();
    public function submitNewCategory($name, $description, $image);
    public function submitUpdateCategory($name, $description, $image, $id);
    public function deleteOneCategory($id);
}

?>