import React, { useState } from "react";
import {
    Button,
    Modal,
    Box,
    Typography,
    TextField,
    makeStyles,
} from "@mui/material";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique d'envoi de l'e-mail avec Elastic Email
        // Utilisez les valeurs des champs du formulaire pour construire le message
        // Par exemple : fetch('votre-endpoint-api', { method: 'POST', body: formData })
        handleClose();
    };

    return (
        <Box>
            <Button
                variant="contained"
                size="large"
                sx={{ width: "20vmax", minWidth: "300px" }}
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
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                        }}
                    >
                        <TextField
                            label="Nom et prénom"
                            variant="outlined"
                            required
                        />
                        <TextField
                            label="Adresse e-mail"
                            variant="outlined"
                            required
                            type="email"
                        />
                        <TextField
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Envoyer
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}
