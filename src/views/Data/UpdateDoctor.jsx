import React from "react";

import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";



export default function UpdateDoctor() {
    return (
        <UpdateDoctorHome />
    );
}

function UpdateDoctorHome() {
    return (
        <>
            <Card>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <Button color="primary">
                                Hello
                        </Button>
                        </GridItem>
                    </GridContainer>
                </CardBody>
            </Card>
        </>
    );
}

