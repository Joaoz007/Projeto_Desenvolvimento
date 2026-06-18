import { Router } from 'express';
import express from 'express';
import path from 'path';
import CONSTANTS from '../bootstrap/config.js';
import ListFilesController from '../app/Http/Controllers/ListFilesController.js';
import GetFileController from '../app/Http/Controllers/GetFileController.js';
import Return404Controller from '../app/Http/Controllers/Return404Controller.js';
import userRouter from './apis/userRouter.js';
import addressRouter from './apis/addressRouter.js';
// import EnvironmentController from '../app/Http/Controllers/EnvironmentController.js';
import courseRouter from './apis/courseRouter.js';
import SlowHttpController from '../app/Http/Controllers/SlowHttpController.js';

const router = Router();

router.use(express.json());

router.get("/arquivo", GetFileController);

// Rota para listar arquivos na pasta 'public'
router.get('/', ListFilesController);

router.get('/tf14', SlowHttpController);

/** Servir o public estaticamente */
router.use(express.static(path.join(CONSTANTS.DIR, 'public')));

/** APIS REST */

/** Users */
router.use("/users", userRouter);

/** Address - TF 09 */
router.use("/addresses", addressRouter);

/** Course - TF 11 */
router.use("/courses", courseRouter);

// router.get("/ambiente", EnvironmentController);

router.get('/tf14', SlowHttpController);

/** Fallback 404 para arquivos/páginas não encontrados */
router.use(Return404Controller);

export default router;
