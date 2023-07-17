import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import Navbar from "./Navbar/Navbar.component";

const Header = () => {
    return ( 
        <>
        <Navbar/>
        <div className="bg-header">
            <Container sx={{ paddingTop: "50px"}}>
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <Typography 
                        sx={{fontFamily: 'Caveat',
                            fontWeight: 300,
                            fontSize: "50px",
                            color: "#F6B76C"
                        }}>
                            De tu fonda favorita
                        </Typography>
                        <Typography 
                        sx={{
                            fontWeight: 700,
                            fontSize: "72px",
                            color: "#fff"
                        }}>
                            La comida que
                            ya conoces
                            al mejor precio
                        </Typography>
                        <div className="search">
                            <TextField id="outlined-basic" label="Busca tu platillo favorito" variant="outlined" sx={{ backgroundColor: "#fff", borderRadius: "20px", width: "450px"}}/>
                            <Button sx={{}}>
                                Buscar
                            </Button>
                        </div>
                    </Grid>
                    <Grid  xs={6}>
                            Teste
                    </Grid>
                </Grid>  
            </Container>
        </div>
    </>
    );
}
 
export default Header;