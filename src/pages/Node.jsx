// // Node.jsx
// import React, { useState } from "react";
// import "./Node.css";
// // Mock data (replace with actual data or API calls)
// const states = ["Tamil Nadu", "Andhra Pradesh"];
// const districts = {
//   "Tamil Nadu": ["Coimbatore", "Chennai"],
//   "Andhra Pradesh": ["Hyderabad", "Vijayawada"],
// };
// const areas = {
//   Coimbatore: ["T. Nagar", "Peelamedu"],
//   Chennai: ["Anna Nagar", "Adyar"],
//   Hyderabad: ["Banjara Hills", "Jubilee Hills"],
//   Vijayawada: ["Undavalli", "Krishna Lanka"],
// };
// const businessData = {
//   "T. Nagar": {
//     emerging: [
//       {
//         name: "Tech Startup",
//         profit: "$500,000",
//         startupAmount: "$50,000",
//         yearStarted: 2020,
//         annualIncome: "$2M",
//         goal: "Innovate",
//         tactics: "Leveraging technology",
//         image: "https://via.placeholder.com/150",
//       },
//       {
//         name: "Green Energy Solutions",
//         profit: "$300,000",
//         startupAmount: "$80,000",
//         yearStarted: 2018,
//         annualIncome: "$1.5M",
//         goal: "Sustainable Energy",
//         tactics: "Renewable resources",
//         image: "https://via.placeholder.com/150",
//       },
//     ],
//     loss: [
//       {
//         name: "Retail Shop",
//         loss: "$200,000",
//         annualLoss: "$1M",
//         reason: "Poor location",
//         history: "High competition",
//       },
//     ],
//   },
//   Peelamedu: {
//     emerging: [
//       {
//         name: "Health Tech Innovations",
//         profit: "$400,000",
//         startupAmount: "$60,000",
//         yearStarted: 2019,
//         annualIncome: "$1.8M",
//         goal: "Enhance Healthcare",
//         tactics: "Advanced medical technology",
//         image: "https://via.placeholder.com/150",
//       },
//       {
//         name: "AI Research Lab",
//         profit: "$350,000",
//         startupAmount: "$100,000",
//         yearStarted: 2021,
//         annualIncome: "$2.2M",
//         goal: "AI Development",
//         tactics: "Cutting-edge research",
//         image: "https://via.placeholder.com/150",
//       },
//     ],
//     loss: [
//       {
//         name: "Traditional Bookstore",
//         loss: "$150,000",
//         annualLoss: "$600,000",
//         reason: "Digital transformation",
//         history: "Decline in physical book sales",
//       },
//     ],
//   },
//   "Anna Nagar": {
//     emerging: [
//       {
//         name: "E-commerce Platform",
//         profit: "$600,000",
//         startupAmount: "$70,000",
//         yearStarted: 2020,
//         annualIncome: "$2.5M",
//         goal: "Online Retail Growth",
//         tactics: "Aggressive marketing",
//         image: "https://via.placeholder.com/150",
//       },
//       {
//         name: "Eco-Friendly Packaging",
//         profit: "$250,000",
//         startupAmount: "$40,000",
//         yearStarted: 2017,
//         annualIncome: "$1.2M",
//         goal: "Sustainable Packaging",
//         tactics: "Innovative materials",
//         image: "https://via.placeholder.com/150",
//       },
//     ],
//     loss: [
//       {
//         name: "Fashion Boutique",
//         loss: "$180,000",
//         annualLoss: "$800,000",
//         reason: "Market saturation",
//         history: "High inventory costs",
//       },
//     ],
//   },
//   Adyar: {
//     emerging: [
//       {
//         name: "Fintech Startup",
//         profit: "$700,000",
//         startupAmount: "$90,000",
//         yearStarted: 2021,
//         annualIncome: "$3M",
//         goal: "Financial Services Innovation",
//         tactics: "Tech-driven solutions",
//         image: "https://via.placeholder.com/150",
//       },
//       {
//         name: "Smart Home Solutions",
//         profit: "$450,000",
//         startupAmount: "$75,000",
//         yearStarted: 2019,
//         annualIncome: "$2M",
//         goal: "Home Automation",
//         tactics: "IoT integration",
//         image: "https://via.placeholder.com/150",
//       },
//     ],
//     loss: [
//       {
//         name: "Luxury Restaurant",
//         loss: "$250,000",
//         annualLoss: "$900,000",
//         reason: "Economic downturn",
//         history: "High operational costs",
//       },
//     ],
//   },
//   "Banjara Hills": {
//     emerging: [
//       {
//         name: "Digital Marketing Agency",
//         profit: "$550,000",
//         startupAmount: "$55,000",
//         yearStarted: 2018,
//         annualIncome: "$2.3M",
//         goal: "Marketing Excellence",
//         tactics: "Creative campaigns",
//         image: "https://via.placeholder.com/150",
//       },
//       {
//         name: "Blockchain Solutions",
//         profit: "$320,000",
//         startupAmount: "$85,000",
//         yearStarted: 2020,
//         annualIncome: "$1.8M",
//         goal: "Secure Transactions",
//         tactics: "Blockchain technology",
//         image: "https://via.placeholder.com/150",
//       },
//     ],
//     loss: [
//       {
//         name: "Event Management Company",
//         loss: "$220,000",
//         annualLoss: "$1.1M",
//         reason: "Event cancellations",
//         history: "COVID-19 impact",
//       },
//     ],
//   },
//   "Jubilee Hills": {
//     emerging: [
//       {
//         name: "Fitness Tech",
//         profit: "$500,000",
//         startupAmount: "$70,000",
//         yearStarted: 2021,
//         annualIncome: "$2.1M",
//         goal: "Health Improvement",
//         tactics: "Wearable tech",
//         image: "https://via.placeholder.com/150",
//       },
//       {
//         name: "EduTech Solutions",
//         profit: "$350,000",
//         startupAmount: "$60,000",
//         yearStarted: 2019,
//         annualIncome: "$1.7M",
//         goal: "Education Enhancement",
//         tactics: "Online learning platforms",
//         image: "https://via.placeholder.com/150",
//       },
//     ],
//     loss: [
//       {
//         name: "Home Decor Store",
//         loss: "$170,000",
//         annualLoss: "$700,000",
//         reason: "Decline in consumer spending",
//         history: "Seasonal trends",
//       },
//     ],
//   },
//   Undavalli: {
//     emerging: [
//       {
//         name: "Agritech Innovations",
//         profit: "$350,000",
//         startupAmount: "$60,000",
//         yearStarted: 2021,
//         annualIncome: "$1.8M",
//         goal: "Modernize Agriculture",
//         tactics: "Smart farming solutions",
//         image: "https://via.placeholder.com/150",
//       },
//       {
//         name: "Renewable Energy Co.",
//         profit: "$400,000",
//         startupAmount: "$90,000",
//         yearStarted: 2019,
//         annualIncome: "$2.0M",
//         goal: "Sustainable Energy",
//         tactics: "Solar and wind power",
//         image: "https://via.placeholder.com/150",
//       },
//     ],
//     loss: [
//       {
//         name: "Local Café",
//         loss: "$120,000",
//         annualLoss: "$500,000",
//         reason: "Low foot traffic",
//         history: "Economic downturn",
//       },
//     ],
//   },
//   "Krishna Lanka": {
//     emerging: [
//       {
//         name: "E-commerce Solutions",
//         profit: "$450,000",
//         startupAmount: "$70,000",
//         yearStarted: 2020,
//         annualIncome: "$2.2M",
//         goal: "Online Retail Growth",
//         tactics: "Customer-centric strategies",
//         image: "https://via.placeholder.com/150",
//       },
//       {
//         name: "Healthcare Startup",
//         profit: "$300,000",
//         startupAmount: "$80,000",
//         yearStarted: 2018,
//         annualIncome: "$1.5M",
//         goal: "Health Improvement",
//         tactics: "Innovative healthcare solutions",
//         image: "https://via.placeholder.com/150",
//       },
//     ],
//     loss: [
//       {
//         name: "Traditional Grocery Store",
//         loss: "$180,000",
//         annualLoss: "$700,000",
//         reason: "Increased competition",
//         history: "Shift to online shopping",
//       },
//     ],
//   },
// };

