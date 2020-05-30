import React from "react";

import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";

import { TextField  } from "@material-ui/core";

export default function EditSupplier() {
    return (
        <EditSupplierHome />
    );
}

function EditSupplierHome() {
    return (
        <>
            <Card>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <TextField
                                variant="outlined"
                                label="Code"
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
                                label="Pay to cheque"
                            />
                            <TextField
                                variant="outlined"
                                label="Phone number"
                            />
                            <TextField
                                variant="outlined"
                                label="Fax number"
                            />
                            <TextField
                                variant="outlined"
                                label="Mobile Number"
                            />
                            <TextField
                                variant="outlined"
                                label="Contact Person"
                            />
                            <TextField
                                variant="outlined"
                                label="Visiting Person"
                            />
                            <TextField
                                variant="outlined"
                                label="Credit Days"
                            />
                            <TextField
                                variant="outlined"
                                label="Visit Days"
                            />
                            <TextField
                                variant="outlined"
                                label="S.T. Number"
                            />
                            <TextField
                                variant="outlined"
                                label="C.S.T. Number"
                            />
                            <TextField
                                variant="outlined"
                                label="Class"
                            />
                            <TextField
                                variant="outlined"
                                label="Short Name"
                            />
                            <TextField
                                variant="outlined"
                                label="Email"
                            />
                            <TextField
                                variant="outlined"
                                label="Remarks"
                            />
                            <TextField
                                variant="outlined"
                                label="PAN No."
                            />
                            <TextField
                                variant="outlined"
                                label="State"
                            />
                            <TextField
                                variant="outlined"
                                label="GST IN"
                            />
                            <TextField
                                variant="outlined"
                                label="Drug Licencense Number"
                            />
                            <Button color="primary">
                                ADD
                            </Button>

                        </GridItem>
                    </GridContainer>
                </CardBody>
            </Card>
        </>
    );
}

