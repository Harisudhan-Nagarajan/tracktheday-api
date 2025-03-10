import express from "express";

const routes = express.Router();

import userController from "../controller/user.controller.js";

routes.post("/login",userController.login);

routes.post("/signup",userController.signup);

export default routes;