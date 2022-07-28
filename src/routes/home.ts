import { Router } from "express";

import {Home as controller} from "../controllers/index"

const route = Router()

route.get("*", controller.HomePage)

export default route