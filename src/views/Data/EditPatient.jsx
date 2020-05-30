import React from "react";

import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import { TextField } from "@material-ui/core";


export default function EditPatient() {
    return (
        <EditPatientHome />
    );
}

function EditPatientHome() {
    return (
        <>
            <Card>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <TextField
                                required
                                label="Patient Name"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Phone Number"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Address"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Email"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Category"
                                variant="outlined"
                            />
                            <Button>
                                ADD
                            </Button>

                        </GridItem>
                    </GridContainer>
                </CardBody>
            </Card>
        </>
    );
}

