import React, { useRef, useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Avatar, Box } from "@mui/material";

export default function Fancybox(props) {
    const containerRef = useRef(null);

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
                cursor: "pointer",
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
