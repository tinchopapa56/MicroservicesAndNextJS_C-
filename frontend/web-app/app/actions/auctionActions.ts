"use server"

import { TAuction, TPagedResult } from "@/types";
// import HARD from "@/app/auctions/hardcoded.json"

// const HARDCODED: TAuction[] = HARD as unknown as TAuction[];

export const getData = async (pageNumber: number, pageSize: number): Promise<TPagedResult<TAuction>> => {
    // const res = await fetch(`http://localhost:6001/search?pageSize=${pageSize}&pageNumber=${pageNumber}`);
    const res = await fetch(`http://localhost:7002/api/search?pageSize=${pageSize}&pageNumber=${pageNumber}`);

    if (!res.ok) {
        console.log("viendo ERR", res)
        throw new Error("LISTINGS, Failed to fetch data");
    }
    // if (!res.ok) {
    //     return Promise.resolve({
    //         results: HARDCODED, // HARD es un array de TAuction
    //         pageCount: pageNumber, 
    //         totalCount: HARD.length, 
    //       });
    // }

    return res.json();
}