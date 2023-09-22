import React from "react";
import { useTheme } from "@mui/material/styles";
import { Avatar, Dialog } from "@mui/material";

export default function ImageModal({ open, onClose, imageUrl }) {
    const theme = useTheme();

    return (
        <Dialog
            open={open}
            onClose={onClose}
            sx={{
                backdropFilter: "blur(200px)",
                backgroundColor: theme.palette.background.transparent,
                ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
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
                onClick={onClose}
            />
        </Dialog>
    );
}
