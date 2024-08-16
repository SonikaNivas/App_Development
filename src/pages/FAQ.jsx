import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is the learning experience like?",
      answer:
        "Flexible! Study anywhere, anytime on any device. Access courses online or via our app, engage in our study group, and learn at your own pace, there are no time limits for completing your course. Assessments are varied, and hardcopy materials are available.",
      isOpen: false,
    },
    {
      question: "Are the courses accredited?",
      answer:
        "Yes! Accredited by reputable bodies like the Quality License Scheme, The Complementary Medical Association and City & Guilds, ensuring recognition and value. The details of each course’s accreditations can be found on the individual course page.",
      isOpen: false,
    },
    {
      question: "What if I start the course and don’t like it?",
      answer:
        "No worries! All courses come with a 14-day money-back guarantee for a worry-free learning experience.",
      isOpen: false,
    },
    {
      question:
        "What support is available if I have questions during the course?",
      answer:
        "Our support team is available 24/7 via email and live chat. Additionally, you can book one-on-one sessions with our instructors for personalized guidance and assistance with course materials.",
      isOpen: false,
    },
    {
      question: "How often are new courses added?",
      answer:
        "We regularly update our course catalog with new content based on emerging trends and student feedback. Typically, new courses are added every quarter, so there’s always something new to learn.",
      isOpen: false,
    },
    {
      question:
        "Can I access the course materials after completing the course?",
      answer:
        "Yes, you will have lifetime access to the course materials, including any updates or additional resources added after you complete the course. This allows you to revisit the content and stay up-to-date with the latest information.",
      isOpen: false,
    },
  ]);

  const [additionalFaqs] = useState([
    {
      question: "How do I receive my certification upon course completion?",
      answer:
        "Upon successfully completing the course and passing all assessments, you will receive a digital certificate that you can download and print. Additionally, we can mail you a hardcopy certificate upon request.",
    },
    {
      question: "What types of assessments are included in the courses?",
      answer:
        "Our courses include a variety of assessments such as quizzes, assignments, projects, and peer reviews. These assessments are designed to test your understanding and application of the course material.",
    },
    {
      question: "Can I interact with other students?",
      answer:
        "Yes, you can join our online study group to interact with fellow students. We also offer discussion forums and live chat sessions where you can share insights, ask questions, and collaborate on projects.",
    },
  ]);

  const [userQuestion, setUserQuestion] = useState("");
  const [displayQuestion, setDisplayQuestion] = useState("");
  const [displayAnswer, setDisplayAnswer] = useState("");

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.isOpen = !faq.isOpen;
        } else {
          faq.isOpen = false;
        }
        return faq;
      })
    );
  };

  const handleQuestionChange = (event) => {
    setUserQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const allFaqs = [...faqs, ...additionalFaqs];
    const existingFaq = allFaqs.find(
      (faq) => faq.question.toLowerCase() === userQuestion.toLowerCase()
    );

    if (existingFaq) {
      setDisplayQuestion(userQuestion);
      setDisplayAnswer(existingFaq.answer);
    } else {
      setDisplayQuestion(userQuestion);
      setDisplayAnswer("We'll get back to you with the answer soon.");
    }

    setUserQuestion("");
  };

  return (
    <div>
      <button
        className="back-to-home-button"
        onClick={() => (window.location.href = "/home")}
      >
        Back to Home
      </button>
      <br></br>
      <div
        className="faq-container"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "calc(100% - 100px)",
          width: "100hv",
          height: "90vh",
          position: "relative",
          marginTop: "50px",
        }}
      >
        <div className="faq-container-inner">
          <h1>FAQs</h1>
          {faqs.map((faq, index) => (
            <div key={index} className="faq">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <div
                  className={`dropdown-icon ${faq.isOpen ? "open" : ""}`}
                ></div>
              </div>
              <div className={`faq-answer ${faq.isOpen ? "open" : ""}`}>
                {faq.answer}
              </div>
            </div>
          ))}
          <div className="search-bar-container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="search-bar"
                placeholder="Ask any question..."
                value={userQuestion}
                onChange={handleQuestionChange}
              />
              <br></br>
              <br></br>
              <button
                type="submit"
                className="submit-button"
                style={{
                  padding: "10px 10px",
                  marginLeft: "310px",
                  width: "110px",
                }}
              >
                Submit
              </button>
            </form>
          </div>
          {displayQuestion && (
            <div className="search-result">
              <p>
                <strong>Your Question:</strong> {displayQuestion}
              </p>
              <p>
                <strong>Answer:</strong> {displayAnswer}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
