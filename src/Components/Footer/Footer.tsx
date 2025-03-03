import s from './Footer.module.css'
import { Logo } from "../../assets/react"

const Footer = () => {
  return (
    <div className={s.footerContainer}>
      <div  className={s.inconsolataFont}>
        <h3>Buy</h3>
        <p>Registration</p>
        <p>Bidding & buying help</p>
        <p>Stores</p>
        <p>Curator Collections</p>
      </div>
      <div  className={s.inconsolataFont}>
      <h3>Sell</h3>
        <p>Start selling</p>
        <p>How to sell</p>
        <p>Business sellers</p>
        <p>Affiliates</p>
      </div>
      <div>
        <Logo width={150}/>
      </div>
    </div>
  )
}

export default Footer





