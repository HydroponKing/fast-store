import s from './Header.module.css'
import { Logo, Cart, User } from '../../assets/react.tsx'
import { useState } from 'react';
import AuthModal from '../AuthModal/AuthModal.tsx';

const Header = () => {
    const [isModalOpen, setModalOpen] = useState(false)

    const handleUserClick = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }



    return (
        <>
            <div className={s.container}>
                <div>
                    <Logo width={85}/>
                </div>
                <div className={s.userItems}>
                    <Cart width={40}/>
                    <User width={40} onClick={handleUserClick}/>
                </div>
            </div>
            {isModalOpen && <AuthModal onClose={closeModal}/>}
        </>
    );
};

export default Header;