import React, { Component } from "react";

class ReactLifeCycle2 extends Component {
  constructor(props) {
    console.log("1 Parent constructor function");
    this.state = {
      value: 1,
    };
  }
  static getDerivedStateFromProps(props) {
    console.log("2, 9, Parent getDerivedStateFromProps function");
    return props;
  }
  shouldComponentUpdate() {
    console.log("10 Parent shouldComponentUpdate function");
    return true;
  }
  componentDidMount() {
    console.log("8 Parent componentDidMount function");
    this.setState({
      value: 10,
    });
  }
  componentDidUpdate() {
    console.log("16 Parent componentDidUpdate function");
  }
  render() {
    return (
      <div>
        {console.log("3, 11 Parent render function")} Parent <Child />
      </div>
    );
  }
}

class Child extends Component {
  constructor(props) {
    console.log("4 Child constructor function");
    this.state = {
      value: 2,
    };
  }
  static getDerivedStateFromProps(props) {
    console.log("5, 12 Child getDerivedStateFromProps function");
    return props;
  }
  shouldComponentUpdate() {
    console.log("13 Child shouldComponentUpdate function");
    return true;
  }
  componentDidMount() {
    console.log("7 Child componentDidMount function");
    this.setState({
      value: 20,
    });
  }
  componentDidUpdate() {
    console.log("15 Child componentDidUpdate function");
  }
  render() {
    return <div>{console.log("6, 14 Child render function")} Child</div>;
  }
}

export { ReactLifeCycle2 };
