import React, {useEffect, useState} from 'react';
import s from './CartModal.module.css';
import {fetchGetCard} from "../../api.ts";

const CartModal = ({ onClose }) => {

    const [data, setData] = useState()


    useEffect(() => {
        const loadData = async () => {
            try {
                const cartData = await fetchGetCard()
                setData(cartData);
            } catch (err) {
                console.log(err)
            }
        };

        loadData();
    }, []);


    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget){
            onClose()
        }
    }



    return (
        <div>
            <div className={s.modalOverlay} onClick={handleOverlayClick}>
                <div className={s.modalContent}>
                    <div>
                        {data ?
                            data.map(product=><div key={product.productId}>Id-{product.productId}; Quantity-{product.quantity}</div>)
                            : 'loading...'}
                        <button onClick={fetchGetCard}>CLICK</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;