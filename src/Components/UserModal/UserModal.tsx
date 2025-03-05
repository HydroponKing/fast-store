//import React from 'react';
import s from './UserModal.module.css';
import React, {useEffect, useState} from "react";
import {fetchGetUser} from "../../api.ts";

const username = localStorage.getItem('name');

const dataSet = {
    "id": "loading...",
    "email": "loading...",
    "username": "loading...",
    "name": {
        "firstname": "loading...",
        "lastname": " "
    },
    "phone": "loading...",
}

interface ModalProps {
    onClose: () => void
}

const UserModal = ({ onClose }: ModalProps) => {

    const [data, setData] = useState(dataSet)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchGetUser(username);
                setData(data)
            }catch (error){
                console.log(error)
            }
        }
        fetchData()
    }, []);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget){
            onClose()
        }
    }

    const handleClickLogOut = () => {
        localStorage.removeItem('name');
        location.reload()
    }

    return (
        <div className={s.modalOverlay} onClick={handleOverlayClick}>
            <div className={s.modalContent}>
                <div className={s.mainContainer}>
                    <div className={s.mainText}>
                        Account
                    </div>
                    <div className={s.accountContainer}>
                        <div>Id: {data.id}</div>
                        <div>Email: {data.email}</div>
                        <div>Username: {data.username}</div>
                    </div>
                    <div className={s.personContainer}>
                        <div>name: {data.name.firstname} {data.name.lastname}</div>
                        <div>phone:{data.phone}</div>
                    </div>
                    <button className={s.buttonLogOut} onClick={handleClickLogOut}>LogOut</button>
                </div>
            </div>
        </div>
    );
};

export default UserModal;