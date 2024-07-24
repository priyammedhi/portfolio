import React from 'react';
import cntimg from '../images/3675555.jpg';
import Swal from 'sweetalert2';

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    if (!name || !email || !message) {
      Swal.fire({
        icon: 'error',
        title: 'All fields are required',
        text: 'Please fill out all fields.',
      });
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
      });
      return;
    }

    Swal.fire({
      icon: 'info',
      title: 'Sending...',
      showConfirmButton: false,
    });

    formData.append("access_key", "2dd296c5-3dbb-43b5-a404-08628a3019c0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: 'Form Submitted Successfully',
      });
      event.target.reset();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: data.message,
      });
    }
  };

  return (
    <div>
      <section id="contact" className="py-5 m-3 bg-light" style={{ borderRadius: '10px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="text-center">Contact Me</h2>
              <br />
              <form onSubmit={onSubmit} style={{ textAlign: 'left', maxWidth: '400px', margin: 'auto' }}>
                <div className="form-group">
                  <label htmlFor="inputName">Name</label>
                  <input type="text" name='name' className="form-control" id="inputName" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEmail">Email</label>
                  <input type="email" name='email' className="form-control" id="inputEmail" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputMessage">Message</label>
                  <textarea name='message' className="form-control" id="inputMessage" rows="5" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-success" style={{ backgroundColor: 'purple' }}>Send →</button>
              </form>
            </div>
            <div className="col-md-6 d-none d-md-flex justify-content-center">
              <img src={cntimg} className="img-fluid" style={{ maxHeight: '400px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;