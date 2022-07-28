import session from "express-session"
import {v4 as uuid} from "uuid"

export default () => (
    session({
        secret: "segredo",
        genid: () => uuid(),
        resave: false,
        saveUninitialized: true,
        rolling: true,
        cookie: {
            secure: false,
            maxAge: (3600000 * 24) * 7 // Uma semana
        },
    })
)