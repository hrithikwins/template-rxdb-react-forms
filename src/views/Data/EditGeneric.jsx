import React from "react";

import { TextField } from "@material-ui/core";

import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";



export default function EditGeneric() {
    return (
        <EditGenericHome />
    );
}

function EditGenericHome() {
    return (
        <>
            <Card>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <TextField
                                required
                                label="Generic Name"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Generic Alternative Name"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Drug Class"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Side Effects"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Dosage Information"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Patient Tips"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Drug Interactions"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Alternatives"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="Support Group"
                                variant="outlined"
                            />
                            <TextField
                                required
                                label="FDA Alerts"
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

