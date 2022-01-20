import App from "./App.svelte";

if (!process.env.isProd) {
  import("./mocks/browser").then(({ worker }) => {
    worker.start();
  });
}

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
