import react from "@vitejs/plugin-react";

export default {
    plugins: [react()],
    build: {
        rollupOptions: {
            input: "src/main.jsx",
        },
    },
};
