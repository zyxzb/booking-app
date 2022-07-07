import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

//style
import './css/Form.css';

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_tjkm84a', 'template_90thuuk', form.current, 'jz4C1ercK2OIjSlmK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e
            .target
            .reset();
    };

    return (
        <div className='form'>
            <div className="formContainer">
                <h3>Formularz kontaktowy</h3>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Imię:</label>
                    <input type="text" name="from_name" placeholder="Wpisz swoje imię..." required/>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Wpisz swój adres e-mail..."
                        required/>
                    <label>Wiadomość:</label>
                    <textarea name="message" placeholder="Twoja wiadomość..." required/>
                    <input type="submit" value="Wyślij"/>
                </form>
            </div>
        </div>
    );
}

export default Form;
