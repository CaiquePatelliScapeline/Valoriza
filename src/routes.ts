import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController";

import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const listUserSenderComplimentsController = new ListUserSenderComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();
const listTagController = new ListTagController();
const listUsersController = new ListUsersController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle); //Criação de usuario
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle); //Criação de tag
router.post("/compliments", ensureAuthenticated, createComplimentController.handle); //Criação de elogio
router.post("/login", authenticateUserController.handle); //Autenticação do usuário

router.get("/users/compliments/send", ensureAuthenticated, listUserSenderComplimentsController.handle);  //Listar compliments que o usuário fez
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiverComplimentsController.handle);  //Listar compliments que o usuário recebeu
router.get("/tags", ensureAuthenticated, listTagController.handle); //Listar tags
router.get("/users", ensureAuthenticated, listUsersController.handle); //Listar users

export {router};