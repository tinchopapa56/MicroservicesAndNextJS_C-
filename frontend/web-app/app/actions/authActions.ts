"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

export async function getCurrentUser() {
    try {
        const session = await getServerSession(authOptions)
        
        if(!session) return null

        return session.user;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        console.log("eror en AUTH ACTIONS: ", error)
    }
}