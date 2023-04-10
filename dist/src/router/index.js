import { Router } from "express";
import { cakesRouter } from "./cakesRouter";
var router = Router();
router.use("/cakes", cakesRouter);
export default router;
