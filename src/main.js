import App from "./components/App.svelte";
import "./styles/index.scss";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
