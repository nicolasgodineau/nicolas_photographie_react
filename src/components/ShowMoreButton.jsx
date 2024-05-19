import React from "react";
import { useMediaQuery, Fab } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Multilingue
import { useTranslation } from "react-i18next";

export default function ShowMore({ onClick, visibleCount, totalCount }) {
    const theme = useTheme();
    const { t } = useTranslation();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Fab
            variant="extended"
            size={isSmallScreen ? "small" : "large"}
            onClick={onClick}
            aria-label="Show More"
            color="secondary"
            sx={{
                display: "flex",
                width: "200px",
                backdropFilter: "blur(20px)",
                backgroundColor: theme.palette.background.transparent,
                zIndex: 0,
            }}
        >
            {t("showMore")} {visibleCount} / {totalCount}
        </Fab>
    );
}
