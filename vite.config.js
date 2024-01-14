import react from "@vitejs/plugin-react";

export default {
    base: "/portfolio-website/",
    plugins: [react()],
    build: {
        rollupOptions: {
            input: "src/main.jsx",
        },
    },
};
