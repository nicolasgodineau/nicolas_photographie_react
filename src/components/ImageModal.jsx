import React from "react";
import { useTheme } from "@mui/material/styles";
import { Avatar, Dialog } from "@mui/material";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import CloseIcon from "@mui/icons-material/Close";

export default function ImageModal({ open, onClose, imageUrl }) {
    const theme = useTheme();

    return (
        <Dialog
            open={open}
            onClose={onClose}
            sx={{
                backdropFilter: "blur(20px)",
                backgroundColor: theme.palette.nav,
                ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
                    border: `2px solid ${theme.palette.primary.main}`,
                    backgroundColor: `unset !important`,
                    borderRadius: "0",
                },
            }}
        >
            <Avatar
                variant="square"
                src={imageUrl}
                alt="Image"
                sx={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                }}
                loading="lazy"
            />
            <CloseIcon
                onClick={onClose}
                color="primary"
                sx={{
                    fontSize: "40px",
                    cursor: "pointer",
                    alignSelf: "center",
                }}
            />
        </Dialog>
    );
}
