import { Box, Grid, TextField, Typography, Button } from '@mui/material';
import { Container } from '@mui/material';

const FormCategory = () => {
    return (
        <Container sx={{ marginTop: 20}}>
            <Grid
                container
                spacing={2}
                sx={{ display: 'flex', justifyContent: 'center'}}
            >
                <Box component="form"  sx={{width: "50%"}}>
                    <Typography component="h1" variant="h6">Formulário de Restaurantes</Typography>
                    <Grid sx={{marginBottom: 1}}>
                        <TextField
                            id="standard-basic"
                            label="Restaurante"
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

export default FormCategory