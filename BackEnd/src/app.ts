import InitializeApp from "./server/initializeApp.ts";
const initApp = new InitializeApp();
initApp.listen();

initApp.routes();