<?php include 'Components/head.config.component.php';

    require_once ('../../config/config.php');
    require_once ('../Controllers/DishController.php');

    $dishRepository = new DishRepository($db);
    $dishController = new DishController($dishRepository);
    $dishController->dishList();
    $dishes = $dishController->dishList();
?>
    <h1>Lista de Pratos</h1>
        <ul>
            <?php  foreach ($dishes as $dish): ?>
                <li>
                    <h2><?php echo $dish['name']; ?></h2>
                    <p>Preço: <?php echo $dish['price']; ?></p>
                    <p>Descrição: <?php echo $dish['description']; ?></p>
                </li>
            <?php endforeach; ?>
        </ul>
<?php include 'Components/footer.config.component.php'; ?>

