<?php 

require_once('../Interfaces/ICategory.php');

header("Access-Control-Allow-Origin: *"); // Ou '*' para permitir qualquer origem
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS'); 
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');

class CategoryRepository implements CategoryRepositoryInterface
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function getOneCategory($id)
    {
        $stmt = $this->db->prepare('SELECT * FROM dish_categories WHERE id=:id');
        $stmt->execute(['id' => $id]);
        
        $category = $stmt->fetch(PDO::FETCH_ASSOC); 

        return $category; 
    }


    public function getAllCategories()
    {
        $stmt = $this->db->query('SELECT * FROM dish_categories');
        $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $categories;
    }

    public function submitNewCategory($name, $description, $image)
    {
        $stmt = $this->db->prepare('INSERT INTO dish_categories (name, description, image) VALUES (?, ?, ?)');
        $stmt->execute([$name, $description, $image]);
    }

    public function submitUpdateCategory($name, $description, $image, $id) {
        $data = [
            'name' => $name,
            'description' => $description,
            'image' => $image,
            'id' => $id
        ];
        $sql = "UPDATE dish_categories SET name=:name, description=:description, image=:image WHERE id=:id";
        $stmt= $this->db->prepare($sql);
        $stmt->execute($data);
    }

    public function deleteOneCategory($id) {
        $stmt = $this->db->prepare("DELETE FROM dish_categories WHERE id=:id");
        $stmt->execute([':id' => $id]);
    }
}

?>
