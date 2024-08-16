// import React, { useState } from "react";
// import "./Service.css";

// const bankDetails = {
//   "10,000": [
//     {
//       name: "HDFC Bank",
//       interestRate: "5%",
//       duration: "5 years",
//       eligibility: "Government Staff, College Students",
//     },
//     {
//       name: "Canara Bank",
//       interestRate: "4.5%",
//       duration: "3 years",
//       eligibility: "Salaried Individuals, Pensioners",
//     },
//   ],
//   "1,00,000": [
//     {
//       name: "HDFC Bank",
//       interestRate: "6%",
//       duration: "5 years",
//       eligibility: "Government Staff, College Students",
//     },
//     {
//       name: "Canara Bank",
//       interestRate: "5.5%",
//       duration: "3 years",
//       eligibility: "Salaried Individuals, Pensioners",
//     },
//   ],
//   // Add more entries as needed
// };

// const Service = () => {
//   const [selectedAmount, setSelectedAmount] = useState("");
//   const [bankInfo, setBankInfo] = useState([]);

//   const handleAmountChange = (e) => {
//     const amount = e.target.value;
//     setSelectedAmount(amount);
//     setBankInfo(bankDetails[amount] || []);
//   };

//   return (
//     <div className="services-container">
//       <h2>Select an Amount</h2>
//       <select value={selectedAmount} onChange={handleAmountChange}>
//         <option value="">Select an amount</option>
//         <option value="10,000">10,000</option>
//         <option value="1,00,000">1,00,000</option>
//         {/* Add more options as needed */}
//       </select>
//       <div className="bank-details">
//         {bankInfo.length > 0 ? (
//           bankInfo.map((bank, index) => (
//             <div key={index} className="bank-card">
//               <h3>{bank.name}</h3>
//               <p>Interest Rate: {bank.interestRate}</p>
//               <p>Duration: {bank.duration}</p>
//               <p>Eligibility: {bank.eligibility}</p>
//             </div>
//           ))
//         ) : (
//           <p>Select an amount to see bank details.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Service;

// import React, { useState } from "react";
// import "./Service.css";

// const bankDetails = {
//   "10,000": [
//     {
//       name: "HDFC Bank",
//       interestRate: "5%",
//       duration: "5 years",
//       eligibility: "Government Staff, College Students",
//     },
//     {
//       name: "Canara Bank",
//       interestRate: "4.5%",
//       duration: "3 years",
//       eligibility: "Salaried Individuals, Pensioners",
//     },
//   ],
//   "1,00,000": [
//     {
//       name: "HDFC Bank",
//       interestRate: "6%",
//       duration: "5 years",
//       eligibility: "Government Staff, College Students",
//     },
//     {
//       name: "Canara Bank",
//       interestRate: "5.5%",
//       duration: "3 years",
//       eligibility: "Salaried Individuals, Pensioners",
//     },
//   ],
//   // Add more entries as needed
// };

// const Service = () => {
//   const [selectedAmount, setSelectedAmount] = useState("");
//   const [bankInfo, setBankInfo] = useState([]);

//   const handleAmountChange = (e) => {
//     const amount = e.target.value;
//     setSelectedAmount(amount);
//     setBankInfo(bankDetails[amount] || []);
//   };

//   return (
//     <div className="services-container">
//       <div className="card">
//         <h2>Select an Amount</h2>
//         <select value={selectedAmount} onChange={handleAmountChange}>
//           <option value="">Select an amount</option>
//           <option value="10,000">10,000</option>
//           <option value="1,00,000">1,00,000</option>
//           {/* Add more options as needed */}
//         </select>
//         <div className="bank-details">
//           {bankInfo.length > 0 ? (
//             bankInfo.map((bank, index) => (
//               <div key={index} className="bank-card">
//                 <h3>{bank.name}</h3>
//                 <p>Interest Rate: {bank.interestRate}</p>
//                 <p>Duration: {bank.duration}</p>
//                 <p>Eligibility: {bank.eligibility}</p>
//               </div>
//             ))
//           ) : (
//             <p>Select an amount to see bank details.</p>
//           )}
//         </div>
//       </div>
//       <div className="card counseling-card">
//         <h2>Free Counseling</h2>
//         <p>Get free counseling from our financial experts.</p>
//         <button className="counseling-button">Get Counseling</button>
//       </div>
//     </div>
//   );
// };

