<?php 

require_once('../Interfaces/IDish.php');

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

    public function submitNewDish($name, $description, $image)
    {
        $stmt = $this->db->prepare('INSERT INTO dishes (name, description, image) VALUES (?, ?, ?)');
        $stmt->execute([$name, $description, $image]);
    }

    public function submitUpdateDish($name, $description, $image, $id) {
        $data = [
            'name' => $name,
            'description' => $description,
            'image' => $image,
            'id' => $id
        ];
        $sql = "UPDATE dishes SET name=:name, description=:description, image=:image WHERE id=:id";
        $stmt= $this->db->prepare($sql);
        $stmt->execute($data);
    }

    public function deleteOneDish($id) {
        $stmt = $this->db->prepare("DELETE FROM dishes WHERE id=:id");
        $stmt->execute([':id' => $id]);
    }
}

?>