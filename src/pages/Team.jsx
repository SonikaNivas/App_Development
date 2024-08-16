// import React from "react";
// import "./Team.css";

// const teamMembers = [
//   {
//     name: "Sara Doe",
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
//     name: "Jabob John",
//     role: "MD",
//     imageUrl:
//       "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     bio: "John Smith is the Managing Director, leading the company's strategic vision and operational excellence.",
//   },
//   {
//     name: "Emily Davis",
//     role: "COO",
//     imageUrl:
//       "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     bio: "Emily Davis is the Chief Operating Officer, overseeing daily operations and ensuring business efficiency.",
//   },
//   {
//     name: "Michael Brown",
//     role: "CFO",
//     imageUrl:
//       "https://images.pexels.com/photos/3831641/pexels-photo-3831641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     bio: "Michael Brown is the Chief Financial Officer, managing the company's finances and strategic investments.",
//   },
//   {
//     name: "Anna Taylor",
//     role: "HR Director",
//     imageUrl:
//       "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     bio: "Anna Taylor is the HR Director, focusing on talent acquisition, development, and employee engagement.",
//   },
// ];

// const Team = () => {
//   return (
//     <div className="team-container">
//       <h1>Our Team</h1>
//       <br></br>
//       <br></br>
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
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Team;

import React from "react";
import "./Team.css";

const teamMembers = [
  {
    name: "Sara Doe",
    role: "CEO",
    imageUrl:
      "https://images.pexels.com/photos/8528741/pexels-photo-8528741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Sara is the CEO with over years of experience in the industry.",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    imageUrl:
      "https://images.pexels.com/photos/10375970/pexels-photo-10375970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Jane is the CTO, leading our tech innovations.",
  },
  {
    name: "Mike Johnson",
    role: "CFO",
    imageUrl:
      "https://images.pexels.com/photos/11295327/pexels-photo-11295327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Mike is the CFO, managing our financial health.",
  },
  {
    name: "Jabob John",
    role: "MD",
    imageUrl:
      "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "John Smith is the Managing Director, leading the company's strategic vision and operational excellence.",
  },
  {
    name: "Emily Davis",
    role: "COO",
    imageUrl:
      "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Emily Davis is the Chief Operating Officer, overseeing daily operations and ensuring business efficiency.",
  },
  {
    name: "Michael Brown",
    role: "CFO",
    imageUrl:
      "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Michael Brown is the Chief Financial Officer, managing the company's finances and strategic investments.",
  },
  {
    name: "Anna Taylor",
    role: "HR Director",
    imageUrl:
      "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Anna Taylor is the HR Director, focusing on talent acquisition, development, and employee engagement.",
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <h1>Our Team</h1>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
