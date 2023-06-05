import React from "react";
import SignupScreen from "./views/signup-screen";
import PasswordResetScreen from "./views/password-reset-screen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/**
 * App setup.
 * @author [Satoshi Ishida]
 */
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  componentDidMount = () => {
    this.callBackendAPI();
  };

  callBackendAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <Routes>
            <Route path="/" element={<SignupScreen />} />
            <Route path="/reset/:urlToken" element={<PasswordResetScreen />} />
          </Routes>
        </Router>
      </React.Fragment>
    );
  }
}
