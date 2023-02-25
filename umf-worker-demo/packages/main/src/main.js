import react from "react";

console.log("main says: react", react);

new Worker(new URL("./worker.js", import.meta.url));
