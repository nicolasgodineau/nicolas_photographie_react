import React, { useRef, useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Avatar, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Fancybox(props) {
    const containerRef = useRef(null);
    const theme = useTheme();

    useEffect(() => {
        const container = containerRef.current;

        const delegate = props.delegate || "[data-fancybox]";
        const options = props.options || {};

        NativeFancybox.bind(container, delegate, options);

        return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    });

    return (
        <Box
            ref={containerRef}
            sx={{
                height: "320px",
                width: "320px",
                cursor: "pointer",
                [theme.breakpoints.down("md")]: {
                    height: "280px",
                    width: "280px",
                },
                [theme.breakpoints.down("sm")]: {
                    height: "160px",
                    width: "160px",
                },
            }}
        >
            <Avatar
                variant="square"
                data-fancybox="gallery"
                href={props.href}
                src={props.href}
                alt={props.alt}
                loading="lazy"
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                }}
            >
                {" "}
                {props.children}
            </Avatar>
        </Box>
    );
}
