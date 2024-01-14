const react = require("@vitejs/plugin-react");

module.exports = {
    plugins: [react()],
    build: {
        rollupOptions: {
            external: ["react", "react-router", "react-router-dom"],
            output: {
                globals: {
                    react: "React",
                },
            },
        },
    },
};
