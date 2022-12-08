import React, { Component, useState } from "react";
import GridLayout from 'react-grid-layout';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { Responsive, WidthProvider } from "react-grid-layout";

// @mui material components
import Card from "@mui/material/Card";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

// NextJS Material Dashboard 2 PRO examples
import DashboardLayout from "/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "/examples/Navbars/DashboardNavbar";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}


ResponsiveGridLayout = WidthProvider(Responsive);




export default class Grid extends Component {
  constructor() {
    super();
    this.state = {
      value: true,
    };
  }

  
  render() {
  var array = [];
  var id = "a"

  //if the remander is 0, x=1, if remainder is 1, x = 4, if remainder is 2, x=8
  // numerator is the number / element of the array of or list of people who have written in --> query all contributors for a gift and put them in an array
  // if(indexOf(array[i]) % 3 == 0) x = 0
  // if(indexOf(array[i]) % 3 == 1) x = 4
    // if(indexOf(array[i]) % 3 == 2) x = 8

  //id = a unique value --> key = i in the for loop 

  // y: 000, 111, 222, 333, 444, 555, --> counter, and a for loop going, adding the remainder OR the increment number divded by 3 i%3 (0, 1, 2, 3, )

  // h: 1





    for(var i =0; i<array.length; i++){
      array.push({i: id.toString, x: 0 })
    }


    var layout = [
      { i: "a", x: 0, y: 0, w: 4, h: 1 },
      { i: "b", x: 4, y: 0, w: 4, h: 1 },
      { i: "c", x: 8, y: 0, w: 4, h: 1 },
      { i: "d", x: 0, y: 1, w: 4, h: 1 },
      { i: "e", x: 4, y: 1, w: 4, h: 1 },
      { i: "f", x: 8, y: 1, w: 4, h: 1 },
      { i: "g", x: 8, y: 1, w: 4, h: 1 },
      { i: "h", x: 0, y: 2, w: 4, h: 1 },
      { i: "i", x: 4, y: 2, w: 4, h: 1 },
      { i: "j", x: 8, y: 2, w: 4, h: 1 },
      { i: "k", x: 0, y: 3, w: 4, h: 1 },
      { i: "l", x: 4, y: 3, w: 4, h: 1 },
      { i: "m", x: 8, y: 3, w: 4, h: 1 },
      { i: "n", x: 0, y: 4, w: 4, h: 1 },
      { i: "o", x: 4, y: 4, w: 4, h: 1 },
      { i: "p", x: 8, y: 4, w: 4, h: 1 },
      { i: "q", x: 0, y: 5, w: 4, h: 1 },
      { i: "r", x: 4, y: 5, w: 4, h: 1 },
      { i: "s", x: 8, y: 5, w: 4, h: 1 },
      { i: "t", x: 0, y: 6, w: 4, h: 1 },
      { i: "u", x: 4, y: 6, w: 4, h: 1 },
      { i: "v", x: 8, y: 6, w: 4, h: 1 },
      
    ];
    var layout1 = [
      { i: "a", x: 0, y: 0, w: 6, h: 1 },
      { i: "b", x: 6, y: 0, w: 6, h: 1 },
      { i: "c", x: 0, y: 1, w: 6, h: 1 },
      { i: "d", x: 6, y: 1, w: 6, h: 1 },
      { i: "e", x: 0, y: 2, w: 6, h: 1 },
      { i: "f", x: 6, y: 2, w: 6, h: 1 },
    ];

    var layout = { lg: this.state.value === true ? layout : layout1 };

    return (
      <DashboardLayout>
      <div>
        <ResponsiveGridLayout
          className="layout"
          layouts={layout}
          breakpoints={{ lg: 1200 }}
          cols={{ lg: 12 }}
          rowHeight={100}
          width={1200}
        >
          <div key="a" style={{ backgroundColor: "black" }}>
            <BasicModal/>
          </div>
          <div key="b" style={{ backgroundColor: "green" }}>
            <BasicModal />
          </div>
          <div key="c" style={{ backgroundColor: "red" }}>
            <BasicModal />
          </div>
          <div key="d" style={{ backgroundColor: "blue" }}>
            <BasicModal  />
          </div>
          <div key="e" style={{ backgroundColor: "violet" }}>
            <BasicModal  />
          </div>
         <div key="f" style={{ backgroundColor: "blue" }}>
            <BasicModal  />
          </div>
          <div key="g" style={{ backgroundColor: "red" }}>
            <BasicModal />
          </div>
          <div key="h" style={{ backgroundColor: "lemonchiffon" }}>
            <BasicModal />
          </div>
          <div key="i" style={{ backgroundColor: "indigo" }}>
            <BasicModal />
          </div>
          <div key="j" style={{ backgroundColor: "yellow" }}>
            <BasicModal />
          </div>
          <div key="k" style={{ backgroundColor: "green" }}>
            <BasicModal  />
          </div>
          <div key="l" style={{ backgroundColor: "blue" }}>
            <BasicModal />
          </div>
          <div key="m" style={{ backgroundColor: "purple" }}>
            <BasicModal  />
          </div>
          <div key="n" style={{ backgroundColor: "red" }}>
            <BasicModal />
          </div>
          <div key="o" style={{ backgroundColor: "orange" }}>
            <BasicModal />
          </div>
          <div key="p" style={{ backgroundColor: "yellow" }}>
            <BasicModal  />
          </div>
          <div key="q" style={{ backgroundColor: "green" }}>
            <BasicModal />
          </div>
          <div key="r" style={{ backgroundColor: "blue" }}>
            <BasicModal  />
          </div>
          <div key="s" style={{ backgroundColor: "purple" }}>
            <BasicModal />
          </div>
          <div key="t" style={{ backgroundColor: "red" }}>
            <BasicModal  />
          </div>
          <div key="u" style={{ backgroundColor: "orange" }}>
            <BasicModal  />
          </div>
          <div key="v" style={{ backgroundColor: "yellow" }}>
            <BasicModal  />
          </div>
        </ResponsiveGridLayout>
      </div>
      </DashboardLayout>
    );
  }
}