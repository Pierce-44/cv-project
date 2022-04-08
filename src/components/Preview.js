/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React, { Component } from 'react';
import '../styles/Preview.css';

class Preview extends Component {
  render() {
    return (
      <div className="previewContainer">
        <div className="previewHeader">
          <div className="userName">
            <p>{this.props.firstName}</p>
            <p>{this.props.lastName}</p>
          </div>
          <p className="currentJob">{this.props.currentJob}</p>
        </div>
        <div className="previewMainBody">
          <div className="leftContainer">
            <p className="personalInfoTitle">Personal Statement</p>
            <p className="personalDescription">
              {this.props.personalDescription}
            </p>
            <div>
              <p className="personalInfoTitle" id="experienceTitle">
                Experience
              </p>
              {this.props.jobTitleList.map((task) => {
                return (
                  <div key={task.id} className="experienceContainer">
                    <div className="leftExperience">
                      <p className="fromDates">{task.from}</p>
                    </div>
                    <div className="rightExperience">
                      <p className="titleName">{task.titleName}</p>
                      <p>{task.companyName}</p>
                      <p className="jobDescription">{task.jobDescription}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <p className="personalInfoTitle" id="experienceTitle">
                Education
              </p>
              {this.props.educationList.map((task) => {
                return (
                  <div key={task.id} className="experienceContainer">
                    <div className="leftExperience">
                      <p className="fromDates">{task.from}</p>
                    </div>
                    <div className="rightExperience">
                      <p className="titleName">{task.certification}</p>
                      <p>{task.location}</p>
                      <p className="jobDescription">
                        {task.educationDescription}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rightContainer">
            <p className="personalInfoTitle">Personal Information</p>
            <p className="miniTitle">Address:</p>
            <p className="personalInfoTag">{this.props.currentAddress}</p>
            <p className="miniTitle">Phone Number:</p>
            <p className="personalInfoTag">{this.props.contactNumber}</p>
            <p className="miniTitle">Email:</p>
            <p className="personalInfoTag">{this.props.email}</p>
          </div>
        </div>
      </div>
    );
  }
}

// const Preview = (props) => {
//   const {
//     firstName,
//     lastName,
//     personalDescription,
//     currentJob,
//     currentAddress,
//     contactNumber,
//     email,
//     jobTitleList,
//     educationList,
//     photo,
//   } = props;

//   return (
//     <div className="previewContainer">
//       {/* <div className="pdfButton">
//         <p>Print to PDF</p>
//       </div> */}
//       <div className="previewHeader">
//         <div className="userName">
//           <p>{firstName}</p>
//           <p>{lastName}</p>
//         </div>
//         <p className="currentJob">{currentJob}</p>
//       </div>
//       <div className="previewMainBody">
//         <div className="leftContainer">
//           <p className="personalInfoTitle">Personal Statement</p>
//           <p className="personalDescription">{personalDescription}</p>
//           <div>
//             <p className="personalInfoTitle" id="experienceTitle">
//               Experience
//             </p>
//             {jobTitleList.map((task) => {
//               return (
//                 <div key={task.id} className="experienceContainer">
//                   <div className="leftExperience">
//                     <p className="fromDates">{task.from}</p>
//                   </div>
//                   <div className="rightExperience">
//                     <p className="titleName">{task.titleName}</p>
//                     <p>{task.companyName}</p>
//                     <p className="jobDescription">{task.jobDescription}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div>
//             <p className="personalInfoTitle" id="experienceTitle">
//               Education
//             </p>
//             {educationList.map((task) => {
//               return (
//                 <div key={task.id} className="experienceContainer">
//                   <div className="leftExperience">
//                     <p className="fromDates">{task.from}</p>
//                   </div>
//                   <div className="rightExperience">
//                     <p className="titleName">{task.certification}</p>
//                     <p>{task.location}</p>
//                     <p className="jobDescription">
//                       {task.educationDescription}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <div className="rightContainer">
//           <img src={photo} alt="" />
//           <p className="personalInfoTitle">Personal Information</p>
//           <p className="miniTitle">Address:</p>
//           <p className="personalInfoTag">{currentAddress}</p>
//           <p className="miniTitle">Phone Number:</p>
//           <p className="personalInfoTag">{contactNumber}</p>
//           <p className="miniTitle">Email:</p>
//           <p className="personalInfoTag">{email}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Preview;
