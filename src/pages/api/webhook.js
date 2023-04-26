// const axios = require('axios');
import { supabase } from '../../../supabaseClient';

export default async function handler(req, res) {

  try {
    if (req.method === "POST") {

      console.log(req, '1')
      let webhook_data = req.body
      console.log(webhook_data, '2')

      const { data, error } = await supabase
        .from('txs')
        .upsert(webhook_data)
      res.status(200).json("success")
      console.log(data, error)

    };

  }

  catch (err) { console.log(err) }
}
