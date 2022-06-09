import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  AccessAlarm,
  FormatOverline,
  MailRounded,
  ThreeDRotation,
} from "@mui/icons-material";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import RoomRoundedIcon from "@mui/icons-material/RoomRounded";
import Estrellas from "./Estrellas";
import { IconButton, Fab, Grid } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./styles/styles.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Box from "@mui/material/Box";

const Tarjeta = () => {
  const params = useParams();
  const [lugares, setLugares] = useState([]);
  const [pagination, setPagination] = useState({ pages: 0, records: 0 });
  const [loading, setLoading] = useState(true);

  const url = "https://soluciones.avansis.es:8061/api/Places/List";
  const body = {
    pageSize: 12,
    pageNumber: params.page - 1,
    globalSearch: "",
    search: [
      {
        searchField: "IdPlaceGroup",
        searchValue: 2,
        searchMode: "EqualTo",
      },
    ],
    order: [],
  };

  const limites = () =>{
    if(params.page === 1){
      params.page = 1;
    }

    
  }

  const fetchApi = () => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => console.log(error))

      .then((response) => {
        setLugares(response.data);
        setPagination(response.pagination);
        setLoading(false);
      });
  };
  
  const paginacion = (parametrosP) => {
    if (params.page === 1) {
      params.page = 1;
      console.log("parrams");
      console.log(params.page);
    }
  };


  useEffect(() => {
    fetchApi();
  }, [params.page]);

 

  return (
    <>
      <Box
        spacing={2}
        justifyContent={"center"}
        alignContent={"center"}
        display={"flex"}
        sx={{ 
          margin: "5%",
        }}
      >
        <Link  to={"/places/" + ( params.page * 1 - 1)}>
          <IconButton aria-label="Anterior"  >
            <ArrowBackIosNewIcon  />
          </IconButton>
        </Link>
        <Typography
          color={"darkgrey"}
          sx={{
            margin: "0.5%",
          }}
        >
          Mostrando registros del {(params.page * 1 - 1) * 12 + 1} a{" "}
          {(params.page * 1 - 1) * 12 + 12} de un total de {pagination.records}
        </Typography>
        <Link to={"/places/" + (params.page * 1 + 1)}>
          <IconButton aria-label="Siguiente">
            <ArrowForwardIosIcon />
          </IconButton>
        </Link>
      </Box>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Grid container spacing={3} marginLeft="auto" marginRight="auto">
            {lugares.map((item) => (
              <Grid item xs={12} sm={6} lg={4}>
                <Card
                  className="card-body"
                  sx={{ width: 270 }}
                  style={{ marginLeft: 70, marginRight: 50 }}
                >
                  <Typography
                    gutterBottom
                    sx={{ fontSize: 16 }}
                    color="white"
                    bgcolor="darkblue"
                    position="absolute"
                    textAlign="center"
                    justifyContent="center"
                    style={{ opacity: 0.6, marginTop: 175 }}
                  >
                    {item.placeName}
                  </Typography>
                  <Link to={"/detalle/" + item.idPlace}>
                    <CardMedia
                      sx={{ width: 300, height: 200 }}
                      component="img"
                      src={"data:image/png;base64," + item.placeImgFeatured}
                      alt="imagen del lugar"
                      title="nombre"
                    />

                    <IconButton
                      aria-label="add to favorites"
                      position="absolute"
                      style={{ bottom: 200, left: 230 }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                  </Link>

                  <CardContent sx={{ width: 300, height: 70, marginTop: -3 }}>
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={6}>
                        <PhoneRoundedIcon color="primary" />
                        {item.placePhone}
                      </Grid>
                      <Grid item xs={12} md={5}>
                        <Estrellas />
                      </Grid>
                      <Grid item xs={12}>
                        <RoomRoundedIcon color="primary" />
                        {item.placeAddress}
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );

}

export default Tarjeta

