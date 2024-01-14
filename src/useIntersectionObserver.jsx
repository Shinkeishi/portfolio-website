import { useEffect, useRef } from "react";

const useIntersectionObserver = (selector, onIntersect) => {
    const refs = useRef([]);

    useEffect(() => {
        const elements = document.querySelectorAll(selector);
        refs.current = elements;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        onIntersect(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach((elem) => observer.observe(elem));

        return () => {
            elements.forEach((elem) => observer.unobserve(elem));
        };
    }, [selector, onIntersect]);

    return refs;
};

export default useIntersectionObserver;
