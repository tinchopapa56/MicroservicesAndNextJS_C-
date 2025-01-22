"use client"
import React, { useState, useEffect } from 'react'
import AuctionCard from './AuctionCard';
import { AppPagination } from '../components';
import { TAuction, TPagedResult } from '@/types';
import Filters from './Filters';
import { useParamsStore } from '@/hooks/useParamsStore';
import { useShallow } from 'zustand/shallow';
import { getData } from '../actions/auctionActions';
import qs from 'query-string';


const Listings = () => {
    // const [auctions, setAuctions] = useState<TAuction[]>([]);
    const [data, setData] = useState<TPagedResult<TAuction>>();
    const params = useParamsStore(useShallow(state => ({
        pageNumber: state.pageNumber,
        pageSize: state.pageSize,
        searchTerm: null//state.searchTerm,
    })))
    const setParams = useParamsStore(state => state.setParams);
    const url = qs.stringifyUrl({url: "", query: params})

    const setPageNumber = (pageNumber:number) => {
        setParams({pageNumber})
    }

    // const [pageCount, setPageCount] = useState(10);
    // const [pageNumber, setPageNumber] = useState(1);
    // const [pageSize, setPageSize] = useState(4);

    useEffect(() => {
        getData(url).then(data => {
            setData(data);
            // setLoading(false);
        })
    }, [url])
    // }, [url, setData])
    // useEffect(() => {
    //     getData(pageNumber, pageSize).then(data => {
    //         setAuctions(data.results);
    //         setPageNumber(data.pageCount);
    //     })
    // }, [pageNumber, pageSize])

    // if(auctions.length === 0) return <h3>Loading...</h3>
    if(!data) return <h3>Loading...</h3>

    return (
        <>
            {/* <Filters pageSize={pageSize} setPageSize={setPageSize}/> */}
            <Filters />
            <div className="grid grid-cols-4 gap-6">
                {/* {auctions.map(auction => ( */}
                {data.results.map(auction => (
                    <AuctionCard key={auction.id} auction={auction} />
                ))}
            </div>
            <div className='flex justify-center mt-4'>
                {/* <AppPagination onPageChange={setPageNumber} currentPage={pageNumber} pageCount={pageCount} /> */}
                <AppPagination onPageChange={setPageNumber} currentPage={params.pageNumber} pageCount={data.pageCount} />
            </div>
        </>

    )
}
export default Listings