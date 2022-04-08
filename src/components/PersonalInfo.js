/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import '../styles/PersonalInfo.css';
import uniqid from 'uniqid';
import Preview from './Preview';
import PDFImg from '../images/pdf.png';

class PersonalInfo extends Component {
  constructor() {
    super();

    this.state = {
      count: -1,
      countTwo: -1,
      firstName: '',
      lastName: '',
      currentJob: '',
      currentAddress: '',
      contactNumber: '',
      email: '',
      personalDescription: '',
      workExperience: {
        titleName: '',
        companyName: '',
        from: '',
        jobDescription: '',
        id: uniqid(),
      },
      jobTitleList: [],
      education: {
        certification: '',
        location: '',
        from: '',
        educationDescription: '',
        id: uniqid(),
      },
      educationList: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChangeWorkExp = (e) => {
    const { name, value } = e.target;
    this.setState({
      workExperience: {
        ...this.state.workExperience,
        [name]: value,
      },
    });
  };

  handleChangeEducation = (e) => {
    const { name, value } = e.target;
    this.setState({
      education: {
        ...this.state.education,
        [name]: value,
      },
    });
  };

  onSubmit = () => {
    this.setState({
      jobTitleList: this.state.jobTitleList.concat(this.state.workExperience),

      count: this.state.count + 1,

      workExperience: {
        ...this.state.workExperience,
        id: uniqid(),
      },
    });
  };

  onSubmitEducation = () => {
    this.setState({
      educationList: this.state.educationList.concat(this.state.education),

      countTwo: this.state.countTwo + 1,

      education: {
        ...this.state.education,
        id: uniqid(),
      },
    });
  };

  onRemove = () => {
    const array = [...this.state.jobTitleList]; // make a separate copy of the array
    const index = this.state.count;
    if (index !== -1) {
      array.splice(index);
      this.setState({ jobTitleList: array, count: this.state.count - 1 });
    }
  };

  onRemoveEducation = () => {
    const array = [...this.state.educationList]; // make a separate copy of the array
    const index = this.state.countTwo;
    if (index !== -1) {
      array.splice(index);
      this.setState({
        educationList: array,
        countTwo: this.state.countTwo - 1,
      });
    }
  };

  render() {
    const task = this.state;
    return (
      <div className="personalInfo">
        <h2 className="subTitle">Personal Information</h2>
        <input
          value={task.firstName}
          onChange={this.handleChange}
          className="input"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          value={task.lastName}
          onChange={this.handleChange}
          className="input"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <input
          value={task.currentJob}
          onChange={this.handleChange}
          className="input"
          type="text"
          placeholder="Current Job Role"
          name="currentJob"
        />
        <input
          value={task.currentAddress}
          onChange={this.handleChange}
          className="input"
          type="text"
          placeholder="Current Address"
          name="currentAddress"
        />
        <input
          value={task.contactNumber}
          onChange={this.handleChange}
          className="input"
          type="text"
          placeholder="Contact Number"
          name="contactNumber"
        />
        <input
          value={task.email}
          onChange={this.handleChange}
          className="input"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          value={task.personalDescription}
          onChange={this.handleChange}
          className="textArea"
          placeholder="Personal Description"
          name="personalDescription"
        />
        <h2 className="subTitle">Work Experience</h2>
        <ul className="tagText">
          <li>
            Add multiple job descriptions by clicking the add work experience
            button after you fill out the details for each job.
          </li>
        </ul>

        <input
          value={task.workExperience.titleName}
          onChange={this.handleChangeWorkExp}
          className="input"
          type="text"
          placeholder="Job Title"
          name="titleName"
        />
        <input
          value={task.workExperience.companyName}
          onChange={this.handleChangeWorkExp}
          className="input"
          type="text"
          placeholder="Company Name"
          name="companyName"
        />
        <input
          value={task.workExperience.from}
          onChange={this.handleChangeWorkExp}
          className="input"
          type="text"
          placeholder="2019 - 2020"
          name="from"
        />
        <textarea
          value={task.workExperience.jobDescription}
          onChange={this.handleChangeWorkExp}
          className="textArea"
          placeholder="Job Role Description"
          name="jobDescription"
        />
        <div className="workExpButtonDiv">
          <button className="buttonStyle" type="button" onClick={this.onSubmit}>
            Add Work Experience
          </button>
          <button className="buttonStyle" type="button" onClick={this.onRemove}>
            Remove Previously Added
          </button>
        </div>

        <h2 className="subTitle">Education</h2>
        <ul className="tagText">
          <li>
            Add multiple Educations by clicking the add work experience button
            after you fill out the details for each job.
          </li>
        </ul>
        <input
          value={task.education.certification}
          onChange={this.handleChangeEducation}
          className="input"
          type="text"
          placeholder="Bsc Mechanical Engineering"
          name="certification"
        />
        <input
          value={task.education.location}
          onChange={this.handleChangeEducation}
          className="input"
          type="text"
          placeholder="University of Southampton"
          name="location"
        />
        <input
          value={task.education.from}
          onChange={this.handleChangeEducation}
          className="input"
          type="text"
          placeholder="2017 - 2018"
          name="from"
        />
        <textarea
          value={task.workExperience.educationDescription}
          onChange={this.handleChangeEducation}
          className="textArea"
          placeholder="Education Description"
          name="educationDescription"
        />
        <div className="workExpButtonDiv">
          <button
            className="buttonStyle"
            type="button"
            onClick={this.onSubmitEducation}
          >
            Add Education
          </button>
          <button
            className="buttonStyle"
            type="button"
            onClick={this.onRemoveEducation}
          >
            Remove Previously Added
          </button>
        </div>
        <div>
          <ReactToPrint content={() => this.componentRef}>
            <PrintContextConsumer>
              {({ handlePrint }) => (
                <div
                  className="pdfButton"
                  role="button"
                  onClick={handlePrint}
                  tabIndex="0"
                >
                  <img src={PDFImg} alt="pdf" />
                </div>
              )}
            </PrintContextConsumer>
          </ReactToPrint>
          <Preview
            ref={(el) => (this.componentRef = el)}
            firstName={task.firstName}
            lastName={task.lastName}
            currentJob={task.currentJob}
            currentAddress={task.currentAddress}
            contactNumber={task.contactNumber}
            email={task.email}
            personalDescription={task.personalDescription}
            jobTitleList={task.jobTitleList}
            educationList={task.educationList}
          />
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
