import React, {Component} from 'react';
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";


import { bugs, website, server, products, queries, refunds } from "variables/general.js";
// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart
// } from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";





  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  // const db = firebaseApp.firestore();

export default function DashBoard() {

  const useStyles = makeStyles(styles);
  const classes = useStyles();
      return(
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="primary">
                  <p>Warehouse Quick Task Buttons</p>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={4} md={4}>
                      <Button color="primary">
                        + NEW PURCHASE
                      </Button>
                    </GridItem>
                    <GridItem xs={12} sm={4} md={4}>
                      <Button color="primary">
                        + NEW PURCHASE
                      </Button>
                    </GridItem>
                    <GridItem xs={12} sm={4} md={4}>
                      <Button color="primary">
                        + NEW PURCHASE
                      </Button>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="primary" stats icon>
                  <CardIcon color="primary">
                    <Store />
                  </CardIcon>
                  <p className={classes.cardCategory} style={{color: "black"}}>
                    Revenue
                  </p>
                  <h3 className={classes.cardTitle} style={{color: "black"}}>₹ 40,000</h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <DateRange />
                    In the last 6 hours
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="primary" stats icon>
                  <CardIcon color="primary">
                    <Store />
                  </CardIcon>
                  <p className={classes.cardCategory} style={{color: "black"}}>
                    Customers Served
                  </p>
                  <h3 className={classes.cardTitle} style={{color: "black"}}>1254</h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <DateRange />
                    In the last 6 hours
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="primary" stats icon>
                  <CardIcon color="primary">
                    <Store />
                  </CardIcon>
                  <p className={classes.cardCategory} style={{color: "black"}}>
                    Products Sold
                  </p>
                  <h3 className={classes.cardTitle} style={{color: "black"}}>3240</h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <DateRange />
                    In the last 6 hours
                  </div>
                </CardFooter>
              </Card>

            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="primary" stats icon>
                  <CardIcon color="primary">
                    <Store />
                  </CardIcon>
                  <p className={classes.cardCategory} style={{color: "black"}}>
                    Orders Completed
                  </p>
                  <h3 className={classes.cardTitle} style={{color: "black"}}>100</h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <DateRange />
                    In the last 6 hours
                  </div>
                </CardFooter>
              </Card>

            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <CardHeader color="primary">
                  {/*
                    <ChartistGraph
                    className="ct-chart"
                    data={dailySalesChart.data}
                    type="Line"
                    options={dailySalesChart.options}
                    listener={dailySalesChart.animation}
                  />*/}
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>Daily Sales</h4>
                  <p className={classes.cardCategory}>
                    <span className={classes.primaryText}>
                      <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                    </span>{" "}
                    increase in today sales.
                  </p>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> Live Updating from cloud
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <CardHeader color="primary">
                  {/*<ChartistGraph
                    className="ct-chart"
                    data={dailySalesChart.data}
                    type="Line"
                    options={dailySalesChart.options}
                    listener={dailySalesChart.animation}
                  />*/}
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>New Customers</h4>
                  <p className={classes.cardCategory}>
                    <span className={classes.primaryText}>
                      <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                    </span>{" "}
                    increase in today sales.
                  </p>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> Live Updating from cloud
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <CardHeader color="primary">
                  {/*<ChartistGraph
                    className="ct-chart"
                    data={dailySalesChart.data}
                    type="Line"
                    options={dailySalesChart.options}
                    listener={dailySalesChart.animation}
                  />*/}
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>New Dealers</h4>
                  <p className={classes.cardCategory}>
                    <span className={classes.primaryText}>
                      <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                    </span>{" "}
                    increase in today sales.
                  </p>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> Live Updating from cloud
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomTabs
                title="Tasks:"
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Products",
                    tabIcon: Cloud,
                    tabContent: (
                      <Tasks
                        checkedIndexes={[0, 3]}
                        tasksIndexes={[0, 1, 2, 3]}
                        tasks={bugs}
                      />
                    )
                  },
                  {
                    tabName: "Queries",
                    tabIcon: Cloud,
                    tabContent: (
                      <Tasks
                        checkedIndexes={[0]}
                        tasksIndexes={[0, 1]}
                        tasks={website}
                      />
                    )
                  },
                  {
                    tabName: "Refunds",
                    tabIcon: Cloud,
                    tabContent: (
                      <Tasks
                        checkedIndexes={[1]}
                        tasksIndexes={[0, 1, 2]}
                        tasks={server}
                      />
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                  <p className={classes.cardCategoryWhite}>
                    List of Employees after May 2019
                  </p>
                </CardHeader>
                <CardBody>
                  <Table
                    tableHeaderColor="primary"
                    tableHead={["ID", "Name", "Salary", "Residence"]}
                    tableData={[
                      ["1", "Employee 1", "₹ 20,000", "Boisar"],
                      ["2", "Employee 2", "₹ 20,000", "Boisar"],
                      ["3", "Employee 3", "₹ 20,000", "Boisar"],
                      ["4", "Employee 4", "₹ 20,000", "Boisar"]
                    ]}
                  />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      );
}
  // The constructor intializes the object values to some initial
  // state
  // constructor() {
  //   super();
  //   this.state = {
  //     shops: 10,
  //   };
  // }


  // componentDidMount is a lifecycle method of {Component} and called only once
  // only called after dom is rendered
  // This is a great place for realtime data and once we set up datatime listeners
  // It allows us to set an initial set of data



    // create a root reference to my realtime database
    // const rootRef = firebase.database().ref().child('books');
    //
    // // reference for the shops
    // const masterRef = rootRef.child('author');
    //
    //
    // // the on method allows us to synchronise data
    // // Everytime the child: (shops) changes, the snap method provides us a New
    // // set of data
    // masterRef.on('value', snap => {
    //   this.setState({
    //     shops: snap.value(),
    //   });
    // });
  //
  //   db.collection("users").doc("one").set({
  //   first: "Ada",
  //   last: "Lovelace"
  // })
  // .then(function(docRef) {
  //     console.log("Document  with ID: ", docRef.id);
  // })
  // .catch(function(error) {
  //     console.error("Error adding document: ", error);
  // });