// const Node = () => {
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [selectedArea, setSelectedArea] = useState("");

//   const handleStateChange = (event) => {
//     setSelectedState(event.target.value);
//     setSelectedDistrict("");
//     setSelectedArea("");
//   };

//   const handleDistrictChange = (event) => {
//     setSelectedDistrict(event.target.value);
//     setSelectedArea("");
//   };

//   const handleAreaChange = (event) => {
//     setSelectedArea(event.target.value);
//   };

//   const emergingBusinesses = selectedArea
//     ? businessData[selectedArea]?.emerging || []
//     : [];
//   const lossBusinesses = selectedArea
//     ? businessData[selectedArea]?.loss || []
//     : [];

//   return (
//     <div>
//       <button
//         className="back-to-home-button"
//         onClick={() => (window.location.href = "/home")}
//       >
//         Back to Home
//       </button>
//       <br></br>
//       <br></br>
//       <div>
//         <h1>Emerging Trends in Business</h1>

//         <div>
//           <label>State:</label>
//           <select value={selectedState} onChange={handleStateChange}>
//             <option value="">Select State</option>
//             {states.map((state) => (
//               <option key={state} value={state}>
//                 {state}
//               </option>
//             ))}
//           </select>
//         </div>

//         {selectedState && (
//           <div>
//             <label>District/City:</label>
//             <select value={selectedDistrict} onChange={handleDistrictChange}>
//               <option value="">Select District/City</option>
//               {districts[selectedState].map((district) => (
//                 <option key={district} value={district}>
//                   {district}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

