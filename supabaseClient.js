import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(process.env.supabase_url, process.env.supabase_anon_key)