import React from 'react'
import Header from '../../Components/Header/Header'
import Styles from './Offer.module.scss'

const Offer = () => {
  return (
    <div>
        <div><Header /></div>

        <div className={Styles.offerContainer}>
            <div className={Styles.offerdetails}>
                <div className={Styles.offerPercentage}>15% Off</div>
                <div className={Styles.offerName}>Black Friday</div>
            </div>
            <div className={Styles.collectBtnContainer}>
                <button className={Styles.collectBtn}>Collect</button>
            </div>
        </div>

        <div className={Styles.offerContainer}>
            <div className={Styles.offerdetails}>
                <div className={Styles.offerPercentage}>22% Off</div>
                <div className={Styles.offerName}>Good Friday</div>
            </div>
            <div className={Styles.collectBtnContainer}>
                <button className={Styles.collectBtn}>Collect</button>
            </div>
        </div>


        <div className={Styles.offerContainer}>
            <div className={Styles.offerdetails}>
                <div className={Styles.offerPercentage}>30% Off</div>
                <div className={Styles.offerName}>Happy New Year</div>
            </div>
            <div className={Styles.collectBtnContainer}>
                <button className={Styles.collectBtn}>Collect</button>
            </div>
        </div>

        <div className={Styles.offerContainer}>
            <div className={Styles.offerdetails}>
                <div className={Styles.offerPercentage}>10% Off</div>
                <div className={Styles.offerName}>Weekend</div>
            </div>
            <div className={Styles.collectBtnContainer}>
                <button className={Styles.collectBtn}>Collect</button>
            </div>
        </div>
    </div>
  )
}

export default Offer