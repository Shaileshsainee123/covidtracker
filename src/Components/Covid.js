import React, { useEffect, useState } from "react";
import "./Covid.css";

const Covid = () => {
    const [data,setdata] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      setdata(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
      getCovidData();
  }, []);
  return (
    <>
      <section>
      <div className="card">
        <h1 className="liv"><marquee>Live</marquee></h1>
        <h2>Covid 19 Coronavirus Tracker</h2>
       
        <button className="btn btn-1 btn-sep "><p>Our&nbsp;COUNTRY</p>
        <p>INDIA</p></button>
        <button className="btn btn-2 btn-sep "><p>Total &nbsp;Recovered</p>
        <p>{data.recovered}</p></button>
        <button className="btn btn-3 btn-sep "><p>Total&nbsp;CONFIRM</p>
        <p>{data.confirmed}</p></button>
        <button className="btn btn-4 btn-sep "><p>Total&nbsp;DEATH</p>
        <p>{data.deaths}</p></button>
        <button className="btn btn-5 btn-sep "><p>Total&nbsp;ACTIVE</p>
        <p>{data.active}</p></button>
        <button className="btn btn-6 btn-sep "><p>LAST&nbsp;UPDATE</p>
        <p>{data.lastupdatedtime}</p></button>
        </div>
      </section>
    </>
  );
};

export default Covid;
