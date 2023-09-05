import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";

import { Link, Button } from "@mui/material";

export default function ButtonNavLink({ to, variantText }) {
    const { t } = useTranslation();
    const theme = useTheme();
    const location = useLocation();
    return (
        <Link
            rel="noopener noreferrer"
            underline="none"
            component={NavLink}
            to={`/${to}`}
            variant={variantText}
            sx={{
                color: theme.palette.primary,
            }}
        >
            <Button
                sx={{
                    paddingY: ".5rem",
                    fontSize: "inherit",
                    textTransform: "inherit",
                    lineHeight: "initial",
                    fontFamily: "Poiret One",
                    fontWeight: "700 !important",
                    borderRadius: "0",
                    textDecoration:
                        location.pathname == to ? "underline" : "none",
                    color:
                        location.pathname == to
                            ? theme.palette.linkActive
                            : "inherit",
                    "&.active": {
                        textDecoration: "underline",
                    },
                    [theme.breakpoints.down("sm")]: {
                        width: "100%",
                    },
                }}
            >
                {t(`${to}.title`)}
            </Button>
        </Link>
    );
}
