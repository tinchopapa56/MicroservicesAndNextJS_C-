"use client"
import React from 'react'
import Countdown, { zeroPad } from 'react-countdown';

type Trenderer = {
    days: number
    hours: number
    minutes: number
    seconds: number
    completed: boolean
}
const renderer = ({ days, hours, minutes, seconds, completed }: Trenderer) => {

    return (
        <div className={`
            border-2 
            border-white 
            text-white
             py-1 
            px-2
             rounded-lg 
            flex
             justify-center 
            ${completed ?
                "bg-red-600" : (days === 0 && hours < 10)
                    ? "bg-amber-600" : "bg-green-600"}
        `}>
            {completed ? (
                <span>Auction finished</span>
            ) : (
                <span suppressHydrationWarning={true}>
                    {zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
                </span>
            )}
        </div>
    )

}

type Props = {
    auctionEnd: string;
}

export default function CountdownTimer({ auctionEnd }: Props) {
    return (
        <Countdown date={auctionEnd} renderer={renderer} />
    )
}
