import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://ynmnytfzjkkucdfavdkc.supabase.co"
const supabaseKey = "sb_publishable_xBVAdODYXxqWRGg-Xg0pCw_yZyXPZbU"
const supabase = createClient(supabaseUrl, supabaseKey) //Getting the url and the key to access the DB API

export default supabase //Public create client where key is still hidden?