

import { supabase } from '../../../supabaseClient';
const axios = require('axios')

export default async function handler(req, res) {
    const { data, error } = await supabase
        .from('txs')
        .select()

    let url = `https://api.helius.xyz/v0/tokens/metadata?api-key=${process.env.HELIUS_KEY}`
    let validTXs = []

    let queryTokens = data.filter(e => e.events.nft).map((e, i) => {
        if (e.events.nft) {
            validTXs.push(e)
            return e.events.nft.nfts[0].mint
        }
        else {
            console.log(i, e.description)
        }
    }).slice(0, 99)

    let query = await axios.post(url, { mintAccounts: queryTokens })
    let output = validTXs.map((e, i) => {
        e.metadata = query.data[i]
        return e
    })

    await Promise.all(output.map(async (item) => {
        if (item.metadata){
        if (item.metadata.onChainData.data.uri) {
            const { data } = await axios.get(item.metadata.onChainData.data.uri);
            item.metadata.onChainData.data.uri = data.image;
        }}
    }));


    res.status(200).json(output)
}

