import React,{useState} from "react"
import styles from '../css/navbar.module.css'
import {FaAlignRight} from "react-icons/fa"
import links from '../constants/links'
import socialicons from '../constants/social-icons'
import logo from '../images/logo.svg'
import AniLink from "gatsby-plugin-transition-link/AniLink"; //for transition between pages
const Navbar = () => {
  const [isOpen,setNav] = (useState(false))
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <nav className={styles.navbar} >
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="back roads logo"/>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon}/>
          </button>
        </div>
        <ul className={isOpen ? `${styles.navLinks} ${styles.showNav}`: `${styles.navLinks}`}>
          {links.map((item,index)=>{
            return(<li key={index}><AniLink fade to={item.path}>{item.text}</AniLink></li>)
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialicons.map((item,index)=>{
            return <a key={index} href={item.url} rel="noopener noreferrer" target="_blank">
                    {item.icon}
                    </a>
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
