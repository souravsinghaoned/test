import { getSession } from "next-auth/react"

export default async function handler(req, res) {
  console.log(req)
  const session = await getSession({req})
  if (!session) {
    res.status(401).json({ name: 'Unauthenticated' })
  } else {
    res.status(200).json({ name: 'Blog API route',session })
  }
}
