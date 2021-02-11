import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <div className="container-fluid contact" id="contact">
            <div className="connect-logo">    
            </div>
             <div className="container ">
             <div className="connect">
                <h3 className="contact-head">Let's Connect</h3>
                <p className="lead contact-head">
                     Thanks for looking at my work. Let's connect either for work or
                     to network.
                </p>
             </div>
             <div className="contact-form">
             <form className="contact-form" noValidate>
              <div className="mb-3">
               <label htmlFor="name" className="form-label contact-form">Name</label>
               <input type="text" className="form-control form-group"  
               id="name"
               type="text"
               />
            </div>
            <div className="mb-3">
               <label htmlFor="email" className="form-label contact-form">Email</label>
               <input type="email" className="form-control form-group" 
                id="email"
                type="text"
               />
            </div>
            <div className="mb-3">
               <label htmlFor="message" className="form-label contact-form">Message</label>
               <input type="text" className="form-control form-group message"
                id="message"
                type="text"
               />
            </div>
            <button type="submit" className="btn btn-primary contact-form cbtn">Submit</button>
          </form>
          </div>
             </div>
        </div>
    )
}

export default Contact;