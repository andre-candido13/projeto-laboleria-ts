import { Router } from "express";
import { cakesRouter } from "./cakesRouter";


const router = Router();

router.use("/cakes",cakesRouter);

export default router;