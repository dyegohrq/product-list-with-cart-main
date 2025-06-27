import { useEffect } from "react";
import type { ItemProps } from "../button"
import { useNavigate } from "react-router";

interface ModalProps {
    item: ItemProps[];
    isOpen: boolean;
    onClose: () => void;
    total: number;
}

export function Modal({item, isOpen, onClose, total}: ModalProps) {
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
            <div className="bg-white p-[43px] rounded-xl " onClick={ (e) => e.stopPropagation() } >
                <div>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <h1>
                                Order Confirmed
                            </h1>
                            <p>We hope you enjoy your food!</p>
                        </div>
                    </div>
                    <div>
                        <ul>
                            {
                                item.map((prod) => (
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                            <div>
                                                <h2> {prod.name} </h2>
                                                <div>
                                                    <span> { prod.amount }x </span>
                                                    <span> @{prod.price} </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <span>
                                                {prod.total}
                                            </span>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <div>
                            <h2>Order Total</h2>
                            <span> {total} </span>
                        </div>
                    </div>
                </div>
                <button className="cursor-pointer">
                    Start New Order
                </button>
            </div>
        </div>
    )
}