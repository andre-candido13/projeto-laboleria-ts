import cakesController from "controller/cakesController";
import { Router } from "express";

export const cakesRouter = Router();

cakesRouter.post("/", cakesController.create);

