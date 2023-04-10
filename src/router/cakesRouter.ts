import { Router } from "express";

export const cakesRouter = Router();

cakesRouter.post("/", createCakes);

