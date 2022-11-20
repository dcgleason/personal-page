import React, { Component } from "react";
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


ResponsiveGridLayout = WidthProvider(Responsive);

class DemoComponent extends Component {
    render() {
        return (
            <div >
              Card-{this.props.color}  
            </div>
        )
    }
}


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: true,
    };
    this.onHandle = this.onHandle.bind(this);
  }
  onHandle() {
    this.setState((prevState) => ({
      value: !prevState.value,
    }));
  }
  
  render() {
  var array = [];
  var id = "a"

  //if the remander is 0, x=1, if remainder is 1, x = 4, if remainder is 2, x=8
  // numerator is the number / element of the array of or list of people who have written in --> query all contributors for a gift and put them in an array
  // if(indexOf(array[i]) % 3 == 0) x = 0
  // if(indexOf(array[i]) % 3 == 1) x = 4
    // if(indexOf(array[i]) % 3 == 2) x = 8



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
        <button style={{ marginLeft: "45%" }} onClick={this.onHandle}>
          {this.state.value === true ? "Increase" : "Decrease"} Grid by 2
          columns
        </button>
        <ResponsiveGridLayout
          className="layout"
          layouts={layout}
          breakpoints={{ lg: 1200 }}
          cols={{ lg: 12 }}
          rowHeight={100}
          width={1200}
        >
          <div key="a" style={{ backgroundColor: "black" }}>
            <DemoComponent color={"black"} />
          </div>
          <div key="b" style={{ backgroundColor: "green" }}>
            <DemoComponent color={"green"} />
          </div>
          <div key="c" style={{ backgroundColor: "red" }}>
            <DemoComponent color={"red"} />
          </div>
          <div key="d" style={{ backgroundColor: "blue" }}>
            <DemoComponent color={"blue"} />
          </div>
          <div key="e" style={{ backgroundColor: "violet" }}>
            <DemoComponent color={"violet"} />
          </div>
         <div key="f" style={{ backgroundColor: "lemonchiffon" }}>
            <DemoComponent color={"lemonchiffon"} />
          </div>
          <div key="g" style={{ backgroundColor: "lemonchiffon" }}>
            <DemoComponent color={"lemonchiffon"} />
          </div>
          <div key="h" style={{ backgroundColor: "lemonchiffon" }}>
            <DemoComponent color={"lemonchiffon"} />
          </div>
          <div key="i" style={{ backgroundColor: "lemonchiffon" }}>
            <DemoComponent color={"lemonchiffon"} />
          </div>
          <div key="j" style={{ backgroundColor: "lemonchiffon" }}>
            <DemoComponent color={"lemonchiffon"} />
          </div>
          <div key="k" style={{ backgroundColor: "lemonchiffon" }}>
            <DemoComponent color={"lemonchiffon"} />
          </div>
          <div key="l" style={{ backgroundColor: "lemonchiffon" }}>
            <DemoComponent color={"lemonchiffon"} />
          </div>
          <div key="m" style={{ backgroundColor: "lemonchiffon" }}>
            <DemoComponent color={"lemonchiffon"} />
          </div>
          <div key="n" style={{ backgroundColor: "lemonchiffon" }}>
            <DemoComponent color={"lemonchiffon"} />
          </div>
          <div key="o" style={{ backgroundColor: "lemonchiffon" }}>
            <DemoComponent color={"lemonchiffon"} />
          </div>
          <div key="p" style={{ backgroundColor: "lemonchiffon" }}>
            <DemoComponent color={"lemonchiffon"} />
          </div>
          <div key="q" style={{ backgroundColor: "lemonchiffon" }}>
            <DemoComponent color={"lemonchiffon"} />
          </div>
          <div key="r" style={{ backgroundColor: "lemonchiffon" }}>
            <DemoComponent color={"lemonchiffon"} />
          </div>
          <div key="s" style={{ backgroundColor: "lemonchiffon" }}>
            <DemoComponent color={"lemonchiffon"} />
          </div>
          <div key="t" style={{ backgroundColor: "lemonchiffon" }}>
            <DemoComponent color={"lemonchiffon"} />
          </div>
          <div key="u" style={{ backgroundColor: "lemonchiffon" }}>
            <DemoComponent color={"lemonchiffon"} />
          </div>
          <div key="v" style={{ backgroundColor: "lemonchiffon" }}>
            <DemoComponent color={"lemonchiffon"} />
          </div>
        </ResponsiveGridLayout>
      </div>
      </DashboardLayout>
    );
  }
}