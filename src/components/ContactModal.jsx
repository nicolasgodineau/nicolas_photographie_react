import React, { useState } from "react";
import Airform from "react-airform";
import { Button, Modal, Box, Typography, TextField } from "@mui/material";

import { useTheme } from "@mui/material/styles";

export default function ContactModal() {
    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyer les données du formulaire à Getform ici
        // Vous devrez remplacer "your-form-id" par l'ID de votre formulaire Getform
        const formId = "your-form-id";
        const apiUrl = `https://getform.io/f/${formId}`;

        fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // Traitez la réponse ou affichez un message de confirmation ici
                console.log("Réponse de Getform :", data);
            })
            .catch((error) => {
                // Gérez les erreurs ici
                console.error(
                    "Erreur lors de l'envoi du formulaire à Getform :",
                    error
                );
            });
        handleClose();
    };

    return (
        <Box sx={{ alignSelf: "center" }}>
            <Button
                variant="contained"
                size="large"
                sx={{ width: "20vmax", minWidth: "300px", alignSelf: "center" }}
                onClick={handleOpen}
            >
                Ecrivez moi 👋🏻👋🏻👋🏻
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(20px)",
                    backgroundColor: theme.palette.nav,
                    padding: "2rem",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        backgroundColor: (theme) =>
                            theme.palette.background.paper,
                        border: "2px solid #000",
                        boxShadow: (theme) => theme.shadows[5],
                        padding: (theme) => theme.spacing(2, 4, 3),
                        width: "400px",
                    }}
                >
                    <Typography variant="h6">Formulaire de Contact</Typography>
                    <form
                        action="https://getform.io/f/e89cd7de-e3a1-4f9f-9350-e60a3fe35468" // Remplacez par l'URL unique de votre formulaire Getform
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            name="name"
                            label="Nom"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            name="email"
                            label="Email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            name="message"
                            label="Message"
                            multiline
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField name="_gotcha" />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Envoyer
                        </Button>
                    </form>
                </Box>
            </Modal>
        </Box>
    );
}
