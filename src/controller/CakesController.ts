import { db } from "../database/config.js"
import { NextFunction, Request, Response } from "express";
import { detailsCakes } from "../../protocols.js";


 async function create (req: Request, res: Response, next: NextFunction) {

    const body { name, price, image, description }= req.body as detailsCakes

    try {

        await createCakes.create({ name, price, image, description })
        return res.sendStatus(201)

    } catch (err) {
        next(err)
    }

}

export default {
create
};