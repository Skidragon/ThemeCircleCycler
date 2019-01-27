import React from "react";
import styled from "styled-components";
const CircleToggler = styled.div`
  border-radius: 50px;
  border-right-color: ${props => (props.themeIndex === 1 ? "#8B0000" : "red")};
  border-top-color: ${props => (props.themeIndex === 0 ? "#CCCC00	" : "yellow")};
  border-bottom-color: ${props => (props.themeIndex === 1 ? "#8B0000" : "red")};
  border-left-color: ${props => (props.themeIndex === 2 ? "#006400" : "green")};
  border-width: 50px;
  border-style: solid;
  height: 0px;
  width: 0px;
  position: relative;
  /* To ratate */
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);

  &::before {
    display: block;
    content: "";
    position: absolute;
    left: -50px;
    top: -50px;
    border-radius: 50px;
    border-right-color: transparent;
    border-top-color: ${props =>
      props.themeIndex === 0 ? "#CCCC00	" : "yellow"};

    border-bottom-color: transparent;
    border-left-color: transparent;
    border-width: 50px;
    border-style: solid;
    height: 0px;
    width: 0px;
    /* To ratate */
    -webkit-transform: rotate(30deg);
    -moz-transform: rotate(30deg);
    -o-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg);
  }

  &::after {
    display: block;
    content: "";
    position: absolute;
    left: -50px;
    top: -50px;
    border-radius: 50px;
    border-right-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: ${props =>
      props.themeIndex === 2 ? "#006400" : "green"};
    border-width: 50px;
    border-style: solid;
    height: 0px;
    width: 0px;
    /* To ratate */
    -webkit-transform: rotate(-30deg);
    -moz-transform: rotate(-30deg);
    -o-transform: rotate(-30deg);
    -ms-transform: rotate(-30deg);
    transform: rotate(-30deg);
  }
`;
export { CircleToggler };
