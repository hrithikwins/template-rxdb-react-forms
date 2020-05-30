import React, {Component} from "react";
import {useHistory, Route, Switch} from "react-router-dom";
import Backend from "backend/Data/Backend.js";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import EditProduct from 'views/Data/EditProduct.js';

// images
import avatar from "assets/img/faces/medical_store.png";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};


// program start

const useStyles = makeStyles(styles);

export default function Data() {
  const classes = useStyles;
  let history = useHistory();

  function DataToHome() {
    history.push("/home/data/edit-product");
  }
  return (
    <div>
      <Switch>
      <Route exact path="/home/data" component={DataHome}></Route>
      <Route path="/home/data/edit-product" component={EditProduct}></Route>
      <Route path="/home/data/back" component={Backend}></Route>

    </Switch>
  </div>);
}




function DataHome() {
  const classes = useStyles;
  let history = useHistory();

  function DataToHome() {
    history.push("/home/data/edit-product");
  }
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card style={{background: '#ffffffa0'}}>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>DATA MANAGEMENT</h4>
            <p className={classes.cardCategoryWhite}>
              <u><strong>ADD</strong> button</u> to ADD new details and view information at a glance<br/>
            <u><strong>CHANGE</strong> button</u> to VIEW EDIT and DELETE the data from the category<br/>
            </p>
          </CardHeader>
          <CardBody>
            <p>
              Select the appropriate category task from below..
            </p>

            <GridContainer >
              <GridItem xs={12} sm={12} md={3}>
                <Card>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <span>
                          <h3>Items</h3>
                        </span>
                        0 in total
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter>
                    <GridContainer>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="success" onClick={DataToHome}>
                          ADD
                        </Button>
                      </GridItem>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="warning" onClick={DataToHome}>
                          CHANGE
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardFooter>
                </Card>
              </GridItem>

              <GridItem xs={12} sm={12} md={3}>
                <Card>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <span>
                          <h3>Items</h3>
                        </span>
                        0 in total
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter>
                    <GridContainer>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="success" onClick={DataToHome}>
                          ADD
                        </Button>
                      </GridItem>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="warning" onClick={DataToHome}>
                          CHANGE
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardFooter>
                </Card>
              </GridItem>

              <GridItem xs={12} sm={12} md={3}>
                <Card>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <span>
                          <h3>Items</h3>
                        </span>
                        0 in total
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter>
                    <GridContainer>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="success" onClick={DataToHome}>
                          ADD
                        </Button>
                      </GridItem>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="warning" onClick={DataToHome}>
                          CHANGE
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardFooter>
                </Card>
              </GridItem>

              <GridItem xs={12} sm={12} md={3}>
                <Card>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <span>
                          <h3>Items</h3>
                        </span>
                        0 in total
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter>
                    <GridContainer>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="success" onClick={DataToHome}>
                          ADD
                        </Button>
                      </GridItem>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="warning" onClick={DataToHome}>
                          CHANGE
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardFooter>
                </Card>
              </GridItem>

              <GridItem xs={12} sm={12} md={3}>
                <Card>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <span>
                          <h3>Items</h3>
                        </span>
                        0 in total
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter>
                    <GridContainer>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="success" onClick={DataToHome}>
                          ADD
                        </Button>
                      </GridItem>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="warning" onClick={DataToHome}>
                          CHANGE
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardFooter>
                </Card>
              </GridItem>

              <GridItem xs={12} sm={12} md={3}>
                <Card>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <span>
                          <h3>Items</h3>
                        </span>
                        0 in total
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter>
                    <GridContainer>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="success" onClick={DataToHome}>
                          ADD
                        </Button>
                      </GridItem>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="warning" onClick={DataToHome}>
                          CHANGE
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardFooter>
                </Card>
              </GridItem>

              <GridItem xs={12} sm={12} md={3}>
                <Card>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <span>
                          <h3>Items</h3>
                        </span>
                        0 in total
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter>
                    <GridContainer>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="success" onClick={DataToHome}>
                          ADD
                        </Button>
                      </GridItem>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="warning" onClick={DataToHome}>
                          CHANGE
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardFooter>
                </Card>
              </GridItem>

              <GridItem xs={12} sm={12} md={3}>
                <Card>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <span>
                          <h3>Items</h3>
                        </span>
                        0 in total
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter>
                    <GridContainer>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="success" onClick={DataToHome}>
                          ADD
                        </Button>
                      </GridItem>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="warning" onClick={DataToHome}>
                          CHANGE
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardFooter>
                </Card>
              </GridItem>

              <GridItem xs={12} sm={12} md={3}>
                <Card>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <span>
                          <h3>Items</h3>
                        </span>
                        0 in total
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter>
                    <GridContainer>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="success" onClick={DataToHome}>
                          ADD
                        </Button>
                      </GridItem>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="warning" onClick={DataToHome}>
                          CHANGE
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardFooter>
                </Card>
              </GridItem>

              <GridItem xs={12} sm={12} md={3}>
                <Card>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <span>
                          <h3>Items</h3>
                        </span>
                        0 in total
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter>
                    <GridContainer>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="success" onClick={DataToHome}>
                          ADD
                        </Button>
                      </GridItem>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="warning" onClick={DataToHome}>
                          CHANGE
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardFooter>
                </Card>
              </GridItem>

              <GridItem xs={12} sm={12} md={3}>
                <Card>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <span>
                          <h3>Items</h3>
                        </span>
                        0 in total
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter>
                    <GridContainer>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="success" onClick={DataToHome}>
                          ADD
                        </Button>
                      </GridItem>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="warning" onClick={DataToHome}>
                          CHANGE
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardFooter>
                </Card>
              </GridItem>

              <GridItem xs={12} sm={12} md={3}>
                <Card>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <span>
                          <h3>Items</h3>
                        </span>
                        0 in total
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter>
                    <GridContainer>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="success" onClick={DataToHome}>
                          ADD
                        </Button>
                      </GridItem>
                      <GridItem xs={5} sm={5} md={5}>
                        <Button color="warning" onClick={DataToHome}>
                          CHANGE
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>

        </CardBody>
      </Card>
    </GridItem>
    </GridContainer>
  );
}



function home() {
  return(
    <h2>hello</h2>
  );
}
