import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Schedule = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div style={{ backgroundImage: 'linear-gradient(to right, #161928 40%, #4E598E 100%)' }} className='p-10 flex justify-center items-center'>
            <div className='w-full p-4 xl:w-[70%] text-center'>
                <h1 className='text-center text-5xl font-bold text-[#FFB816] mt-12 mb-4'>Event Schedule</h1>
                <p className='text-white text-2xl  text-center mb-10'>A Representation of the event planning</p>
                <div className="mx-auto p-6 mt-10" style={{ backgroundImage: 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)' }}>
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <div style={{ backgroundImage: 'linear-gradient(to right, #161928 40%, #4E598E 100%)' }}
                                className="flex items-center justify-between  pl-3 pr-2 py-3 w-full rounded text-white font-bold cursor-pointer hover:bg-gray-300 text-lg"
                                onClick={() => toggleQuestion(index)}
                            >
                                {faq.question}
                                <span className="h-6 w-6 flex items-center justify-center text-black text-sm">
                                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </div>
                            {openIndex === index && (
                                <div className="p-3">
                                    {faq.answer.map((paragraph, index) => (
                                        <p key={index} className="text-gray-600 mb-3 text-lg">{paragraph}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Schedule