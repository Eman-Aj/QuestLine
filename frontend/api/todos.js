import supabase from "./supabase.js"


export default async function handler(req, res) {
  try {
    const { data: todoItems, error } = await supabase
  .from('todos')
  .select('*')

    if (error) throw new error

    res.status(200).json({todo : todoItems, SUPABASEACCESSED: true})
  } catch (err) {
    // res.status(500).json({num: 1})
    console.error('DB ERROR:', err)
    res.status(500).json({ message: err.message, // just doing json, gives empty errors
      details: err
     })
  }
}
