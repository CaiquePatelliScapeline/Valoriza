import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle); //Criação de usuario
router.post("/tags", ensureAdmin, createTagController.handle); //Criação de tag
router.post("/compliments", createComplimentController.handle); //Criação de elogio
router.post("/login", authenticateUserController.handle); //Autenticação do usuário

export {router};