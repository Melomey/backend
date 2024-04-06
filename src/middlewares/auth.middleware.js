import jwt from 'jsonwebtoken';

const secretKey = "P@$$w0rd"

export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.status(401).json({ message: "Access token not found" })

  jwt.verify(token, secretKey, (err, user) => {
    console.log(err)

    if (err) return res.status(403).json({ message: "Invalid access token"})

    req.user = user

    next()
  })
}