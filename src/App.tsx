import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    let BASE_URL;
    if (process.env.NODE_ENV === "development") {
      BASE_URL = `dev/api/v1`;
    } else if (process.env.NODE_ENV === "production") {
      BASE_URL = `prod/api/v1`;
    }
    console.log(BASE_URL);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* {process.env.MY_NAME} */}
        {}
        {process.env.REACT_APP_INFO}
        <hr />
        {process.env.REACT_APP_BASE_URL}

        <hr />
      </header>
    </div>
  );
}

export default App;
