import React from "react";
import { useMediaQuery, Fab } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function ShowMore({ onClick, visibleCount, totalCount }) {
    const theme = useTheme();
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
            Voir plus {visibleCount} / {totalCount}
        </Fab>
    );
}
