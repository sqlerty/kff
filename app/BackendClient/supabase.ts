import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_KFF_URL!;
const supabaseKey = process.env.SUPABASE_KFF_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);