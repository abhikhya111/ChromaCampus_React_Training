import React from "react";
import {MDBCard, MDBCardBody, MDBCardHeader, MDBCardText} from "mdbreact";

export const JobList = ({jobList}) => {
    let amt = 0;
    let count = 0;
    let row = 0;

    const arrayBlock = (jobList, x) => {
        const array = jobList.slice();
        const blocks = [];
        while (array.length) blocks.push(array.splice(0, x));
        return blocks;
    };

    if(jobList.length >= 3){row = 3}else{row = jobList.length}

    const countAmount = () => {
        count = amt++;
    };

    return (
        arrayBlock([...Array(jobList.length).keys()], row).map((row, i) => (
            <div key={i} className="row justify-content-center mt-5">
                {row.map((value, i) => (
                    <div key={i} className="col-3">
                        {countAmount()}
                        <MDBCard>
                            <MDBCardHeader>
                                <MDBCardText>{jobList[count].name}</MDBCardText>
                            </MDBCardHeader>
                            <MDBCardBody>
                                <div className="float-start">Salary: {jobList[count].salary}</div>
                                <div className="float-start">Description: {jobList[count].description}</div>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                ))}
            </div>
        ))
    )
}