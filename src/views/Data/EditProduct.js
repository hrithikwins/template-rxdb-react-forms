import React from 'react';

import {makeStyles} from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
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



export default function EditProduct() {
  return(
    <>
    <ProductFields />
    </>
  );
}


function ProductFields() {
  const [type, setType] = React.useState('Type');

  const changeType = (event) => {
    setType(event.target.value);
  };

const [state, setState] = React.useState({
    inclusive: true,
  });

  const switchTaxes = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return(
    <>
    <Card style={{backgroundColor: "rgba(255,255,255,0.9)"}}>
      <CardBody>
            <Typography variant="h6" color="primary">
              Product Details
            </Typography>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={12} md={10}>
        <GridContainer>
          <GridItem xs={12} sm={4} md={3}>
            <TextField
              variant="filled"
              id="product-code"
              label="Product Code(auto)"
              defaultValue="P001"
              InputProps={{
                readOnly: true,
              }}
              />
          </GridItem>
          <GridItem xs={12} sm={6} md={5}>
            <TextField
              required
              fullWidth
              id="product-description"
              label="Product Description"
              ></TextField>
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
            <TextField
              required
              fullWidth
              id="product-packing"
              label="Packing"
              type="number"
              ></TextField>
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
              <TextField
                disabled
                id="unit-display"
                label="Units"
                InputProps={{
                  disableUnderline: true
                }}
                ></TextField>
          </GridItem>
          <GridItem xs={12} sm={4} md={3}>
            <TextField
              required
              id="alpha-code"
              label=" Alpha Code"
              />
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            required
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select Type"
            value={type}
            onChange={setType}
          >
            <MenuItem value={1}>Type 1</MenuItem>
            <MenuItem value={2}>Type 2</MenuItem>
            <MenuItem value={3}>Type 3</MenuItem>
          </Select>
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
            <TextField
              required
              fullWidth
              id="category-code"
              label="Category Code "
              type="number"
              ></TextField>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
              <TextField
                id="category-name"
                label="Category Name"
                required
                fullWidth
                ></TextField>
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
              <TextField
                id="category-name"
                label="Max-Discount"
                ></TextField>
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
              <TextField
                id="unit-display"
                label="Manufacturer"
                ></TextField>
          </GridItem>
          <GridItem xs={12} sm={4} md={3}>
            <TextField
              required
              id="alpha-code"
              label=" Generic Group"
              />
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
            <TextField
              required
              fullWidth
              id="category-code"
              label="Schedule "
              type="number"
              ></TextField>
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
              <TextField
                id="category-name"
                label="Discount Category"
                required
                fullWidth
                ></TextField>
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
              <TextField

                id="category-name"
                label="Company"
                ></TextField>
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
              <TextField

                id="category-name"
                label="Bill Rate"
                ></TextField>
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
              <TextField

                id="category-name"
                label="Sales Rate"
                ></TextField>
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
              <TextField

                id="category-name"
                label="MRP"
                ></TextField>
          </GridItem>
          <GridItem xs={12} sm={6} md={2}>
            <FormControlLabel
              control={<Switch checked={state.checkedA}
              onChange={switchTaxes}
              name="inclusive"
              color="primary"
             />}
              label="Inclusive of Taxes"
            />
          </GridItem>
          <Divider />

            <GridItem xs={12} sm={6} md={2}>
              <TextField
                name="inclusive"
                color="primary"
                label="Loose Quantity Factor"
                fullWidth
                required
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={2}>
              <TextField
                name="inclusive"
                color="primary"
                label="Our Margin %"
                fullWidth
                required
              />
            </GridItem>

            <GridItem xs={12} sm={6} md={2}>
              <TextField
                name="inclusive"
                color="primary"
                label="Accept Mfg. Date of %"
                fullWidth
                required
              />
            </GridItem>

            <GridItem xs={12} sm={6} md={2}>
              <TextField
                name="inclusive"
                color="primary"
                label="Check Expiry Till"
                fullWidth
                required
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={2}>
              <TextField
                name="inclusive"
                color="primary"
                label="Product Bar code"
                fullWidth
                required
              />
            </GridItem>

            <GridItem xs={12} sm={6} md={2}>
              <TextField
                name="inclusive"
                color="primary"
                label="Units Per packing"
                fullWidth
                required
              />
            </GridItem>

            <GridItem xs={12} sm={6} md={2}>
              <TextField
                name="inclusive"
                color="primary"
                label="Schedule/Non Schedule"
                fullWidth
                required
              />
            </GridItem>

            <GridItem xs={12} sm={6} md={12}>
              <Button color="primary" >
                ADD THIS PRODUCT
              </Button>
            </GridItem>

        </GridContainer>
      </GridItem>

      <GridItem xs={12} sm={12} md={2}>
        <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <h2>hsn</h2>
        </GridItem>
        </GridContainer>
      </GridItem>
    </GridContainer>
      </CardBody>
    </Card>

    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>

      </GridItem>
    </GridContainer>
    </>
  );
}
