import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_zz6hzjz', 'template_s00mdau', { name, email, message }, 'jHOT_cXZ9xuUjrVEu')
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
        //  reset form
        setName('');
        setEmail('');
        setMessage('');
      }, (err) => {
         console.log('FAILED...', err);
      });
  };

  return (
    <div className='contact-page'>
      <h2>Contact me</h2>

      <form className="form-container" onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <input className='submit-btn' type="submit" value="Send" />
      </form>
    </div>
  );
}
