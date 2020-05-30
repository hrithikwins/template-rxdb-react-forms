import React from "react";

import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import TextField from "@material-ui/core/TextField";


export default function EditDoctor() {
    return (
        <EditDoctorHome />
    );
}

function EditDoctorHome() {
    return (
        <>
            <Card>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <TextField
                                required
                                label="Code"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Name"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Degree"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Speciality"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Reg Number"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Clinic Name"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Clinic Address"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Phone Number"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="email"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Resi Address"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Remarks"
                                variant="outlined"
                            />
                        </GridItem>
                    </GridContainer>
                </CardBody>
            </Card>
        </>
    );
}

