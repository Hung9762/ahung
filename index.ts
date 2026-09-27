import figlet from "figlet";

const server = Bun.serve({
  routes: {
    "/": () => {
      const homepage = figlet.textSync("Homepage");
      return new Response(homepage);
    },
    "/about": () => {
      const about = figlet.textSync("About");
      return new Response(about);
    },
  },
});

console.log(`Server running on port ${server.port}`);
