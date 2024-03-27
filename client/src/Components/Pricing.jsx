import React from 'react'
import { FaCircleChevronRight } from "react-icons/fa6";



const Pricing = ({ plansData }) => {
    return (
        <div style={{ backgroundImage: 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)' }} className='w-full h-fit items-center justify-center p-4 '>
            <div className='flex flex-col justify-center items-center p-4'>
                <div className='w-full p-4 xl:w-[70%] text-center'>
                    <h1 className='text-center text-5xl font-bold text-[#2A304C] mt-12 mb-4'>Our Pricing Plan</h1>
                    <p className='text-[#2A304c] text-2xl font-bold text-center'>Choose Your Plan That Fits You Best</p>
                    <div className='flex flex-col xl:flex-row justify-center gap-8 mt-[74px]'>
                        {plansData.map((plan, index) => (
                            <div key={index} className="flex flex-col w-full max-w-sm bg-white dark:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                                <div style={{ backgroundImage: 'linear-gradient(to right, #161928 40%, #4E598E 100%)' }} className='h-fit w-full rounded-t-lg p-4'>
                                    <h5 className="mb-4 text-2xl font-medium text-white text-center">{plan.title}</h5>
                                    <h5 className="mb-4 text-xl text-white text-center">{plan.subtittle}</h5>
                                </div>
                                <ul role="list" className="flex-grow space-y-5 my-7 ">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex justify-start items-center pl-4 gap-1">
                                            <span className="bg-indigo-900 p-1 rounded-full text-white">
                                               <FaCircleChevronRight size={20}/>
                                            </span>
                                            <span className="text-base font-normal leading-tight text-black dark:text-white-400">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto">
                                    <div className="flex items-center justify-between px-4 py-2 bg-white border border-gray-200 rounded-b-lg shadow-sm">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-lg font-semibold">{plan.price}</span>
                                            <span className="bg-indigo-900 p-1 rounded-full text-white">
                                            <FaCircleChevronRight size={20}/>
                                            </span>
                                        </div>
                                        <button className='text-sm font-semibold leading-6 text-white bg-gradient-to-r from-[#161928] to-[#4E598E] px-4 py-2 rounded-lg'>Get Ticket</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pricing