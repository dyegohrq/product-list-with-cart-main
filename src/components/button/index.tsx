import { LiaCartPlusSolid } from "react-icons/lia"
import style from '../typography.module.css'
// import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
// import { useState } from "react";

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
    amount: number;
    total: number;
}

export function Button( {item, onClick}: ButtonProps ) {
    // const [activeButton, setActiveButton] = useState(false)
    

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
            {/* <div className=" flex items-center justify-between bg-red py-3 px-7 w-full max-w-[163px] rounded-[999px] text-white absolute bottom-[-23px] " >
                <button className=" hover:bg-white transition-all duration-500 hover:text-red rounded-full cursor-pointer " ><FiMinusCircle /></button>
                <span className={`${style['text-present-4-bold']}`} >0</span>
                <button className="hover:bg-white transition-all duration-500 hover:text-red rounded-full cursor-pointer " ><FiPlusCircle /></button>
            </div> */}
        </>
    )
}