// export default Service;

// import React, { useState } from "react";
// import "./Service.css";

// const bankDetails = {
//   "10,000": [
//     {
//       name: "HDFC Bank",
//       interestRate: "5%",
//       duration: "5 years",
//       eligibility: "Government Staff, College Students",
//       imageUrl: "https://via.placeholder.com/300x150?text=HDFC+Bank", // Add a relevant image URL here
//     },
//     {
//       name: "Canara Bank",
//       interestRate: "4.5%",
//       duration: "3 years",
//       eligibility: "Salaried Individuals, Pensioners",
//       imageUrl: "https://via.placeholder.com/300x150?text=Canara+Bank", // Add a relevant image URL here
//     },
//   ],
//   "1,00,000": [
//     {
//       name: "HDFC Bank",
//       interestRate: "6%",
//       duration: "5 years",
//       eligibility: "Government Staff, College Students",
//       imageUrl: "https://via.placeholder.com/300x150?text=HDFC+Bank", // Add a relevant image URL here
//     },
//     {
//       name: "Canara Bank",
//       interestRate: "5.5%",
//       duration: "3 years",
//       eligibility: "Salaried Individuals, Pensioners",
//       imageUrl: "https://via.placeholder.com/300x150?text=Canara+Bank", // Add a relevant image URL here
//     },
//   ],
//   // Add more entries as needed
// };

// const Service = () => {
//   const [selectedAmount, setSelectedAmount] = useState("");
//   const [bankInfo, setBankInfo] = useState([]);

//   const handleAmountChange = (e) => {
//     const amount = e.target.value;
//     setSelectedAmount(amount);
//     setBankInfo(bankDetails[amount] || []);
//   };

//   return (
//     <div className="services-container">
//       <div className="card">
//         <h2>Select an Amount</h2>
//         <select value={selectedAmount} onChange={handleAmountChange}>
//           <option value="">Select an amount</option>
//           <option value="10,000">10,000</option>
//           <option value="1,00,000">1,00,000</option>
//           {/* Add more options as needed */}
//         </select>
//         <div className="bank-details">
//           {bankInfo.length > 0 ? (
//             bankInfo.map((bank, index) => (
//               <div key={index} className="bank-card">
//                 <img
//                   src={bank.imageUrl}
//                   alt={bank.name}
//                   className="bank-image"
//                 />
//                 <h3>{bank.name}</h3>
//                 <p>Interest Rate: {bank.interestRate}</p>
//                 <p>Duration: {bank.duration}</p>
//                 <p>Eligibility: {bank.eligibility}</p>
//               </div>
//             ))
//           ) : (
//             <p>Select an amount to see bank details.</p>
//           )}
//         </div>
//       </div>
//       <div className="card counseling-card">
//         <h2>Free Counseling</h2>
//         {/* <img
//           src="https://via.placeholder.com/300x150?text=Free+Counseling"
//           alt="Free Counseling"
//           className="counseling-image"
//         /> */}
//         <iframe
//           width="560"
//           height="315"
//           src="https://www.youtube.com/embed/b0ySkJRnYJ4?si=GSjjRgg68UIcZnez"
//           title="YouTube video player"
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           referrerpolicy="strict-origin-when-cross-origin"
//           allowfullscreen
//         ></iframe>
//         <p>Get free counseling from our financial experts.</p>
//         <button className="counseling-button">Get Counseling</button>
//       </div>
//     </div>
//   );
// };

// export default Service;

import React, { useState } from "react";
import "./Service.css";

