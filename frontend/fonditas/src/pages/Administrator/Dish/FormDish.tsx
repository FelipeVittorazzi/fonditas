import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { IDish } from "../../../interfaces/IDish";
import { useState, useEffect } from "react";
import http from "../../../http";
import { useParams } from "react-router-dom";

const FormDish = () => {
    
    const [dishName, setDishName] = useState('');
    const [dishDesc, setDishDesc] = useState('');
    const [dishPrice, setDishPrice] = useState<number | undefined>(undefined);
    const [dishImage, setDishImage] = useState('');
    const [dishPrepTime, setDishPrepTime] = useState<number | undefined>(undefined);
    const [dishRating, setDishRating] = useState('');
    const [dishIngredients, setDishIngredients] = useState('');
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            http.get<IDish>(`dishes/${params.id}`)
                .then(response => {
                    setDishName(response.data.name)
                    setDishDesc(response.data.description)
                    setDishPrice(response.data.price)
                    setDishImage(response.data.image)
                    setDishRating(response.data.rating)
                    setDishIngredients(response.data.ingredients)
                    setDishPrepTime(response.data.prepTime)
                })
        }
    }, [params]);


    const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (params.id) { 
            http.put<IDish[]>(`dish/${params.id}`, {
                name: dishName,
                price: dishPrice,
                description: dishDesc,
                image: dishImage,
                prep_time: dishPrepTime,
                rating: dishRating,
                ingredients: dishIngredients
            })
            .then(() => {
                alert("Restaurante atualizado com sucesso!")
            })

        } else {
            http.post<IDish[]>('dish', {
                name: dishName,
                price: dishPrice,
                description: dishDesc,
                image: dishImage,
                prep_time: dishPrepTime,
                rating: dishRating,
                ingredients: dishIngredients
            })
            .then(() => {
                alert("Restaurante cadastrado com sucesso!")
            })
        }
    }
    
    return (
        <Container sx={{ marginTop: 20}}>
        <Grid
            container
            spacing={2}
            sx={{ display: 'flex', justifyContent: 'center'}}
        >
            <Box component="form" onSubmit={onSubmitForm} sx={{width: "50%"}}>
                <Typography component="h1" variant="h6">Formulário de Prato</Typography>
                <Grid sx={{marginBottom: 1}}>
                    <TextField
                        id="standard-basic"
                        value={dishName}
                        onChange={event => setDishName(event.target.value)}
                        label="Prato"
                        variant="standard"
                        fullWidth
                        required
                    />
                    <TextField
                        id="standard-basic"
                        value={dishIngredients}
                        onChange={event => setDishIngredients(event.target.value)}
                        label="Ingredientes"
                        variant="standard"
                        fullWidth
                        required
                    />
                    <TextField
                        id="standard-basic"
                        value={dishDesc}
                        onChange={event => setDishDesc(event.target.value)}
                        label="Descrição"
                        variant="standard"
                        fullWidth
                        multiline
                    />
                    <TextField
                        id="standard-basic"
                        value={dishImage}
                        onChange={event => setDishImage(event.target.value)}
                        label="Imagem"
                        variant="standard"
                        fullWidth
                        required
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                id="standard-basic"
                                value={dishPrice}
                                onChange={event => setDishPrice(Number(event.target.value))}
                                label="Preço"
                                variant="standard"
                                fullWidth
                                required
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="standard-basic"
                                value={dishPrepTime}
                                onChange={event => setDishPrepTime(Number(event.target.value))}
                                label="Tempo de preparo"
                                variant="standard"
                                fullWidth
                                required
                                type="number"
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        id="standard-basic"
                        value={dishRating}
                        onChange={event => setDishRating(event.target.value)}
                        label="Nota"
                        variant="standard"
                        fullWidth
                    />
                </Grid>
                <Grid>
                    <Button
                        sx={{ width: '100%'}}   
                        type="submit"
                        variant="outlined"
                        fullWidth>
                        Salvar
                    </Button>
                </Grid>
            </Box>
        </Grid>
    </Container>
    )
}

export default FormDish