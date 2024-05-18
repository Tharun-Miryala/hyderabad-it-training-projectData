const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("database.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000; //  you can use any port number here like 8080, 3001 i chose to use 4000

server.use(middlewares);
server.use(router);

server.listen(port, () => {
    console.log('JSON Server is running on '+port);
});