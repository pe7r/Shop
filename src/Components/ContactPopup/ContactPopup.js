import React from 'react'
import './ContactPopup.scss'
import {NavLink} from 'react-router-dom'

 const ContactPopup = ({closePopup}) => {
    return (
        <div className="contact__container">
            <div className="contact__links">
                <div className="contact__message">
                    <img alt="message" src="https://media.wovenlyrugs.com/wovenly/chat_icon.svg"></img>
                    <NavLink to="">Message Us</NavLink>
                </div>
                <div className="contact__call">
                    <img alt="phone" src="https://media.wovenlyrugs.com/wovenly/phone_icon.svg"></img>
                    <NavLink to="">Call Us</NavLink>
                </div>
            </div>
            <button className="contact__close"
                    onClick={closePopup}>
                <img src="https://media.wovenlyrugs.com/wovenly/close_icon.svg"></img>
            </button>
        </div>
    )
}

export default ContactPopup
