import React from 'react';
import "./ContactsPage.css"
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';

const ContactsPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='contacts-page'>

                <div className='contact-page'>
                    <h2>Oddyssea</h2>
                    <div className='contact-info'>
                        <div className='item'>
                            <i className='icon fas fa-home'></i>
                            Odessa, Ukraine
                        </div>
                        <div className='item'>
                            <i className='icon fas fa-phone'></i>
                            +38091429421
                        </div>
                        <div className='item'>
                            <i className='icon fas fa-envelope'></i>
                            email@address.com
                        </div>
                        <div className='item'>
                            <i className='icon fas fa-clock'></i>
                            Mon - Fri 10:00 AM to 6:00 PM
                        </div>

                    </div>
                    <form className='contact-form'>
                        <input type='text' className='textb' placeholder='Ваше имя' />
                        <input type='email' className='textb' placeholder='Ваша почта' />
                        <textarea placeholder='Ваше сообщение'></textarea>
                        <input type='submit' className='btn' value='Отправить' />
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ContactsPage;