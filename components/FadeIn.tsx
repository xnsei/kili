import React from "react";
import {motion} from "framer-motion";

export default function FadeIn({children, width="full"}: {
    children: JSX.Element,
    width?: "full" | "100%",
}) {
    return (
        <div style={{position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0},
                    visible: {opacity: 1},
                }}
                initial="hidden"
                animate="visible"
                transition={{duration: 0.5, delay: 1.5}}
            >
                {children}
            </motion.div>
        </div>
    );
};