import * as dotenv from 'dotenv'
dotenv.config()
import passport from "passport"
import passportJWT from "passport-jwt"
import { db } from './db.mjs'

const { SECRET } = process.env

passport.use(
    new passportJWT.Strategy(
        {
        secretOrKey: SECRET,
        jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
        async (payload, done) => {
            const user = await db.one(`SELECT * FROM users WHERE id=$1`, payload.id)
            
            try {
                return user ? done(null, user) : done(new Error ("User not found"))
            } catch (error) {
                done(error)
            }
        })
)