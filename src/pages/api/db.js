import { supabase } from '../../../supabaseClient';

export default async function handler(req, res) {
    const { data, error } = await supabase
        .from('txs')
        .select()
    res.status(200).json(data)
}