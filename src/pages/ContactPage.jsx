// import React from "react";
// import "./ContactPage.css";

// const ContactPage = () => {
//   return (
//     <div className="contact-page">
//       <div className="overlay"></div>
//       <div className="contact-container">
//         <div className="contact-info">
//           <h2>Contact Us</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam.
//           </p>
//           <div className="contact-details">
//             <div className="detail">
//               <i className="fas fa-map-marker-alt"></i>
//               <div>
//                 <h3>Address</h3>
//                 <p>
//                   4671 Sugar Camp Road,
//                   <br />
//                   Owatonna, Minnesota, 55060
//                 </p>
//               </div>
//             </div>
//             <div className="detail">
//               <i className="fas fa-phone"></i>
//               <div>
//                 <h3>Phone</h3>
//                 <p>507-555-1234</p>
//               </div>
//             </div>
//             <div className="detail">
//               <i className="fas fa-envelope"></i>
//               <div>
//                 <h3>Email</h3>
//                 <p>wrubd7810e@temporary-mail.net</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="contact-form">
//           <h3>Send Message</h3>
//           <form>
//             <input type="text" placeholder="Full Name" required />
//             <input type="email" placeholder="Email" required />
//             <input type="phone no" placeholder="Mobile" required />
//             <textarea placeholder="Type your Message..." required></textarea>
//             <button type="submit">Send</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

import emailjs from "emailjs-com";
import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS service ID, template ID, and user ID
    const serviceID = "service_6ifn0nr";
    const templateID = "template_my8hpwr";
    const userID = "nGBSObIzD7r6c9D0j";

    emailjs.init("your_user_ID");

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Failed to send message", error);
        alert(`Error: ${error.text}`);
      });

    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <div className="overlay"></div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className="contact-details">
            <div className="detail">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Address</h3>
                <p>
                  4671 Sugar Camp Road,
                  <br />
                  Owatonna, Minnesota, 55060
                </p>
              </div>
            </div>
            <div className="detail">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>507-555-1234</p>
              </div>
            </div>
            <div className="detail">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>wrubd7810e@temporary-mail.net</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h3>Send Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Type your Message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
