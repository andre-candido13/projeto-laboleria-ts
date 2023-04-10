import cakesController from "controller/cakesController";
import { Router } from "express";
export var cakesRouter = Router();
cakesRouter.post("/", cakesController.create);
