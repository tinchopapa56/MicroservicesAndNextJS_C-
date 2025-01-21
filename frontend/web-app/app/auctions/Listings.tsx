import React from 'react'
import AuctionCard from './AuctionCard';
import HARD from "./hardcoded.json"
import { TPagedResult, TAuction } from '@/types';

const getData = async () : Promise<TPagedResult<TAuction>>=> {
    let res : any = await fetch("http://localhost:6001/search?pageSize=10");

    // if (!res.ok) throw new Error("LISTINGS, Failed to fetch data");
    if (!res.ok) {
        res = {results: HARD}
        return res
    }

    return res.json();
}

const Listings = async () => {
    const data = await getData();

    return (
        <div className="grid grid-cols-4 gap-6">
            {data && data.results.map(auction => (
                <AuctionCard key={auction.id} auction={auction} />
            ))}
        </div>
    )
}
export default Listings