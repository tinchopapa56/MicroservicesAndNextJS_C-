import React from 'react'
import { AiOutlineCar } from 'react-icons/ai'

type Props = {}

const Navbar = (props: Props) => {
    console.log("Client Component")
    return (
        <header className="sticky top-0 z-50 flex justify-betweeen bg-white p-5 items-center text-gray-800 shadow-md">
            <div>
                <div>Left</div>
                <div>Middle</div>
                <div>Right</div>
            </div>
        </header>
    )
}

export default Navbar