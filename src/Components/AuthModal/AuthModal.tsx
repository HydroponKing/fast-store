import s from './AuthModal.module.css'
import React, {useState} from "react";
import {fetchAuth} from "../../api.ts";

interface AuthModalProps {
    onClose: () => void
}

function AuthModal( { onClose }: AuthModalProps ) {

    const [loginInput, setLoginInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const [isCompleteLogin, setIsCompleteLogin] = useState(false)
    const [isFalseLogin, setIsFalseLogin] = useState(false)

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const authData = await fetchAuth({ username: loginInput, password: passwordInput })
            localStorage.setItem('token', authData.token)
            localStorage.setItem('name', loginInput)
            setIsCompleteLogin(true)
            setTimeout(()=> location.reload(), 1500)
        }catch (error){
            console.error(`ERROR IS - ${error}`)
            setIsFalseLogin(true)
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.id === 'login'){
            setLoginInput(event.target.value)
        }else {
            setPasswordInput(event.target.value)
        }
    }

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget){
            onClose()
        }
    }

    if (isCompleteLogin){
        return (
            <div className={s.modalOverlay}>
                <div className={s.modalContent}>
                    <div>
                        Complete!
                    </div>
                </div>
            </div>
        )
    }

  return (
    <>
        <div className={s.modalOverlay} onClick={handleOverlayClick}>
            <div className={s.modalContent}>
                <h2>LogIn window</h2>
                <form onSubmit={handleSubmit}>
                    <input placeholder={'Login'} value={loginInput} className={s.inputLogin} onChange={handleInputChange} id={'login'}></input>
                    <input placeholder={'Password'} value={passwordInput} className={s.inputPass} onChange={handleInputChange}></input>
                    {isFalseLogin &&
                        <div>
                            False!
                        </div>
                    }
                    <button className={s.buttonLog} type="submit">Login</button>
                </form>
                <a href="/">Don't you have an account? Then click here!</a>
            </div>
        </div>
    </>
  )
}

export default AuthModal