//         {selectedDistrict && (
//           <div>
//             <label>Area:</label>
//             <select value={selectedArea} onChange={handleAreaChange}>
//               <option value="">Select Area</option>
//               {areas[selectedDistrict].map((area) => (
//                 <option key={area} value={area}>
//                   {area}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

//         {selectedArea && (
//           <div>
//             <h2>Emerging Businesses</h2>
//             {emergingBusinesses.length > 0 ? (
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Image</th>
//                     <th>Company Name</th>
//                     <th>Profit</th>
//                     <th>Startup Amount</th>
//                     <th>Year Started</th>
//                     <th>Annual Income</th>
//                     <th>Goal</th>
//                     <th>Tactics</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {emergingBusinesses.map((business, index) => (
//                     <tr key={index}>
//                       <td>
//                         <img
//                           src={business.image}
//                           alt={business.name}
//                           style={{ width: "100px" }}
//                         />
//                       </td>
//                       <td>{business.name}</td>
//                       <td>{business.profit}</td>
//                       <td>{business.startupAmount}</td>
//                       <td>{business.yearStarted}</td>
//                       <td>{business.annualIncome}</td>
//                       <td>{business.goal}</td>
//                       <td>{business.tactics}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             ) : (
//               <p>No emerging businesses found for the selected area.</p>
//             )}

//             <h2>Loss-Making Businesses</h2>
//             {lossBusinesses.length > 0 ? (
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Company Name</th>
//                     <th>Loss</th>
//                     <th>Annual Loss</th>
//                     <th>Reason</th>
//                     <th>History</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {lossBusinesses.map((business, index) => (
//                     <tr key={index}>
//                       <td>{business.name}</td>
//                       <td>{business.loss}</td>
//                       <td>{business.annualLoss}</td>
//                       <td>{business.reason}</td>
//                       <td>{business.history}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             ) : (
//               <p>No loss-making businesses found for the selected area.</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Node;

import React, { useState } from "react";
import "./Node.css";

