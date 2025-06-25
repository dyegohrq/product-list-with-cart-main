import { LiaCartPlusSolid } from "react-icons/lia"
import style from '../typography.module.css'
import { useState } from "react"

interface ButtonProps{
    item: ItemProps;
    onClick: (item: ItemProps) => void
}

export interface ItemProps {
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
    name: string;
    category: string;
    price: number;
}

export function Button( {item, onClick}: ButtonProps ) {
    

    return(
        <>
            <button 
                className=" flex items-center gap-2 py-3 px-7 border border-rose-400 rounded-[999px] absolute bottom-[-23px] bg-white cursor-pointer "
                onClick={() => {onClick(item)}}
                >
                <LiaCartPlusSolid className=" text-red text-[20px] " />
                <span
                className={`${style["text-present-4-bold"]} text-rose-900 `}
                >
                Add to cart
                </span>
            </button>
        </>
    )
}