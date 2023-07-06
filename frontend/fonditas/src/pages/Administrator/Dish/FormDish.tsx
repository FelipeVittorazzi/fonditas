import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { IDish } from "../../../interfaces/IDish";
import { useState, useEffect } from "react";
import http from "../../../http";
import { useParams } from "react-router-dom";

const FormDish = () => {
    
    const [dishName, setDishName] = useState('');
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            http.get<IDish>(`dishes/${params.id}`)
                .then(response => {
                    setDishName(response.data.name)
                })
        }
    }, [params]);
    
    return (
        <Container sx={{ marginTop: 20}}>
        <Grid
            container
            spacing={2}
            sx={{ display: 'flex', justifyContent: 'center'}}
        >
            <Box component="form"  sx={{width: "50%"}}>
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