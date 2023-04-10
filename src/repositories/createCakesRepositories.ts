
import { db } from "../database/config.js"
import { detailsCakes } from "../../protocols.js";



async function create ({ name, price, image, description }: detailsCakes) {

        await db.query(`SELECT "name" FROM cakes WHERE "name" = $1`, ([name]))

     
        await db.query(`INSERT INTO cakes ("name", "price", "image", "description") VALUES($1, $2, $3, $4);`
        ,([name, price, image, description]))

}

export default { 
    create
};
