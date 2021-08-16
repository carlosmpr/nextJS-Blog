import React from "react";
import classes from "./contactForm.module.css";
export default function ContactForm() {

    const [name, setName] = React.useState('')
    function sendMessageHandler(event){
        event.preventDefault();

        fetch('/api/contact', {
            method:'POST',
            body: JSON.stringify()
        })

    }
  return (
    <section className={classes.contact}>
      <h1>How can I help you</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email"> Your email</label>
            <input type="email" id="email" required value={name} onChange={(e)=> e.target.value}/>
            
          </div>

          <div className={classes.control}>
            <label htmlFor="name"> Your Namel</label>
            <input type="text" id="name" required />
          </div>
        </div>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="message"> Your Message</label>
            <textarea id="message" rows="5" />
          </div>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
