import { useEffect } from "react";
import type { ItemProps } from "../button"
import iconConfirmed from '/assets/images/icon-order-confirmed.svg'
import style from '../typography.module.css'


interface ModalProps {
    item: ItemProps[];
    isOpen: boolean;
    onClose: () => void;
    total: number;
    closeModal: () => void
}

export function Modal({item, isOpen, onClose, total, closeModal}: ModalProps) {

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
            window.scrollTo({top: 0, behavior: 'smooth'})
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    return(
        <div 
            className=" fixed overflow-hidden top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center " 
            onClick={ onClose }
            >
            <div className="bg-white p-[43px] rounded-xl w-full max-w-[80%] lg:max-w-[688px]" onClick={ (e) => e.stopPropagation() } >
                <div>
                    <div>
                        <img src={iconConfirmed} alt="icon-order-confirmed" className="mb-7" />
                        <div>
                            <h1 className={`${style['text-present-1']} text-rose-900 `} >
                                Order Confirmed
                            </h1>
                            <p className={`${style['text-present-3']} text-rose-500 `} >We hope you enjoy your food!</p>
                        </div>
                    </div>
                    <div className=" my-8 bg-rose-50 p-6 rounded-lg max-h-[540px] " >
                        <ul className="flex flex-col gap-4 max-h-[400px] overflow-y-auto " >
                            {
                                item.map((prod) => (
                                    <li className="flex items-center justify-between border-b border-rose-100 pb-4 " >
                                        <div className="flex items-center gap-4 " >
                                            <img src={prod.image.thumbnail} alt={prod.name} className=" w-12 h-12 rounded-[4px] " />
                                            <div>
                                                <h2 className={`${style['text-present-4-bold']} text-rose-900 `} > {prod.name} </h2>
                                                <div>
                                                    <span className={`${style['text-present-4-bold']} text-red mr-2 `} > { prod.amount }x </span>
                                                    <span className={`${style['text-present-4']} text-rose-500 `} > @{prod.price.toLocaleString('en-US', {
                                                        style: 'currency',
                                                        currency: 'USD'
                                                    }) } </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <span className={`${style['text-present-3']} text-rose-900 `} >
                                                {prod.total.toLocaleString('en-US', {
                                                    style: 'currency',
                                                    currency: 'USD'
                                                })}
                                            </span>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className=" py-6 flex items-center justify-between " >
                            <h2 className={`${style['text-present-4']} text-rose-900 `} >Order Total</h2>
                            <span className={`${style['text-present-2']} text-rose-900 `} > {total.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            })} </span>
                        </div>
                    </div>
                </div>
                <button 
                    className={`cursor-pointer bg-red w-full py-4 rounded-[999px] ${style['text-present-3']} text-white hover:bg-rose-900 transition-all duration-500 `}
                    onClick={ () => closeModal() }
                >
                    Start New Order
                </button>
            </div>
        </div>
    )
}