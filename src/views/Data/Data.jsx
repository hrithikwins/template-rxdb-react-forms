import React, {Component} from "react";
import {useHistory, Route, Switch} from "react-router-dom";
import Backend from "backend/Data/Backend";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";

import EditCategory  from 'views/Data/EditCategory';
import EditCompany from 'views/Data/EditCompany';
import EditDoctor  from 'views/Data/EditDoctor';
import EditGeneric from 'views/Data/EditGeneric';
import EditKit from 'views/Data/EditKit';
import EditPatient  from 'views/Data/EditPatient';
import EditProduct from 'views/Data/EditProduct';
import EditScheduleDrug from 'views/Data/EditScheduleDrug';
import EditStaff from 'views/Data/EditStaff';
import EditSupplier from 'views/Data/EditSupplier';

import UpdateCategory  from 'views/Data/UpdateCategory';
import UpdateCompany from 'views/Data/UpdateCompany';
import UpdateDoctor  from 'views/Data/UpdateDoctor';
import UpdateGeneric from 'views/Data/UpdateGeneric';
import UpdateKit from 'views/Data/UpdateKit';
import UpdatePatient  from 'views/Data/UpdatePatient';
import UpdateProduct from 'views/Data/UpdateProduct';
import UpdateScheduleDrug from 'views/Data/UpdateScheduleDrug';
import UpdateStaff from 'views/Data/UpdateStaff';
import UpdateSupplier from 'views/Data/UpdateSupplier';

// images

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
        <Route path="/home/data/edit-category" component={EditCategory}></Route>
        <Route path="/home/data/edit-company" component={EditCompany}></Route>
        <Route path="/home/data/edit-doctor" component={EditDoctor}></Route>
        <Route path="/home/data/edit-generic" component={EditGeneric}></Route>
        <Route path="/home/data/edit-kit" component={EditKit}></Route>
        <Route path="/home/data/edit-patient" component={EditPatient}></Route>
        <Route path="/home/data/edit-product" component={EditProduct}></Route>
        <Route path="/home/data/edit-drug" component={EditScheduleDrug}></Route>
        <Route path="/home/data/edit-staff" component={EditStaff}></Route>
        <Route path="/home/data/edit-supplier" component={EditSupplier}></Route>
        <Route path="/home/data/update-category" component={UpdateCategory}></Route>
        <Route path="/home/data/update-company" component={UpdateCompany}></Route>
        <Route path="/home/data/update-doctor" component={UpdateDoctor}></Route>
        <Route path="/home/data/update-generic" component={UpdateGeneric}></Route>
        <Route path="/home/data/update-kit" component={UpdateKit}></Route>
        <Route path="/home/data/update-patient" component={UpdatePatient}></Route>
        <Route path="/home/data/update-product" component={UpdateProduct}></Route>
        <Route path="/home/data/update-drug" component={UpdateScheduleDrug}></Route>
        <Route path="/home/data/update-staff" component={UpdateStaff}></Route>
        <Route path="/home/data/update-supplier" component={UpdateSupplier}></Route>
        <Route path="/home/data/back" component={Backend}></Route>
      </Switch>
    </div>
  );
}




function DataHome() {
  const classes = useStyles;
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
            <GridContainer >

              <CategoryMaster />
              <CompanyMaster />
              <DoctorMaster />
              <GenericMaster />

              {/* <KitMaster /> commented currently */}
              <PatientMaster />
              <ProductMaster />

              <ScheduleDrugMaster />
              <StaffMaster />
              <SupplierMaster />


            </GridContainer>
        </CardBody>
      </Card>
    </GridItem>
    </GridContainer>
  );
}



function ProductMaster() {
  let history = useHistory();

  function LaunchEdit() {
    history.push("/home/data/edit-product");
  }
  function LaunchUpdate() {
    history.push("/home/data/update-product");
  }
  return(
    <GridItem xs={12} sm={12} md={3}>
      <Card>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <span>
                <h3>ITEM MASTER</h3>
              </span>
              0 in total
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
          <GridContainer>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="success" onClick={LaunchEdit}>
                ADD
              </Button>
            </GridItem>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="warning" onClick={LaunchUpdate}>
                CHANGE
              </Button>
            </GridItem>
          </GridContainer>
        </CardFooter>
      </Card>
    </GridItem>
  );
}
function CompanyMaster() {
  let history = useHistory();

  function LaunchEdit() {
    history.push("/home/data/edit-company");
  }
  function LaunchUpdate() {
    history.push("/home/data/update-company");
  }
  return(
    <GridItem xs={12} sm={12} md={3}>
      <Card>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <span>
                <h3>COMPANY MASTER</h3>
              </span>
              0 in total
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
          <GridContainer>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="success" onClick={LaunchEdit}>
                ADD
              </Button>
            </GridItem>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="warning" onClick={LaunchUpdate}>
                CHANGE
              </Button>
            </GridItem>
          </GridContainer>
        </CardFooter>
      </Card>
    </GridItem>
  );
}
function SupplierMaster() {
  let history = useHistory();

  function LaunchEdit() {
    history.push("/home/data/edit-supplier");
  }
  function LaunchUpdate() {
    history.push("/home/data/update-supplier");
  }
  return(
    <GridItem xs={12} sm={12} md={3}>
      <Card>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <span>
                <h3>SUPPLIER MASTER MASTER</h3>
              </span>
              0 in total
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
          <GridContainer>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="success" onClick={LaunchEdit}>
                ADD
              </Button>
            </GridItem>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="warning" onClick={LaunchUpdate}>
                CHANGE
              </Button>
            </GridItem>
          </GridContainer>
        </CardFooter>
      </Card>
    </GridItem>
  );
}
function CategoryMaster() {
  let history = useHistory();

  function LaunchEdit() {
    history.push("/home/data/edit-category");
  }
  function LaunchUpdate() {
    history.push("/home/data/update-category");
  }
  return(
    <GridItem xs={12} sm={12} md={3}>
      <Card>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <span>
                <h3>CATEGORY MASTER</h3>
              </span>
              0 in total
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
          <GridContainer>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="success" onClick={LaunchEdit}>
                ADD
              </Button>
            </GridItem>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="warning" onClick={LaunchUpdate}>
                CHANGE
              </Button>
            </GridItem>
          </GridContainer>
        </CardFooter>
      </Card>
    </GridItem>
  );
}

