import React, {useEffect, useState} from 'react';
import s from './CartModal.module.css';
import {fetchGetCard, fetchGetUserId} from "../../api.ts";
import {DataCart, ModalProps} from "../interfeces.ts";

const CartModal = ({ onClose }: ModalProps) => {

    const [data, setData] = useState<DataCart[]>()
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState<string | null>(null)


    useEffect(() => {
        const loadData = async () => {
            try {
                const cartData = await fetchGetCard()
                setData(cartData);
            } catch (err) {
                console.log(err)
                setIsError("failed loadData")
            }finally {
                setIsLoading(false)
            }
        };

        loadData();
    }, []);


    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget){
            onClose()
        }
    }

    const handleHandle = () => {
        //mor_2314
        fetchGetUserId("mor_2314").then(data => console.log(data))
        console.log(data)
    }



    return (
        <div>
            <div className={s.modalOverlay} onClick={handleOverlayClick}>
                <div className={s.modalContent}>
                    <div>

                        {isLoading ? (
                            'loading...'
                        ): isError ? (
                            <div className={s.modalContent}>{isError}</div>
                        ): data?.length ? (
                            data.map((product: DataCart)=><div key={product.productId}>Id-{product.productId}; Quantity-{product.quantity}</div>)
                        ):(
                            'Cart is empty'
                        )
                        }
                        <button onClick={handleHandle}>CLICK</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;