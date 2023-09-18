import React, { useRef, useEffect } from "react";

import {
    Carousel as NativeCarousel,
    Fancybox as NativeFancybox,
} from "@fancyapps/ui";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function Fancybox(props) {
    const containerRef = useRef(null);
    useEffect(() => {
        const container = containerRef.current;

        // Options pour Fancybox
        const fancyboxOptions = {
            loop: true,
            Thumbs: false,
            Toolbar: {
                display: {
                    left: [],
                    middle: [],
                    right: ["infobar", "close"],
                },
            },
            contentClick: "close",
            protect: true,
            Images: {
                initialSize: "fit",
            },
        };

        // Options pour le carousel
        const carouselOptions = {
            Dots: false,
            infinite: true,
            preload: 0,
            Autoplay: {
                timeout: 5000,
                showProgress: false,
            },
        };

        const carouselInstance = new NativeCarousel(container, carouselOptions);

        const delegate = "[data-fancybox]";

        NativeFancybox.bind(container, delegate, fancyboxOptions || {});

        return () => {
            carouselInstance.destroy();
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    }, []);

    return <div ref={containerRef}>{props.children}</div>;
}

export default Fancybox;