const states = ["Tamil Nadu", "Andhra Pradesh"];
const districts = {
  "Tamil Nadu": ["Coimbatore", "Chennai"],
  "Andhra Pradesh": ["Hyderabad", "Vijayawada"],
};
const areas = {
  Coimbatore: ["R.S Puram", "Peelamedu"],
  Chennai: ["Anna Nagar", "Adyar"],
  Hyderabad: ["Banjara Hills", "Jubilee Hills"],
  Vijayawada: ["Undavalli", "Krishna Lanka"],
};
const businessData = {
  "R.S Puram": {
    emerging: [
      {
        name: "Tech Startup",
        profit: "$500,000",
        startupAmount: "$50,000",
        yearStarted: 2020,
        annualIncome: "$2M",
        goal: "Innovate",
        tactics: "Leveraging technology",
        image:
          "https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "Green Energy Solutions",
        profit: "$300,000",
        startupAmount: "$80,000",
        yearStarted: 2018,
        annualIncome: "$1.5M",
        goal: "Sustainable Energy",
        tactics: "Renewable resources",
        image:
          "https://images.pexels.com/photos/5624267/pexels-photo-5624267.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
    loss: [
      {
        name: "Retail Shop",
        loss: "$200,000",
        annualLoss: "$1M",
        reason: "Poor location",
        history: "High competition",
      },
    ],
  },
  Peelamedu: {
    emerging: [
      {
        name: "Health Tech Innovations",
        profit: "$400,000",
        startupAmount: "$60,000",
        yearStarted: 2019,
        annualIncome: "$1.8M",
        goal: "Enhance Healthcare",
        tactics: "Advanced medical technology",
        image:
          "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "AI Research Lab",
        profit: "$350,000",
        startupAmount: "$100,000",
        yearStarted: 2021,
        annualIncome: "$2.2M",
        goal: "AI Development",
        tactics: "Cutting-edge research",
        image:
          "https://images.pexels.com/photos/8438993/pexels-photo-8438993.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
    loss: [
      {
        name: "Traditional Bookstore",
        loss: "$150,000",
        annualLoss: "$600,000",
        reason: "Digital transformation",
        history: "Decline in physical book sales",
      },
    ],
  },
  "Anna Nagar": {
    emerging: [
      {
        name: "E-commerce Platform",
        profit: "$600,000",
        startupAmount: "$70,000",
        yearStarted: 2020,
        annualIncome: "$2.5M",
        goal: "Online Retail Growth",
        tactics: "Aggressive marketing",
        image:
          "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "Eco-Friendly Packaging",
        profit: "$250,000",
        startupAmount: "$40,000",
        yearStarted: 2017,
        annualIncome: "$1.2M",
        goal: "Sustainable Packaging",
        tactics: "Innovative materials",
        image:
          "https://images.pexels.com/photos/5691655/pexels-photo-5691655.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
    loss: [
      {
        name: "Fashion Boutique",
        loss: "$180,000",
        annualLoss: "$800,000",
        reason: "Market saturation",
        history: "High inventory costs",
      },
    ],
  },
  Adyar: {
    emerging: [
      {
        name: "Fintech Startup",
        profit: "$700,000",
        startupAmount: "$90,000",
        yearStarted: 2021,
        annualIncome: "$3M",
        goal: "Financial Services Innovation",
        tactics: "Tech-driven solutions",
        image:
          "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "Smart Home Solutions",
        profit: "$450,000",
        startupAmount: "$75,000",
        yearStarted: 2019,
        annualIncome: "$2M",
        goal: "Home Automation",
        tactics: "IoT integration",
        image:
          "https://images.pexels.com/photos/7414049/pexels-photo-7414049.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
    loss: [
      {
        name: "Luxury Restaurant",
        loss: "$250,000",
        annualLoss: "$900,000",
        reason: "Economic downturn",
        history: "High operational costs",
      },
    ],
  },
  "Banjara Hills": {
    emerging: [
      {
        name: "Digital Marketing Agency",
        profit: "$550,000",
        startupAmount: "$55,000",
        yearStarted: 2018,
        annualIncome: "$2.3M",
        goal: "Marketing Excellence",
        tactics: "Creative campaigns",
        image:
          "https://images.pexels.com/photos/5833772/pexels-photo-5833772.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "Blockchain Solutions",
        profit: "$320,000",
        startupAmount: "$85,000",
        yearStarted: 2020,
        annualIncome: "$1.8M",
        goal: "Secure Transactions",
        tactics: "Blockchain technology",
        image:
          "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
    loss: [
      {
        name: "Event Management Company",
        loss: "$220,000",
        annualLoss: "$1.1M",
        reason: "Event cancellations",
        history: "COVID-19 impact",
      },
    ],
  },
  "Jubilee Hills": {
    emerging: [
      {
        name: "Fitness Tech",
        profit: "$500,000",
        startupAmount: "$70,000",
        yearStarted: 2021,
        annualIncome: "$2.1M",
        goal: "Health Improvement",
        tactics: "Wearable tech",
        image:
          "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "EduTech Solutions",
        profit: "$350,000",
        startupAmount: "$60,000",
        yearStarted: 2019,
        annualIncome: "$1.7M",
        goal: "Education Enhancement",
        tactics: "Online learning platforms",
        image:
          "https://images.pexels.com/photos/3760093/pexels-photo-3760093.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
    loss: [
      {
        name: "Home Decor Store",
        loss: "$170,000",
        annualLoss: "$700,000",
        reason: "Decline in consumer spending",
        history: "Seasonal trends",
      },
    ],
  },
  Undavalli: {
    emerging: [
      {
        name: "Agritech Innovations",
        profit: "$350,000",
        startupAmount: "$60,000",
        yearStarted: 2021,
        annualIncome: "$1.8M",
        goal: "Modernize Agriculture",
        tactics: "Smart farming solutions",
        image:
          "https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "Renewable Energy Co.",
        profit: "$400,000",
        startupAmount: "$90,000",
        yearStarted: 2019,
        annualIncome: "$2.0M",
        goal: "Sustainable Energy",
        tactics: "Solar and wind power",
        image:
          "https://images.pexels.com/photos/9800018/pexels-photo-9800018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    loss: [
      {
        name: "Local Café",
        loss: "$120,000",
        annualLoss: "$500,000",
        reason: "Low foot traffic",
        history: "Economic downturn",
      },
    ],
  },
  "Krishna Lanka": {
    emerging: [
      {
        name: "E-commerce Solutions",
        profit: "$450,000",
        startupAmount: "$70,000",
        yearStarted: 2020,
        annualIncome: "$2.2M",
        goal: "Online Retail Growth",
        tactics: "Customer-centric strategies",
        image:
          "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        name: "Healthcare Startup",
        profit: "$300,000",
        startupAmount: "$80,000",
        yearStarted: 2018,
        annualIncome: "$1.5M",
        goal: "Health Improvement",
        tactics: "Innovative healthcare solutions",
        image:
          "https://images.pexels.com/photos/7414284/pexels-photo-7414284.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
    loss: [
      {
        name: "Traditional Grocery Store",
        loss: "$180,000",
        annualLoss: "$700,000",
        reason: "Increased competition",
        history: "Shift to online shopping",
      },
    ],
  },
};

const Node = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict("");
    setSelectedArea("");
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setSelectedArea("");
  };

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };

  const emergingBusinesses = selectedArea
    ? businessData[selectedArea]?.emerging || []
    : [];
  const lossBusinesses = selectedArea
    ? businessData[selectedArea]?.loss || []
    : [];

  return (
    <div className="node-container">
      <button
        className="back-to-home-button"
        onClick={() => (window.location.href = "/home")}
      >
        Back to Home
      </button>
      <br />
      <br />
      <div>
        <h1 className="node-heading">Emerging Trends in Business</h1>

        <div className="node-section">
          <label className="node-label">State:</label>
          <select
            className="node-select"
            value={selectedState}
            onChange={handleStateChange}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {selectedState && (
          <div className="node-section">
            <label className="node-label">District/City:</label>
            <select
              className="node-select"
              value={selectedDistrict}
              onChange={handleDistrictChange}
            >
              <option value="">Select District/City</option>
              {districts[selectedState].map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedDistrict && (
          <div className="node-section">
            <label className="node-label">Area:</label>
            <select
              className="node-select"
              value={selectedArea}
              onChange={handleAreaChange}
            >
              <option value="">Select Area</option>
              {areas[selectedDistrict].map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedArea && (
          <div className="node-section">
            <h2 className="node-subheading">Emerging Businesses</h2>
            {emergingBusinesses.length > 0 ? (
              <table className="node-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Company Name</th>
                    <th>Profit</th>
                    <th>Startup Amount</th>
                    <th>Year Started</th>
                    <th>Annual Income</th>
                    <th>Goal</th>
                    <th>Tactics</th>
                  </tr>
                </thead>
                <tbody>
                  {emergingBusinesses.map((business, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={business.image}
                          alt={business.name}
                          className="node-image"
                        />
                      </td>
                      <td>{business.name}</td>
                      <td>{business.profit}</td>
                      <td>{business.startupAmount}</td>
                      <td>{business.yearStarted}</td>
                      <td>{business.annualIncome}</td>
                      <td>{business.goal}</td>
                      <td>{business.tactics}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="node-paragraph node-no-data">
                No emerging businesses found for the selected area.
              </p>
            )}

            <h2 className="node-subheading">Loss-Making Businesses</h2>
            {lossBusinesses.length > 0 ? (
              <table className="node-table">
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Loss</th>
                    <th>Annual Loss</th>
                    <th>Reason</th>
                    <th>History</th>
                  </tr>
                </thead>
                <tbody>
                  {lossBusinesses.map((business, index) => (
                    <tr key={index}>
                      <td>{business.name}</td>
                      <td>{business.loss}</td>
                      <td>{business.annualLoss}</td>
                      <td>{business.reason}</td>
                      <td>{business.history}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="node-paragraph node-no-data">
                No loss-making businesses found for the selected area.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Node;
