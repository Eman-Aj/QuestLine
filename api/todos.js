import sql from './db.js'

export default async function handler(req, res) {
  try {
    const todos = await sql`SELECT * FROM public.todos`
    res.status(200).json(todos)
  } catch (err) {
    console.error('DB ERROR:', err)
    res.status(500).json({ error: 'Database error' })
  }
}
