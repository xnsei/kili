import React from "react";
import {motion} from "framer-motion";

export default function SlideLeft({children, width="full"}: {
    children: JSX.Element,
    width?: "full" | "100%",
}) {
    return (
        <div style={{position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, x: 275},
                    visible: {opacity: 1, x: 0},
                }}
                initial="hidden"
                animate="visible"
                transition={{duration: 0.5, delay: 2}}
            >
                {children}
            </motion.div>
        </div>
    );
};