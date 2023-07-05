import { Typography } from "@mui/material";
import axios from "axios";
import { IDishes } from "../../../interfaces/IDishes";
import http from "../../../http"
import { useEffect, useState } from "react";

const Dishes = () => {

    const [dishes, setDishes] = useState<IDishes[]>([]);

    useEffect(() => {
        http.get<IDishes[]>('dishes') 
        .then(response => {
            setDishes(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])


    return ( 
        <Typography  component="h1"  variant="h1" >Pratos</Typography>
    );
}
 
export default Dishes;