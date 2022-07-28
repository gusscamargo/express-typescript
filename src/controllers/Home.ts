import type { Request as Req, Response as Res } from "express"

const HomePage = async (req: Req, res: Res) => {
    return res.render("home")
}


export default {
    HomePage
}