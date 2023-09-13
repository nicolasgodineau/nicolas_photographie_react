import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Nicolas from "../img/Ressources/Profil.webp";

export default function CardPortfolio() {
    return (
        <Card sx={{ aspectRatio: "2/1", bgcolor: "none" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={Nicolas}
                    alt="green iguana"
                    sx={{
                        minHeight: "300px",
                        aspectRatio: "2/1",
                        bgcolor: "none",
                    }}
                />
                <CardContent
                    sx={{
                        bgcolor: "none",
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        Portrait
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
