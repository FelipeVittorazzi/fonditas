import { Button, CardMedia, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import { IDish } from "../../../interfaces/IDish";
import http from "../../../http"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dishes = () => {

    const [dishes, setDishes] = useState<IDish[]>([]);

    const DeleteDish = (dishOnDeleted: IDish) => {
        http.delete<IDish>(`dish/${dishOnDeleted.id}`)
        .then(() => {
            const listDishes = dishes.filter((dish) => dish.id !== dishOnDeleted.id)
            setDishes([...listDishes])
        })
    }

    useEffect(() => {
        http.get<IDish[]>('dishes') 
        .then(response => {
            setDishes(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return ( 
        <TableContainer component={Paper} sx={{ paddingTop: 5}} >
        <Typography  component="h1"  variant="h1" >Pratos</Typography>
        <Link to={"/admin/dish/new"}>
            <Button variant="outlined">
                Criar Prato
            </Button>
        </Link>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Nome
                    </TableCell>
                    <TableCell>
                        Descrição
                    </TableCell>
                    <TableCell>
                        Imagem
                    </TableCell>
                    <TableCell>
                        Editar
                    </TableCell>
                    <TableCell>
                        Excluir
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {dishes.map(dish => <TableRow key={dish.id}>
                    <TableCell>
                        {dish.name}
                    </TableCell>
                    <TableCell style={{ width: 50, overflow: "hidden"}}>
                        {dish.description}
                    </TableCell>
                    <TableCell>
                        <CardMedia
                            component="img"
                            sx={{ width: 100 }}
                            image={dish.image}
                            alt="Live from space album cover"
                        />
                    </TableCell>
                    <TableCell>
                        <Link to={`/admin/dish/${dish.id}`}>
                            <EditIcon aria-label="Editar" sx={{color: "black"}} />
                        </Link>
                    </TableCell>
                    <TableCell>
                        <Button>
                            <DeleteOutlineIcon aria-label="Excluir" color="error" 
                                onClick={() => DeleteDish(dish)}
                            />
                        </Button>
                    </TableCell>
                </TableRow>)}

            </TableBody>
        </Table>
    </TableContainer>
    );
}
 
export default Dishes;