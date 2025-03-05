import s from './Header.module.css'
import { Logo, Cart, User } from '../../assets/react.tsx'
import {useEffect, useState} from 'react';
import AuthModal from '../AuthModal/AuthModal.tsx';
import UserModal from "../UserModal/UserModal.tsx";
import CartModal from "../CartModal/CartModal.tsx";

const Header = () => {
    const [isModalOpen, setModalOpen] = useState(false)
    const [isModalUser, setIsModalUser] = useState(false)
    const [isModalCart, setIsModalCart] = useState(false)

    const isUser = localStorage.getItem("name") || ""
    const isUserWord = isUser.toUpperCase()[0]


    const handleAuthClick = () => {
        setModalOpen(true)
    }
    const handleUserClick = () => {
        setIsModalUser(true)
    }
    const handleCartClick = () => {
        setIsModalCart(true)
    }
    const closeModal = () => {
        setModalOpen(false)
        setIsModalUser(false)
        setIsModalCart(false)
    }



    return (
        <>
            <div className={s.container}>
                <div>
                    <Logo width={85}/>
                </div>
                <div className={s.userItems}>
                    {isUser ?
                    <div className={s.authTrueContainer}>
                        <Cart width={40} onClick={handleCartClick}/>
                        <div className={s.userWordContainer} onClick={handleUserClick} >
                            <p className={s.userWord}>{isUserWord}</p>
                        </div>
                    </div>
                    :
                        <User width={40} onClick={handleAuthClick}/>
                    }
                </div>
            </div>
            {isModalOpen && <AuthModal onClose={closeModal}/>}
            {isModalUser && <UserModal onClose={closeModal}/>}
            {isModalCart && <CartModal onClose={closeModal}/>}
        </>
    );
};

export default Header;