import React from "react";

import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";



export default function EditKit() {
    return (
        <EditKitHome />
    );
}

function EditKitHome() {
    return (
        <>
            <Card>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <h2>The kit shows the data of the patient and the medicines they use frequently</h2>
                        </GridItem>
                    </GridContainer>
                </CardBody>
            </Card>
        </>
    );
}

