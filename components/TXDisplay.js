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
                return `${amount} ${name}${amount ? 's' : ''} ago`;
            }
        }
        return 'Just now';
    }

    let transactionDivs = []

    for (let i = 0; i < TXs.length; i++) {
        if (TXs[i].metadata){
        if (TXs[i].metadata.onChainData) {
            console.log(TXs[i])
            transactionDivs.push(
                <div className="w-full xl:w-[65rem] xl:h-[7rem] animate-fade-down ease-in-out">
                    <div className='flex'>
                        <a target="_blank" rel="noreferrer" href={"https://xray.helius.xyz/tx/" + TXs[i].signature} className="flex items-center flex-row space-x-8 w-full text-white border border-1 border-neutral-800 px-4 py-4 rounded-lg hover:bg-neutral-800 duration-200">

                            <React.Fragment>{(TXs[i].metadata.offChainData ?
                                (<img alt={TXs[i].metadata.onChainData.data.name} className='flex w-16 h-16 rounded-lg justify-center' src={TXs[i].metadata.offChainData.image}></img>
                                ) : (
                                    <React.Fragment>{(TXs[i].metadata.onChainData ? (
                                        <img alt={TXs[i].metadata.onChainData.data.name} className='flex w-16 h-16 rounded-lg justify-center' src={TXs[i].metadata.onChainData.data.uri}></img>
                                    ) : (
                                        <div className="flex w-16 h-16 rounded-lg justify-center bg-neutral-900 flex-shrink-0"></div>
                                    ))}</React.Fragment>



                                ))}</React.Fragment>

                            <a target="_blank" rel="noreferrer" className='flex w-[25%] flex-col hover:bg-neutral-700 rounded-lg ease-in-out duration-200 p-1' href={"https://xray.helius.xyz/token/" + TXs[i].metadata.mint}>
                                <div className='font-medium text-lg'>{TXs[i].metadata.onChainData.data.name}</div>
                                <div className='font-medium text-lg text-orange'>{TXs[i].metadata.onChainData.data.symbol}</div>
                            </a>
                            <div className="flex w-[60%] font-medium text-md">
                                {/* {description(TXs[i].type)} */}
                                {TXs[i].description}
                            </div>

                            <div className="flex w-[15%] font-medium text-md">
                                {relativeTime(new Date(TXs[i].created_at))}
                            </div>
                        </a>
                    </div>
                </div>

            )
        }}
    }

    return (
        TXs
            ? (
                <div className="flex w-full flex-col space-y-8 xl:space-y-0 xl:flex-row overflow-y-scroll no-scrollbar">

                    <div className="flex w-full h-max flex-col p-8 ">
                        <div key="TXs" className='flex w-full h-max rounded-lg flex-col items-center justify-center gap-4'>
                            {transactionDivs.reverse()}
                        </div>
                    </div>

                </div>

            ) : (
                <div></div>
            )
    )
}