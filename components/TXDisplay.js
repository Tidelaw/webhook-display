import React from "react";
import Image from 'next/image';

export default function TXDisplay({ TXs }) {

    const relativeTimePeriods = [
        [31536000, 'year'],
        [2419200, 'month'],
        [604800, 'week'],
        [86400, 'day'],
        [3600, 'hour'],
        [60, 'minute'],
        [1, 'second']
    ];

    function relativeTime(date) {
        if (!(date instanceof Date)) date = new Date(date * 1000);
        const seconds = (new Date() - date) / 1000;
        for (let [secondsPer, name] of relativeTimePeriods) {
            if (seconds >= secondsPer) {
                const amount = Math.floor(seconds / secondsPer);
                return `${amount} ${name}${amount != 1 ? 's' : ''} ago`;
            }
        }
        return 'Just now';
    }

    function formatType(type) {
        if (type == "NFT_SALE" || type == "INSTANT_SALE") {
            return "Sale"
        }
        if (type == "NFT_LISTING") {
            return "Listing"
        }
        if (type == "NFT_CANCEL_LISTING") {
            return "Cancel Listing"
        }
        if (type == "NFT_BID") {
            return "Bid"
        }
    }

    // function formatSource(source) {
    //     if (source == "TENSOR"){
    //         return (
    //             <div></div>
    //         )
    //     }
    // }

    let transactionDivs = []

    for (let i = 0; i < TXs.length; i++) {
        if (!transactionDivs[i] || !(transactionDivs[i].some(obj => obj.key === TXs[i].signature))) {
            if (TXs[i].metadata) {
                if (TXs[i].metadata.onChainData) {
                    transactionDivs.push(
                        <div key={TXs[i].signature} className={`w-[75rem] h-[6rem] animate-fade-down ease-in-out border-t border-neutral-700 ${(i % 2 == 0) ? 'bg-light-black' : 'bg-neutral-900'}`}>
                            <div className='flex w-full h-full'>

                                <a target="_blank" rel="noreferrer" href={"https://xray.helius.xyz/tx/" + TXs[i].signature}
                                    className="flex items-center flex-row w-full space-x-4 px-2 text-white hover:bg-neutral-800 duration-200">

                                    <div className="flex w-[7.5%]">
                                        <React.Fragment>{(TXs[i].metadata.offChainData ?
                                            (<img alt={TXs[i].metadata.onChainData.data.name} className='flex w-16 h-16 rounded-lg' src={TXs[i].metadata.offChainData.image}></img>
                                            ) : (
                                                <React.Fragment>{(TXs[i].metadata.onChainData ? (
                                                    <img alt={TXs[i].metadata.onChainData.data.name} className='flex w-16 h-16 rounded-lg justify-center' src={TXs[i].metadata.onChainData.data.uri}></img>
                                                ) : (
                                                    <div className="flex w-16 h-16 rounded-lg justify-center bg-neutral-900 flex-shrink-0"></div>
                                                ))}</React.Fragment>



                                            ))}</React.Fragment></div>

                                    <a target="_blank" rel="noreferrer" className='flex w-[15%] flex-col hover:bg-neutral-700 rounded-lg ease-in-out duration-200 p-1' href={"https://xray.helius.xyz/token/" + TXs[i].metadata.mint}>
                                        <div className='font-medium text-lg'>{TXs[i].metadata.onChainData.data.name}</div>
                                        <div className='font-medium text-lg text-orange'>{TXs[i].metadata.onChainData.data.symbol}</div>
                                    </a>


                                    <div className="flex w-[10%] font-medium text-md">
                                        {(TXs[i].events.nft.amount / 1000000000).toFixed(2)} SOL
                                    </div>

                                    <div className="flex w-[15%] font-medium text-md">
                                        <div className="flex w- rounded-full bg-neutral-800 px-4 py-2 justify-center">
                                            {TXs[i].events.nft.buyer ? (TXs[i].events.nft.buyer.slice(0, 4) + '..' + TXs[i].events.nft.buyer.slice(-4)) : ('n/a')}
                                        </div>
                                    </div>

                                    <div className="flex w-[15%] font-medium text-md">
                                        <div className="flex w- rounded-full bg-neutral-800 px-4 py-2 justify-center">
                                            {TXs[i].events.nft.seller.slice(0, 4) + '..' + TXs[i].events.nft.seller.slice(-4)}
                                        </div>
                                    </div>

                                    <div className="flex w-[10%] font-medium text-md">
                                        {formatType(TXs[i].events.nft.type)}
                                    </div>

                                    <div className="flex w-[10%] font-medium text-md">
                                        {TXs[i].events.nft.source}
                                    </div>
                                    <div className="flex w-[10%] font-medium text-md">
                                        {relativeTime(new Date(TXs[i].created_at))}
                                    </div>
                                </a>
                            </div>
                        </div>

                    )
                }
            }
        }
    }

    return (
        TXs
            ? (
                <div className="flex w-full flex-col space-y-8 xl:space-y-0 xl:flex-row overflow-y-scroll no-scrollbar">

                    <div className="flex w-full h-max flex-col p-8 items-center">

                        <div className='flex flex-row w-[75rem] h-max rounded-lg items-center text-white space-x-4 px-2 font-medium text-lg'>
                            <div className="flex w-[7.5%] py-4">Token</div>
                            <div className="flex w-[15%] py-2">Name</div>
                            <div className="flex w-[10%] py-2">Value</div>
                            <div className="flex w-[15%] py-2">Buyer</div>
                            <div className="flex w-[15%] py-2">Seller</div>
                            <div className="flex w-[10%] py-2">Type</div>
                            <div className="flex w-[10%] py-2">Source</div>
                            <div className="flex w-[10%] py-2">Date</div>
                        </div>


                        <div key="TXs" className='flex w-full h-max rounded-lg flex-col items-center justify-center divide-y divide-neutral-700'>
                            {transactionDivs.reverse()}
                        </div>
                    </div>

                </div>

            ) : (
                <div></div>
            )
    )
}