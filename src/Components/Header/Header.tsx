import s from './Header.module.css'
import { Logo, Cart, User } from '../../assets/react.tsx'
import { useState } from 'react';
import AuthModal from '../AuthModal/AuthModal.tsx';
import CartModal from "../CartModal/CartModal.tsx";

const Header = () => {
    const [isModalOpen, setModalOpen] = useState(false)
    const [isCartUser, setIsCartUser] = useState(false)

    const handleUserClick = () => {
        setModalOpen(true)
    }
    const handleCartClick = () => {
        setIsCartUser(true)
    }

    const closeModal = () => {
        setModalOpen(false)
        setIsCartUser(false)
    }



    return (
        <>
            <div className={s.container}>
                <div>
                    <Logo width={85}/>
                </div>
                <div className={s.userItems}>
                    <Cart width={40} onClick={handleCartClick} />
                    <User width={40} onClick={handleUserClick}/>
                </div>
            </div>
            {isModalOpen && <AuthModal onClose={closeModal}/>}
            {isCartUser && <CartModal onClose={closeModal}/>}
        </>
    );
};

export default Header;