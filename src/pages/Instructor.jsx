// import React from "react";
// import "./Instructor.css";

// const teamMembers = [
//   {
//     name: "Sara Doe",b
//     role: "CEO",
//     imageUrl:
//       "https://images.pexels.com/photos/8528741/pexels-photo-8528741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     bio: "Sara is the CEO with over years of experience in the industry.",
//   },
//   {
//     name: "Jane Smith",
//     role: "CTO",
//     imageUrl:
//       "https://images.pexels.com/photos/10375970/pexels-photo-10375970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     bio: "Jane is the CTO, leading our tech innovations.",
//   },
//   {
//     name: "Mike Johnson",
//     role: "CFO",
//     imageUrl:
//       "https://images.pexels.com/photos/11295327/pexels-photo-11295327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     bio: "Mike is the CFO, managing our financial health.",
//   },
//   {
//     name: "Alice Brown",
//     role: "Marketing Head",
//     imageUrl:
//       "https://images.pexels.com/photos/1231234/pexels-photo-1231234.jpeg",
//     bio: "Alice heads our marketing team with creative strategies.",
//   },
//   {
//     name: "David Green",
//     role: "Lead Developer",
//     imageUrl:
//       "https://images.pexels.com/photos/2345678/pexels-photo-2345678.jpeg",
//     bio: "David is our lead developer with expertise in React.",
//   },
//   {
//     name: "Emily White",
//     role: "UX Designer",
//     imageUrl:
//       "https://images.pexels.com/photos/3456789/pexels-photo-3456789.jpeg",
//     bio: "Emily designs intuitive user experiences.",
//   },
//   {
//     name: "John Black",
//     role: "Data Scientist",
//     imageUrl:
//       "https://images.pexels.com/photos/4567890/pexels-photo-4567890.jpeg",
//     bio: "John analyzes data to drive our decisions.",
//   },
//   {
//     name: "Jessica Blue",
//     role: "Product Manager",
//     imageUrl:
//       "https://images.pexels.com/photos/5678901/pexels-photo-5678901.jpeg",
//     bio: "Jessica manages our product lifecycle efficiently.",
//   },
//   {
//     name: "Matthew Gray",
//     role: "Customer Support Lead",
//     imageUrl:
//       "https://images.pexels.com/photos/6789012/pexels-photo-6789012.jpeg",
//     bio: "Matthew ensures our customers are always satisfied.",
//   },
//   {
//     name: "Olivia Purple",
//     role: "HR Manager",
//     imageUrl:
//       "https://images.pexels.com/photos/7890123/pexels-photo-7890123.jpeg",
//     bio: "Olivia manages our human resources with care.",
//   },
// ];

// const Team = () => {
//   return (
//     <div className="team-container">
//       <h1>Our Instructors</h1>
//       <div className="team-grid">
//         {teamMembers.map((member, index) => (
//           <div key={index} className="team-card">
//             <img
//               src={member.imageUrl}
//               alt={member.name}
//               className="team-image"
//             />
//             <h3>{member.name}</h3>
//             <p className="team-role">{member.role}</p>
//             <p className="team-bio">{member.bio}</p>
//             <button className="demo-button">Demo Session</button>
//             <button className="hire-button">Hire</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Team;

import React from "react";
import "./Instructor.css";

const teamMembers = [
  {
    name: "Sara Doe",
    role: "Business Strategy Consultant",
    imageUrl:
      "https://images.pexels.com/photos/5125251/pexels-photo-5125251.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Sara develops long-term business strategies to achieve company goals. She specializes in market analysis, competitive positioning, and business growth strategies. As an instructor, she helps businesses in understanding market dynamics and crafting strategies to stay ahead.",
  },
  {
    name: "Jane Smith",
    role: "Financial Advisor",
    imageUrl:
      "https://images.pexels.com/photos/5999826/pexels-photo-5999826.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    bio: "Jane provides advice on managing finances, investments, and planning for the future. She specializes in investment strategies, retirement planning, and financial risk management. As an instructor, she offers courses on financial planning, budgeting, and investment techniques.",
  },
  {
    name: "Mike Johnson",
    role: "Marketing Consultant",
    imageUrl:
      "https://images.pexels.com/photos/11295327/pexels-photo-11295327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Mike assists businesses in developing marketing strategies to attract and retain customers. He specializes in digital marketing, brand management, and customer segmentation. As an instructor, he teaches effective marketing tactics, social media management, and branding.",
  },
  {
    name: "Emily Davis",
    role: "Operations Consultant",
    imageUrl:
      "https://images.pexels.com/photos/7578704/pexels-photo-7578704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Emily optimizes business processes to improve efficiency and reduce costs. She specializes in supply chain management, process optimization, and lean manufacturing. As an instructor, she provides training on operational efficiency, quality management, and process improvement.",
  },
  {
    name: "John Lee",
    role: "Human Resources (HR) Consultant",
    imageUrl:
      "https://images.pexels.com/photos/4128401/pexels-photo-4128401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "John advises on employee management, recruitment, and organizational development. He specializes in talent acquisition, employee relations, and performance management. As an instructor, he offers workshops on leadership, team building, and HR management practices.",
  },
  {
    name: "Alice Brown",
    role: "IT Consultant",
    imageUrl:
      "https://images.pexels.com/photos/1181716/pexels-photo-1181716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Alice provides advice on technology solutions to enhance business operations. She specializes in software implementation, cybersecurity, and IT infrastructure. As an instructor, she delivers training on the latest technology trends, software usage, and IT project management.",
  },
  {
    name: "Robert Wilson",
    role: "Legal Advisor",
    imageUrl:
      "https://images.pexels.com/photos/4348407/pexels-photo-4348407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Robert offers legal advice on business-related issues such as contracts, compliance, and disputes. He specializes in corporate law, intellectual property, and employment law. As an instructor, he teaches courses on business law, contract negotiation, and legal risk management.",
  },
  {
    name: "Lisa White",
    role: "Sales Trainer",
    imageUrl:
      "https://images.pexels.com/photos/763455/pexels-photo-763455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Lisa helps businesses enhance their sales strategies and improve conversion rates. She specializes in sales techniques, customer relationship management (CRM), and negotiation skills. As an instructor, she provides training on effective sales tactics, communication skills, and customer retention strategies.",
  },
  {
    name: "David Green",
    role: "Leadership Coach",
    imageUrl:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "David coaches business leaders to improve their leadership and management skills. He specializes in executive coaching, team leadership, and decision-making. As an instructor, he conducts leadership workshops focusing on personal development, decision-making, and team dynamics.",
  },
  {
    name: "Sophia Black",
    role: "Startup Advisor",
    imageUrl:
      "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Sophia guides entrepreneurs through the challenges of starting and scaling a new business. She specializes in business planning, fundraising, and product development. As an instructor, she offers mentorship and training on startup essentials, pitching to investors, and scaling a business.",
  },
];

const Instructor = () => {
  return (
    <div>
      <button
        className="back-to-home-button"
        onClick={() => (window.location.href = "/home")}
      >
        Back to Home
      </button>
      <br></br>
      <div className="team-container">
        <h1>Instructors</h1>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="team-image"
              />
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
              <button className="demo-button">Demo Session</button>
              <button className="hire-button">Hire</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructor;
