import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
class ThemeCycler extends Component {
  state = {
    themeIndex: 0
  };
  prevThemeHandler = () => {
    const { themes } = this.props;
    const { themeIndex } = this.state;

    if (themeIndex === 0) {
      const end = themes.length - 1;
      this.setState({ themeIndex: end });
    } else {
      this.setState(prevState => ({ themeIndex: prevState.themeIndex - 1 }));
    }
  };
  nextThemeHandler = () => {
    const { themes } = this.props;
    const { themeIndex } = this.state;
    const end = themes.length - 1;
    if (themeIndex === end) {
      this.setState({ themeIndex: 0 });
    } else {
      this.setState(prevState => ({ themeIndex: prevState.themeIndex + 1 }));
    }
  };

  render() {
    const { themes } = this.props;
    const { themeIndex } = this.state;
    const values = {
      prevThemeHandler: this.prevThemeHandler,
      nextThemeHandler: this.nextThemeHandler,
      themeIndex: themeIndex
    };
    return (
      <ThemeProvider theme={themes[themeIndex]}>
        <>{this.props.children(values)}</>
      </ThemeProvider>
    );
  }
}

export default ThemeCycler;
