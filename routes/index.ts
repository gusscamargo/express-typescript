import { Router, Request, Response } from "express";

const route = Router()

route.get("*", (req: Request, res: Response) => {
    res.send("Ola mundo")
})

export default route