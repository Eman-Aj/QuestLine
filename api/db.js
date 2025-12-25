import postgres from 'postgres'

const sql = postgres(process.env.DATABASE_URL, {
  ssl: 'require'
})

console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL)


export default sql
