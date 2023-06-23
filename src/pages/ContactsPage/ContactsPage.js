import React from 'react';
import './ContactsPage.css';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import axios from 'axios';

const ContactsPage = () => {
  const submitForm = async (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    try {
        await axios.post('http://localhost:3001/submit-form', { name, email, message });
        console.log('Data sent successfully');
        e.target.elements.name.value = '';
        e.target.elements.email.value = '';
        e.target.elements.message.value = '';
        // Дополнительный код или обработка после успешной отправки данных
      } catch (error) {
        console.error('Error sending data:', error);
        // Обработка ошибки при отправке данных
      }
      
  };

  return (
    <div>
      <Header />
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
          <form className='contact-form' onSubmit={submitForm}>
            <input type='text' className='textb' placeholder='Ваше имя' name='name' />
            <input type='email' className='textb' placeholder='Ваша почта' name='email' />
            <textarea placeholder='Ваше сообщение' name='message' />
            <input type='submit' className='btn' value='Отправить' />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactsPage;
