import React from 'react'
import Styles from './SideBar.module.scss'
import personIcon from '../../Assets/PersonIcon.png'
import walletIcon from '../../Assets/WalletIcon.png'
import historyIcon from '../../Assets/HistoryIcon.png'
import complain from '../../Assets/ComplainIcon.png'
import notification from '../../Assets/bellIcon.png'
import referral from '../../Assets/ReferalIcon.png'
import settings from '../../Assets/SettingsIcon.png'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className={Styles.sideBarContainer}>
      <Link>
        <div className={Styles.profileContainer}>
          <div >
            <img className={Styles.profileIcon} src={personIcon} alt="personIcon" />
          </div>
          <div className={Styles.profile}>Profile</div>
        </div>
      </Link>

      <Link>
        <div className={Styles.walletContainer}>
          <div >
            <img className={Styles.walletIcon} src={walletIcon} alt="walletIcon" />
          </div>
          <div className={Styles.profile}>Wallet</div>
        </div>
      </Link>

      <Link>
        <div className={Styles.historyContainer}>
          <div >
            <img className={Styles.historyIcon} src={historyIcon} alt="historyIcon" />
          </div>
          <div className={Styles.profile}>History</div>
        </div>
      </Link>

      <Link>
        <div className={Styles.complainContainer}>
          <div >
            <img className={Styles.complainIcon} src={complain} alt="complainIcon" />
          </div>
          <div className={Styles.profile}>Complain</div>
        </div>
      </Link>

      <Link>
        <div className={Styles.notificationContainer}>
          <div >
            <img className={Styles.notificationIcon} src={notification} alt="notificationIcon" />
          </div>
          <div className={Styles.profile}>Notification</div>
        </div>
      </Link>

      <Link>
        <div className={Styles.referalContainer}>
          <div >
            <img className={Styles.referalIcon} src={referral} alt="referalIcon" />
          </div>
          <div className={Styles.refral}>Referral</div>
        </div>
      </Link>

      <Link>
        <div className={Styles.settingsContainer}>
          <div >
            <img className={Styles.settingsIcon} src={settings} alt="settingsIcon" />
          </div>
          <div className={Styles.settings}>Settings</div>
        </div>
      </Link>
    </div>
  )
}

export default SideBar