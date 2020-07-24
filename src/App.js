import React, { useState, useEffect } from "react";
import "../src/css/app.css";
import Header from "./component/header";
import MemberList from "./component/MemberList";
import { Spinner } from "react-bootstrap";



function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsloaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=30")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsloaded(true);
          setData(data.results);
        },
        (error) => {
          setIsloaded(true);
          setError(error);
        }
      );
  }, []);


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Spinner animation="border" role="status" variant="warning" >
    <span className="sr-only">Loading...</span>
  </Spinner>;
  } else {
    return (
      <div className="container">
        <Header />
        <MemberList data={data} />
      </div>
    );
  }
}

export default App;
