"use client";
import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
    threshold = 0.1,
    delay = 0, // Valor por defecto para el delay
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
    threshold?: number;
    delay?: number;
}) => {
    const [scope, animate] = useAnimate();
    const [isInView, setIsInView] = useState(false);
    const observerRef = useRef<HTMLDivElement>(null);
    let wordsArray = words.split(" ");
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setIsInView(true);
                        }, delay); // Añadido el delay aquí
                        observer.disconnect();
                    }
                });
            },
            { threshold: threshold } // Puedes ajustar el umbral según sea necesario
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, [threshold, delay]);
    useEffect(() => {
        if (isInView) {
            animate(
                'span',
                {
                    opacity: 1,
                    filter: filter ? 'blur(0px)' : 'none',
                },
                {
                    duration: duration ? duration : 1,
                    delay: stagger(0.2),
                }
            );
        }
    }, [isInView, animate, filter, duration]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="opacity-0"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div ref={observerRef} className={cn("font-bold", className)}>
            <div className="mt-4">
                <div className="leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};