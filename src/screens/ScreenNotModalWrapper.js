import React from 'react'
import { useSelector } from 'react-redux'

export default function ScreenNotModalWrapper(props) {
    //
    const category = useSelector((state) => state.category);
    //
    return (
        <>
            <div className={`w-full flex py-2 relative `}>
                <div className="mr-10 flex">
                    <p className="text-2xl font-bold flex items-center">
                        {props.title}
                    </p>
                </div>
            </div>
            <div className="w-full py-3">
                <div className="w-full flex">
                    {props.children}
                </div>
            </div>
            {category.loadingNotModal && <div className="w-full top-0 left-0 z-50 bg-black bg-opacity-50 fixed  h-full">
                <div className='w-full flex items-center justify-center h-full'>
                    <i className="fas fa-circle-notch fa-spin text-4xl text-organce"></i>
                </div>
            </div>}
        </>
    )
}
