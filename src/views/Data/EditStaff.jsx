import React from "react";

import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import { TextField } from "@material-ui/core";



export default function EditStaff() {
    return (
        <EditStaffHome />
    );
}

function EditStaffHome() {
    return (
        <>
            <Card>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <TextField
                                variant="outlined"
                                label="Staff Code"
                            />
                            <TextField
                                variant="outlined"
                                label="Name"
                            />
                            <TextField
                                variant="outlined"
                                label="Address"
                            />
                            <TextField
                                variant="outlined"
                                label="Phone Number"
                            />
                            <TextField
                                variant="outlined"
                                label="Joining Date"
                            />
                            <TextField
                                variant="outlined"
                                label="Salary"
                            />
                            <TextField
                                variant="outlined"
                                label="email"
                            />
                            <TextField
                                variant="outlined"
                                label="Visiting Days"
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

