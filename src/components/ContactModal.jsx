import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import Confetti from "react-dom-confetti";
import {
    Button,
    Modal,
    Box,
    Typography,
    TextField,
    FormControl,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

export default function ContactModal() {
    const { t } = useTranslation();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [isConfettiActive, setConfettiActive] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const validate = (values) => {
        const errors = {};
        const requiredFields = ["name", "email", "message"];
        requiredFields.forEach((field) => {
            if (!values[field]) {
                errors[field] = "Required";
            }
        });
        if (
            values.email &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }
        return errors;
    };

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({ validate });

    const onSubmit = (data) => {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        fetch(
            "https://public.herotofu.com/v1/9afc0bf0-2061-11ee-8025-97a9fb2f29da",
            {
                method: "POST",
                body: formData,
            }
        ).catch((error) => {
            console.log("error:", error);
        });
        setIsFormSubmitted(true); // Met à jour l'état pour indiquer que le formulaire a été soumis
        reset(); // Réinitialise les valeurs du formulaire à leurs valeurs par défaut
        setConfettiActive(true);

        // Réinitialiser l'animation après une courte durée
        setTimeout(() => {
            setConfettiActive(false);
            handleClose(); // Fermer la modal
        }, 2000); // Durée en millisecondes de l'animation de confettis puis ferme la modale
    };

    // Fonction pour mettre à jour les dimensions de l'élément cible
    const [elementDimensions, setElementDimensions] = useState({
        width: 281, // Valeur par défaut de la largeur
        height: 426, // Valeur par défaut de la hauteur
    });

    const targetElementRef = useRef(null);

    const updateDimensions = () => {
        if (targetElementRef.current) {
            const { width, height } =
                targetElementRef.current.getBoundingClientRect();
            setElementDimensions({ width, height });
        }
    };

    // Appele la fonction updateDimensions lorsque le composant est monté
    useEffect(() => {
        updateDimensions();
    }, []);

    return (
        <Box
            sx={{ alignSelf: "center" }}
            data-aos="fade-down"
            data-aos-delay="100"
        >
            <Button
                variant="contained"
                size="large"
                sx={{
                    width: "20vmax",
                    minWidth: "300px",
                    alignSelf: "center",
                    borderRadius: "0",
                }}
                onClick={handleOpen}
            >
                {t("contact.field.title")} 👋🏻👋🏻👋🏻
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(20px)",
                    backgroundColor: theme.palette.background.transparent,
                    padding: "2rem",
                    [theme.breakpoints.down("sm")]: {
                        padding: "1rem",
                    },
                }}
            >
                <Box
                    sx={{
                        width: "400px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        backgroundColor: theme.palette.background.default,
                        border: `2px solid ${theme.palette.primary.main}`,
                        boxShadow: theme.shadows[5],
                    }}
                >
                    <FormControl
                        open={open}
                        onClose={() => setOpen(false)}
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {isFormSubmitted ? (
                            <Box
                                ref={targetElementRef}
                                sx={{
                                    width: `${elementDimensions.width}px`,
                                    height: `${elementDimensions.height}px`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-evenly",
                                    flexDirection: "column",
                                    padding: "1rem",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    color={theme.palette.primary.main}
                                >
                                    {t("contact.field.sendSucces")}
                                </Typography>
                            </Box>
                        ) : (
                            <Box
                                ref={targetElementRef}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-evenly",
                                    flexDirection: "column",
                                    gap: 2,
                                    padding: "1rem",
                                    [theme.breakpoints.down("md")]: {
                                        // Styles pour les écrans de largeur maximale "md" (1090px)
                                        height: "100%",
                                    },
                                }}
                            >
                                <Typography variant="h6">
                                    {t("contact.field.title")}
                                </Typography>
                                <Controller
                                    name="name"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: t("contact.field.required"),
                                    }}
                                    render={({ field }) => (
                                        <TextField
                                            label={t(
                                                "contact.field.nameAndLastName"
                                            )}
                                            variant="filled"
                                            fullWidth
                                            margin="normal"
                                            error={Boolean(errors.name)}
                                            helperText={
                                                errors.name &&
                                                errors.name.message
                                            }
                                            {...field}
                                        />
                                    )}
                                />
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: t("contact.field.required"),
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: t(
                                                "contact.field.invalideEmail"
                                            ),
                                        },
                                    }}
                                    render={({ field }) => (
                                        <TextField
                                            label="Email"
                                            variant="filled"
                                            fullWidth
                                            margin="normal"
                                            error={Boolean(errors.email)}
                                            helperText={
                                                errors.email &&
                                                errors.email.message
                                            }
                                            {...field}
                                        />
                                    )}
                                />
                                <Controller
                                    name="message"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: t("contact.field.required"),
                                    }}
                                    render={({ field }) => (
                                        <TextField
                                            label="Message"
                                            variant="filled"
                                            fullWidth
                                            margin="normal"
                                            multiline
                                            rows={4}
                                            error={Boolean(errors.message)}
                                            helperText={
                                                errors.message &&
                                                errors.message.message
                                            }
                                            {...field}
                                        />
                                    )}
                                />
                                <Button
                                    type="submit"
                                    sx={{
                                        width: "100%",
                                        padding: "12px 44px",
                                        borderRadius: 0,
                                        backgroundColor:
                                            theme.palette.primary.main,
                                        border: `2px solid ${theme.palette.primary.main}`,
                                        color: theme.palette.secondary.main,
                                        ":hover": {
                                            cursor: "pointer",
                                            color: theme.palette.primary.main,
                                            backgroundColor:
                                                theme.palette.secondary.main,
                                        },
                                    }}
                                    variant="text"
                                >
                                    {t("contact.field.submit")}
                                </Button>
                            </Box>
                        )}
                        <Confetti active={isConfettiActive} />
                    </FormControl>
                </Box>
            </Modal>
        </Box>
    );
}
