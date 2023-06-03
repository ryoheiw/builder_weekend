import type { VercelRequest, VercelResponse } from '@vercel/node'
import credentials from "../credentials.json"
export default function handler(req: VercelRequest, res: VercelResponse) {
  console.log("HELLO")
  const { name = 'World' } = req.query
  return res.json({
    message: `Hello ${name}!`,
  })
}
