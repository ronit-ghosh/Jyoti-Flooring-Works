import React from 'react'
import { Meteors } from '../ui/meteors'

const Banner = () => {
    return (
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-center mb-10">
            <h1 className="font-bold text-xl text-white relative z-10 flex justify-center">
                Delivering Excellence, Every Step of the Way
            </h1>
            <Meteors number={25} />
        </div>
    )
}

export default Banner