function DoctorMaster() {
  let history = useHistory();

  function LaunchEdit() {
    history.push("/home/data/edit-doctor");
  }
  function LaunchUpdate() {
    history.push("/home/data/update-doctor");
  }
  return(
    <GridItem xs={12} sm={12} md={3}>
      <Card>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <span>
                <h3>DOCTOR MASTER</h3>
              </span>
              0 in total
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
          <GridContainer>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="success" onClick={LaunchEdit}>
                ADD
              </Button>
            </GridItem>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="warning" onClick={LaunchUpdate}>
                CHANGE
              </Button>
            </GridItem>
          </GridContainer>
        </CardFooter>
      </Card>
    </GridItem>
  );
}
function PatientMaster() {
  let history = useHistory();

  function LaunchEdit() {
    history.push("/home/data/edit-patient");
  }
  function LaunchUpdate() {
    history.push("/home/data/update-patient");
  }
  return(
    <GridItem xs={12} sm={12} md={3}>
      <Card>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <span>
                <h3>PATIENT MASTER</h3>
              </span>
              0 in total
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
          <GridContainer>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="success" onClick={LaunchEdit}>
                ADD
              </Button>
            </GridItem>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="warning" onClick={LaunchUpdate}>
                CHANGE
              </Button>
            </GridItem>
          </GridContainer>
        </CardFooter>
      </Card>
    </GridItem>
  );
}
function GenericMaster() {
  let history = useHistory();

  function LaunchEdit() {
    history.push("/home/data/edit-generic");
  }
  function LaunchUpdate() {
    history.push("/home/data/update-generic");
  }
  return(
    <GridItem xs={12} sm={12} md={3}>
      <Card>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <span>
                <h3>GENERIC MASTER</h3>
              </span>
              0 in total
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
          <GridContainer>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="success" onClick={LaunchEdit}>
                ADD
              </Button>
            </GridItem>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="warning" onClick={LaunchUpdate}>
                CHANGE
              </Button>
            </GridItem>
          </GridContainer>
        </CardFooter>
      </Card>
    </GridItem>
  );
}
function KitMaster() {
  let history = useHistory();

  function LaunchEdit() {
    history.push("/home/data/edit-kit");
  }
  function LaunchUpdate() {
    history.push("/home/data/update-kit");
  }
  return(
    <GridItem xs={12} sm={12} md={3}>
      <Card>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <span>
                <h3>KIT MASTER</h3>
              </span>
              0 in total
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
          <GridContainer>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="success" onClick={LaunchEdit}>
                ADD
              </Button>
            </GridItem>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="warning" onClick={LaunchUpdate}>
                CHANGE
              </Button>
            </GridItem>
          </GridContainer>
        </CardFooter>
      </Card>
    </GridItem>
  );
}

function StaffMaster() {
  let history = useHistory();

  function LaunchEdit() {
    history.push("/home/data/edit-staff");
  }
  function LaunchUpdate() {
    history.push("/home/data/update-staff");
  }
  return(
    <GridItem xs={12} sm={12} md={3}>
      <Card>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <span>
                <h3>STAFF MASTER</h3>
              </span>
              0 in total
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
          <GridContainer>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="success" onClick={LaunchEdit}>
                ADD
              </Button>
            </GridItem>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="warning" onClick={LaunchUpdate}>
                CHANGE
              </Button>
            </GridItem>
          </GridContainer>
        </CardFooter>
      </Card>
    </GridItem>
  );
}
function ScheduleDrugMaster() {
  let history = useHistory();

  function LaunchEdit() {
    history.push("/home/data/edit-schedule-drug");
  }
  function LaunchUpdate() {
    history.push("/home/data/update-schedule-drug");
  }
  return(
    <GridItem xs={12} sm={12} md={3}>
      <Card>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <span>
                <h3>SCHEDULE DRUG MASTER</h3>
              </span>
              0 in total
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
          <GridContainer>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="success" onClick={LaunchEdit}>
                ADD
              </Button>
            </GridItem>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="warning" onClick={LaunchUpdate}>
                CHANGE
              </Button>
            </GridItem>
          </GridContainer>
        </CardFooter>
      </Card>
    </GridItem>
  );
}
function BlankMaster() {
  let history = useHistory();

  function LaunchEdit() {
    history.push("/home/data/edit-product");
  }
  function LaunchUpdate() {
    history.push("/home/data/update-product");
  }
  return(
    <GridItem xs={12} sm={12} md={3}>
      <Card>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <span>
                <h3>BLANK MASTER</h3>
              </span>
              0 in total
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
          <GridContainer>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="success" onClick={LaunchEdit}>
                ADD
              </Button>
            </GridItem>
            <GridItem xs={5} sm={5} md={5}>
              <Button color="warning" onClick={LaunchUpdate}>
                CHANGE
              </Button>
            </GridItem>
          </GridContainer>
        </CardFooter>
      </Card>
    </GridItem>
  );
}
