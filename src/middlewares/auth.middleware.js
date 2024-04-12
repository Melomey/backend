import jwt from 'jsonwebtoken';
import { tokenModel } from '../models/token.js';

const secretKey = "P@$$w0rd"

export async function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  // check if token exist
  const tokenExist = await tokenModel.exists({ accessToken: token });
  if (!tokenExist) return res.status(401).json({ message: "Token has been invalidated" })

  if (token == null) return res.status(401).json({ message: "Access token not found" })

  jwt.verify(token, secretKey, (err, user) => {
    console.log(err)

    if (err) return res.status(403).json({ message: "Invalid access token" })

    req.user = user
    req.token = token

    next()
  })
}