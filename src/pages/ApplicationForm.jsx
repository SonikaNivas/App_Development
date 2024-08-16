import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ApplicationForm.css";

const ApplicationForm = ({ registeredUsername }) => {
  const location = useLocation();
  const { course } = location.state || {};
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [currentJob, setCurrentJob] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");

  const navigate = useNavigate();

  const handlePaymentSuccess = (paymentId) => {
    const applicationData = {
      firstName,
      lastName,
      dob,
      email,
      phoneNumber,
      currentJob,
      annualIncome,
      resumeLink,
      message,
      courseName: course.title,
      registeredUsername,
      paymentId,
    };

    fetch("http://localhost:8080/api/applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigate("/thank-you");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (amount === "") {
      alert("Please enter an amount");
      return;
    }

    var options = {
      key: "rzp_test_4NzpA1bW3pp3IS",
      key_secret: "a5xsHAtVmefoFY9SPUhixmwz",
      amount: amount * 100, // Amount in paise
      currency: "INR",
      name: "PROGROW",
      description: "for testing purpose",
      handler: function (response) {
        alert(
          "Payment Successful! Payment ID: " + response.razorpay_payment_id
        );
        handlePaymentSuccess(response.razorpay_payment_id);
      },
      prefill: {
        name: firstName + " " + lastName,
        email: email,
        contact: phoneNumber,
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div className="application-form-container">
      <h1>Application Form for {course?.title}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Current Job:
          <input
            type="text"
            value={currentJob}
            onChange={(e) => setCurrentJob(e.target.value)}
            required
          />
        </label>
        <label>
          Annual Income:
          <input
            type="text"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value)}
            required
          />
        </label>
        <label>
          Resume Link:
          <input
            type="text"
            value={resumeLink}
            onChange={(e) => setResumeLink(e.target.value)}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <label>
          Amount:
          <input
            type="text"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
