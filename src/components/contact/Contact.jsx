// import React, { useRef, useState } from 'react';
// import emailjs from 'emailjs-com';
// import "./contact.css";

const Contact = () => {
//   const [submitted, setSubmitted] = useState(false)
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs.sendForm('service_w3zo357', 'template_mda9ref', form.current, 'UHOqcMeIWNczKNA_1')
//       .then((result) => {
//         console.log(result.text);
//         setSubmitted(true);
//       }, (error) => {
//         console.log(error.text);
//       });
//   };

//   return (
//     <section className="contact container section" id='contact'>
//       <h2 className="section__title">Reach Out</h2>
//       <div className="contact__container grid">
//         <div className="contact__info">
//           <h3 className="contact__title">Let's Talk</h3>
//           <p className="contact__details">Shoot me an email!</p>
//         </div>
//         {!submitted ?
//           <form ref={form} onSubmit={sendEmail} className="contact__form">
//             <div className="contact__form-group">
//               <div className="contact__form-div">
//                 <input
//                   type="text"
//                   className="contact__form-input"
//                   placeholder='Name'
//                   name="user_name"
//                 />
//               </div>
//               <div className="contact__form-div">
//                 <input
//                   type="email"
//                   className="contact__form-input"
//                   placeholder='Email'
//                   name="user_email"
//                 />
//               </div>
//             </div>
//             <div className="contact__form-div">
//               <input
//                 type="text"
//                 className="contact__form-input"
//                 placeholder='Subject'
//                 name="subject"
//               />
//             </div>
//             <div className="contact__form-div contact__form-area">
//               <textarea
//                 name="message"
//                 cols="30"
//                 rows="10"
//                 className='contact__form-input'
//                 placeholder='Write your message'
//               />
//             </div>
//             <button type="submit" className="btn">Send Message</button>
//           </form>
//         :
//         <p className="contact__details">Your email has been sent. I will get back to you shortly.</p>
//         }
//       </div>
//     </section>
//   )
}

export default Contact;