const bankDetails = {
  "10,000": [
    {
      name: "HDFC Bank",
      interestRate: "5%",
      duration: "5 years",
      eligibility: "Government Staff, College Students",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76083591,width-400,resizemode-4/76083591.jpg",
    },
    {
      name: "Canara Bank",
      interestRate: "4.5%",
      duration: "3 years",
      eligibility: "Salaried Individuals, Pensioners",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TUmsoqQdEG-x2_jZwLwyLh1yxhqNhg4F8Q&s",
    },
  ],
  "1,00,000": [
    {
      name: "HDFC Bank",
      interestRate: "6%",
      duration: "5 years",
      eligibility: "Government Staff, College Students",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76083591,width-400,resizemode-4/76083591.jpg",
    },
    {
      name: "Canara Bank",
      interestRate: "5.5%",
      duration: "3 years",
      eligibility: "Salaried Individuals, Pensioners",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TUmsoqQdEG-x2_jZwLwyLh1yxhqNhg4F8Q&s",
    },
  ],

  "2,00,000": [
    {
      name: "HDFC Bank",
      interestRate: "6%",
      duration: "5 years",
      eligibility: "Government Staff, College Students",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76083591,width-400,resizemode-4/76083591.jpg",
    },
    {
      name: "Canara Bank",
      interestRate: "5.5%",
      duration: "3 years",
      eligibility: "Salaried Individuals, Pensioners",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TUmsoqQdEG-x2_jZwLwyLh1yxhqNhg4F8Q&s",
    },
  ],

  "3,00,000": [
    {
      name: "HDFC Bank",
      interestRate: "6%",
      duration: "5 years",
      eligibility: "Government Staff, College Students",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76083591,width-400,resizemode-4/76083591.jpg",
    },
    {
      name: "Canara Bank",
      interestRate: "5.5%",
      duration: "3 years",
      eligibility: "Salaried Individuals, Pensioners",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TUmsoqQdEG-x2_jZwLwyLh1yxhqNhg4F8Q&s",
    },
  ],

  "4,00,000": [
    {
      name: "HDFC Bank",
      interestRate: "6%",
      duration: "5 years",
      eligibility: "Government Staff, College Students",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76083591,width-400,resizemode-4/76083591.jpg",
    },
    {
      name: "Canara Bank",
      interestRate: "5.5%",
      duration: "3 years",
      eligibility: "Salaried Individuals, Pensioners",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TUmsoqQdEG-x2_jZwLwyLh1yxhqNhg4F8Q&s",
    },
  ],

  "5,00,000": [
    {
      name: "HDFC Bank",
      interestRate: "6%",
      duration: "5 years",
      eligibility: "Government Staff, College Students",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76083591,width-400,resizemode-4/76083591.jpg",
    },
    {
      name: "Canara Bank",
      interestRate: "5.5%",
      duration: "3 years",
      eligibility: "Salaried Individuals, Pensioners",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TUmsoqQdEG-x2_jZwLwyLh1yxhqNhg4F8Q&s",
    },
  ],

  "6,00,000": [
    {
      name: "HDFC Bank",
      interestRate: "6%",
      duration: "5 years",
      eligibility: "Government Staff, College Students",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76083591,width-400,resizemode-4/76083591.jpg",
    },
    {
      name: "Canara Bank",
      interestRate: "5.5%",
      duration: "3 years",
      eligibility: "Salaried Individuals, Pensioners",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TUmsoqQdEG-x2_jZwLwyLh1yxhqNhg4F8Q&s",
    },
  ],

  "7,00,000": [
    {
      name: "HDFC Bank",
      interestRate: "6%",
      duration: "5 years",
      eligibility: "Government Staff, College Students",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76083591,width-400,resizemode-4/76083591.jpg",
    },
    {
      name: "Canara Bank",
      interestRate: "5.5%",
      duration: "3 years",
      eligibility: "Salaried Individuals, Pensioners",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TUmsoqQdEG-x2_jZwLwyLh1yxhqNhg4F8Q&s",
    },
  ],

  "8,00,000": [
    {
      name: "HDFC Bank",
      interestRate: "6%",
      duration: "5 years",
      eligibility: "Government Staff, College Students",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76083591,width-400,resizemode-4/76083591.jpg",
    },
    {
      name: "Canara Bank",
      interestRate: "5.5%",
      duration: "3 years",
      eligibility: "Salaried Individuals, Pensioners",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TUmsoqQdEG-x2_jZwLwyLh1yxhqNhg4F8Q&s",
    },
  ],

  "20,000": [
    {
      name: "HDFC Bank",
      interestRate: "6%",
      duration: "5 years",
      eligibility: "Government Staff, College Students",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76083591,width-400,resizemode-4/76083591.jpg",
    },
    {
      name: "Canara Bank",
      interestRate: "5.5%",
      duration: "3 years",
      eligibility: "Salaried Individuals, Pensioners",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TUmsoqQdEG-x2_jZwLwyLh1yxhqNhg4F8Q&s",
    },
  ],

  "9,00,000": [
    {
      name: "HDFC Bank",
      interestRate: "6%",
      duration: "5 years",
      eligibility: "Government Staff, College Students",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76083591,width-400,resizemode-4/76083591.jpg",
    },
    {
      name: "Canara Bank",
      interestRate: "5.5%",
      duration: "3 years",
      eligibility: "Salaried Individuals, Pensioners",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TUmsoqQdEG-x2_jZwLwyLh1yxhqNhg4F8Q&s",
    },
  ],

  "10,00,000": [
    {
      name: "HDFC Bank",
      interestRate: "6%",
      duration: "5 years",
      eligibility: "Government Staff, College Students",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-76083591,width-400,resizemode-4/76083591.jpg",
    },
    {
      name: "Canara Bank",
      interestRate: "5.5%",
      duration: "3 years",
      eligibility: "Salaried Individuals, Pensioners",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TUmsoqQdEG-x2_jZwLwyLh1yxhqNhg4F8Q&s",
    },
  ],
};

