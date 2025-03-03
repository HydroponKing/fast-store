import {useState} from 'react';
import s from './Button.module.css'

const Button = (  ) => {
    const [counter, setCounter] = useState(0)

    const [isButtonActive, setIsButtonActive] = useState(false)

    const handleClick = () => {
        setIsButtonActive(true)
        handlePlusClick()
    }

    const handleMinusClick = () => {
        setCounter((prev)=> {
            if (prev > 1){
                return prev - 1
            }
            setIsButtonActive(false)
            return 0
        })
    }

    const handlePlusClick = () => {
        setCounter((prev)=> prev + 1)
    }

    return (
        <div>
            {isButtonActive ?
                <div  className={s.activeButtonContainerCenter}>
                    <div className={s.activeButtonContainer}>
                        <button onClick={handleMinusClick} className={s.activeMicroButton}>-</button>
                        <div className={s.countDisplay}>{counter}</div>
                        <button onClick={handlePlusClick} className={s.activeMicroButton}>+</button>
                    </div>
                </div>
                :
                <button onClick={handleClick} className={s.defaultBuy}>BUY</button>
            }
        </div>
    );
};

export default Button;