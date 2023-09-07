import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { Button, Link } from "@mui/material";

export default function ButtonNavLink({
    to,
    text,
    target,
    variantText,
    icon,
    disableRipple,
    ariaLabel,
    hasPopup,
}) {
    const { t } = useTranslation();
    const theme = useTheme();
    const location = useLocation();

    const isActive = location.pathname.toLowerCase() === to;

    const buttonStyles = {
        textTransform: "inherit",
        borderRadius: "0",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
        ":hover": {
            bgcolor: "unset",
            textDecoration: "underline",
            textUnderlineOffset: "0.2rem",
            textDecorationThickness: ".1rem",
            color: `${theme.palette.link} !important`,
        },
    };

    const linkStyles = {
        textDecoration: isActive ? "underline" : "none",
        "&.active": {
            textDecoration: "underline",
            textUnderlineOffset: ".2rem",
            textDecorationThickness: ".1rem",
            color: `${theme.palette.link} !important`,
        },
    };

    return (
        <Button
            variant="text"
            color="inherit"
            startIcon={icon}
            size="big"
            disableRipple={disableRipple === "true"}
            sx={buttonStyles}
            aria-label={ariaLabel}
            aria-haspopup={null}
        >
            <Link
                target={target}
                rel="noopener noreferrer"
                underline="none"
                component={NavLink}
                to={to}
                variant={variantText}
                sx={linkStyles}
            >
                {t(`menu.${text}`)}
            </Link>
        </Button>
    );
}
