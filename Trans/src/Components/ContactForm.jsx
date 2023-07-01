// import React from 'react'

import './Contact.css'


const ContactForm = () => {
  return (
    <div className='form-container'>
      <h1>Send a Message to Us</h1>
      <form>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Subject" />
      <textarea  rows="4" placeholder="Message"></textarea>
      <button className='btn'>Send Message</button>

      </form>
     
    </div>
  )
}

export default ContactForm