const Service = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [bankInfo, setBankInfo] = useState([]);

  const handleAmountChange = (e) => {
    const amount = e.target.value;
    setSelectedAmount(amount);
    setBankInfo(bankDetails[amount] || []);
  };

  return (
    <div className="services-container">
      <div className="card">
        <h2>
          Select an amount to view the available bank options, including
          interest rates and eligibility criteria.
        </h2>
        <select value={selectedAmount} onChange={handleAmountChange}>
          <option value="">Select an amount</option>
          <option value="10,000">10,000</option>
          <option value="20,000">20,000</option>
          <option value="30,000">30,000</option>
          <option value="40,000">40,000</option>
          <option value="50,000">50,000</option>
          <option value="60,000">60,000</option>
          <option value="70,000">70,000</option>
          <option value="80,000">80,000</option>
          <option value="90,000">90,000</option>
          <option value="1,00,000">1,00,000</option>
          <option value="1,25,000">1,25,000</option>
          <option value="1,50,000">1,50,000</option>
          <option value="1,75,000">1,75,000</option>
          <option value="2,00,000">2,00,000</option>
          <option value="2,25,000">2,25,000</option>
          <option value="2,50,000">2,25,000</option>
          <option value="2,75,000">2,25,000</option>
          <option value="3,00,000">3,00,000</option>
          <option value="3,25,000">3,25,000</option>
          <option value="3,50,000">3,50,000</option>
          <option value="3,75,000">3,75,000</option>
          <option value="4,00,000">4,00,000</option>
          <option value="4,25,000">4,25,000</option>
          <option value="4,50,000">4,50,000</option>
          <option value="4,75,000">4,75,000</option>
          <option value="5,00,000">5,00,000</option>
          <option value="6,00,000">6,00,000</option>
          <option value="7,00,000">7,00,000</option>
          <option value="8,00,000">8,00,000</option>
          <option value="9,00,000">9,00,000</option>
          <option value="10,00,000">10,00,000</option>

          {/* Add more options as needed */}
        </select>
        <div className="bank-details">
          {bankInfo.length > 0 ? (
            bankInfo.map((bank, index) => (
              <div key={index} className="bank-card">
                <img
                  src={bank.imageUrl}
                  alt={bank.name}
                  className="bank-image"
                />
                <h3>{bank.name}</h3>
                <p>Interest Rate: {bank.interestRate}</p>
                <p>Duration: {bank.duration}</p>
                <p>Eligibility: {bank.eligibility}</p>
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <div className="card-counseling-card" style={{ boxSizing: "500px" }}>
        <h2>
          {" "}
          Start-up One Free Counseling Session from Our Financial Experts
        </h2>

        <p>Get free counseling from our financial experts.</p>
        <button className="counseling-button">Get Counseling</button>
      </div>
    </div>
  );
};

export default Service;
