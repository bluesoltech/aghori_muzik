import React from 'react'

const Recent_news = () => {
    return (
        <div style={{ backgroundImage: 'linear-gradient(to right, #161928 40%, #4E598E 100%)' }} className='p-10 flex justify-center items-center'>
            <div className='w-full p-4 xl:w-[70%] text-center'>
                <h1 className='text-center text-5xl font-bold text-[#FFB816] mt-12 mb-4'>Recent News</h1>
                <p className='text-white text-2xl  text-center mb-10'>Check Who Makes The Event Possible</p>
                <div className='grid xl:grid-cols-3 md:grid-cols-1 gap-4 items-center justify-items-center w-full'>
                    <div className='flex justify-center items-center h-[400px] w-full xl:w-[400px] border-8 border-gradient-to-r from-[#FFE07A] to-[#7A5103] rounded-lg'>
                        <img src="" alt="no" className="max-h-full max-w-full" />
                    </div>
                    <div className='flex justify-center items-center h-[400px] w-full xl:w-[400px] border-8 border-gradient-to-r from-[#FFE07A] to-[#7A5103] rounded-lg'>
                        <img src="" alt="no" className="max-h-full max-w-full" />
                    </div>
                    <div className='flex justify-center items-center h-[400px] w-full xl:w-[400px] border-8 border-gradient-to-r from-[#FFE07A] to-[#7A5103] rounded-lg'>
                        <img src="" alt="no" className="max-h-full max-w-full" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Recent_news