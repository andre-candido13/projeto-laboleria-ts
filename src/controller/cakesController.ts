import createCakesRepositories from "../repositories/createCakesRepositories.js"
import { NextFunction, Request, Response } from "express";
import { detailsCakes } from "../../protocols.js";


 async function create (req: Request, res: Response, next: NextFunction) {

    const { name, price, image, description } = req.body as detailsCakes

    try {

        await createCakesRepositories.create({ name, price, image, description })
        return res.sendStatus(201)

    } catch (err) {
        next(err)
    }

}

export default {
create
};