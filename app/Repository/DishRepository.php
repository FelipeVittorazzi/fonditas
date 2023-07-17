<?php 

require_once('../Interfaces/IDish.php');

header("Access-Control-Allow-Origin: *"); // Ou '*' para permitir qualquer origem
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS'); 
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');

class DishRepository implements DishRepositoryInterface
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function getOneDish($id)
    {
        $stmt = $this->db->prepare('SELECT * FROM dishes WHERE id=:id');
        $stmt->execute(['id' => $id]);
        
        $dish = $stmt->fetch(PDO::FETCH_ASSOC); 

        return $dish; 
    }


    public function getAllDishes()
    {
        $stmt = $this->db->query('SELECT * FROM dishes');
        $dishes = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $dishes;
    }

    public function submitNewDish($name, $description, $image, $ingredients, $price, $rating, $prepTime, $categoryId)
    {
        $stmt = $this->db->prepare('INSERT INTO dishes (name, description, image, ingredients, price, rating, prep_time, category_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
        $stmt->execute([$name, $description, $image, $ingredients, $price, $rating, $prepTime, $categoryId]);
    }

    public function submitUpdateDish($name, $description, $image, $ingredients, $price, $rating, $prepTime, $categoryId, $id) {
        $data = [
            'name' => $name,
            'description' => $description,
            'image' => $image,
            'ingredients' => $ingredients,
            'price' => $price,
            'rating' => $rating,
            'prep_time' => $prepTime,
            'category_id' => $categoryId,
            'id' => $id
        ];
        $sql = "UPDATE dishes SET name=:name, description=:description, image=:image, ingredients=:ingredients, price=:price, rating=:rating, prep_time=:prep_time, category_id=:category_id WHERE id=:id";
        $stmt= $this->db->prepare($sql);
        $stmt->execute($data);
    }

    public function deleteOneDish($id) {
        $stmt = $this->db->prepare("DELETE FROM dishes WHERE id=:id");
        $stmt->execute([':id' => $id]);
    }
}

?>