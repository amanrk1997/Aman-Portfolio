const { exec } = require("child_process");

// Replace 'src/App.js' with the path to your main React component file.
const reactApp = exec("npx react-scripts start src/App.js");

// Handle Ctrl+C (SIGINT) to stop the React development server gracefully.
process.on("SIGINT", () => {
  reactApp.kill("SIGINT");
  process.exit(0);
});
