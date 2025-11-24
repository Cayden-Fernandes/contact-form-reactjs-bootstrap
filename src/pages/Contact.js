import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitText, setSubmitText] = useState('Send Message');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration
  const publicKey = "  "; // Insert your public key here
  const serviceID = "  "; // Insert your serviceID here
  const templateID = "  "; // Insert your templateID here

  // Initialise email JS
  React.useEffect(() => {
    emailjs.init(publicKey);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitText("Just A Moment...");
    
    try {
      await emailjs.send(serviceID, templateID, formData);
      setSubmitText("Message Sent Successfully");
      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.log(error);
      setSubmitText("Something went wrong");
    } finally {
      setIsSubmitting(false);
      // Reset button text after 3 seconds
      setTimeout(() => {
        setSubmitText("Send Message");
      }, 3000);
    }
  };

  return (
    <section 
      className="min-vh-100 d-flex justify-content-center align-items-center p-4"
      style={{
        backgroundImage: 'url(https://source.unsplash.com/cqbLg3lZEpk/1600x900)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-12">
            <div className="bg-white p-4 p-md-5 rounded-3 shadow-lg position-relative">
              <h1 className="display-5 fw-bold mb-3">Contact Me</h1>
              <p className="text-muted lead mb-4">
                Have any questions? I would love to hear from you. Send me a message and I will respond as soon as possible.
              </p>

              <form onSubmit={handleSubmit} id="contact-form">
                <div className="mb-3">
                  <label htmlFor="user_name" className="form-label text-muted">Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="user_name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="user_email" className="form-label text-muted">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="user_email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label text-muted">Message</label>
                  <textarea
                    className="form-control form-control-lg"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-lg w-100"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: isSubmitting ? '#cccccc' : '#ffb6c1',
                    borderColor: isSubmitting ? '#cccccc' : '#ffb6c1',
                    color: '#000000',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    border: 'none',
                    padding: '12px 24px'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = '#ff9aae';
                      e.target.style.borderColor = '#ff9aae';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = '#ffb6c1';
                      e.target.style.borderColor = '#ffb6c1';
                    }
                  }}
                >
                  {submitText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;