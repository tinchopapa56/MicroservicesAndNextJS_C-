import React from 'react'
import Link from 'next/link';
import CountdownTimer from './CountdownTimer';
import CarImage from './CarImage';
import { TAuction } from '@/types';

type Props = {
    auction: TAuction;
}

const AuctionCard = ({ auction }: Props) => {
    return (
        // <a href="#">
        //     <div className='relative w-full bg-gray-200 aspect-video rounded-lg overflow-hidden'>
        //         <Image
        //             src={auction.imageUrl}
        //             alt={`Image of ${auction.model} ${auction.model} in ${auction.color}`}
        //             fill
        //             priority
        //             className='object-cover'
        //             sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
        //         />
        //     </div>
        //     <div className='flex justify-between items-center mt-4'>
        //         <h3 className='text-gray-700'>{auction.make} {auction.model} </h3>
        //     </div>
        // </a>
        <Link href={`/auctions/details/${auction.id}`} className='group'>
            <div className='w-full bg-gray-200 aspect-w-16 aspect-h-10 rounded-lg overflow-hidden'>
                <div>
                    <div className='relative w-full bg-gray-200 aspect-[16/10] rounded-lg overflow-hidden'>
                        <CarImage imageUrl={auction.imageUrl} model={auction.model} make={auction.make} color={auction.color} />
                        <div className='absolute bottom-2 left-2'>
                            <CountdownTimer auctionEnd={auction.auctionEnd} />
                        </div>
                        {/* <div className='absolute top-2 right-2'>
                        <CurrentBid
                            reservePrice={auction.reservePrice}
                            amount={auction.currentHighBid} />
                    </div> */}
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <h3 className='text-gray-700'>{auction.make} {auction.model}</h3>
                <p className='font-semibold text-sm'>{auction.year}</p>
            </div>

        </Link>
    )
}

export default AuctionCard