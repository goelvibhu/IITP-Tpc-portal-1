import React from "react";
import axios from "axios";

export class StudentAppliedJobs extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    studId: props.match.params.id,
    rawData: [],
    jsonDataForTable: [],
  }}
  componentDidMount() {
    this.getStudentInfo();
    //this.dataToJson();
  }

  getStudentInfo = () => {
    axios
      .get("/student/applied/jobs/" + this.state.studId)
      .then((response) => {
        const data = response.data;
        this.setState({
          rawData: data,
        });
        console.log("Student Job List Received!!");
        console.log(this.state.rawData);
        return null;
      })
      .catch((error) =>
        console.log("Error receiving in Student Job List", error)
      );
  };

  dataToJson = () => {
    const jobsList = this.state.rawData.studentWithAppliedData.appliedJobs;
    let jsonData = [];
    for (let i = 0; i < jobsList.length; i++) {
      let jsonDataObject = {
        SNo: i + 1,
        company: jobsList[i].jobId.companyName,
        title: jobsList[i].jobId.jobTitle,
        classification: jobsList[i].jobId.jobCategory,
        schedule: jobsList[i].jobId.schedule.ppt,
        status: jobsList[i].jobStatus,
      };

      jsonData.push(jsonDataObject);
    }

    this.setState({
      jsonDataForTable: jsonData,
    });
  };

  render() {
    return null;
  }
}
