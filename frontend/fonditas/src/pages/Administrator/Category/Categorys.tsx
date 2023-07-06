import { Button, CardMedia, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { ICategory } from "../../../interfaces/ICategory";
import http from "../../../http"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categorys = () => {

    const [categorys, setCategorys] = useState<ICategory[]>([]);

    useEffect(() => {
        http.get<ICategory[]>('categorys') 
        .then(response => {
            setCategorys(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return ( 
        <TableContainer component={Paper} sx={{ paddingTop: 5}} >
        <Typography  component="h1"  variant="h1" >Pratos</Typography>
        <Link to={"/admin/category/new"}>
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
                {categorys.map(category => <TableRow key={category.id}>
                    <TableCell>
                        {category.name}
                    </TableCell>
                    <TableCell style={{ width: 50, overflow: "hidden"}}>
                        {category.description}
                    </TableCell>
                    <TableCell>
                        <CardMedia
                            component="img"
                            sx={{ width: 100 }}
                            image={category.image}
                            alt="Live from space album cover"
                        />
                    </TableCell>
                    <TableCell>
                        <Link to={`/admin/category/${category.id}`}>
                            <EditIcon aria-label="Editar" sx={{color: "black"}} />
                        </Link>
                    </TableCell>
                    <TableCell>
                        {/* <Button>
                            <DeleteOutlineIcon aria-label="Excluir" color="error" 
                                onClick={() => excluir(prato)}
                            />
                        </Button> */}
                    </TableCell>
                </TableRow>)}

            </TableBody>
        </Table>
    </TableContainer>
    );
}
 
export default Categorys;