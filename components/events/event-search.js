import React, { useRef } from "react";
import Button from "../ui/Button";
import classes from "./events-search.module.css";

const EventsSearch = (props) => {
  const yearRef = useRef();
  const monthRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const selectedYear = yearRef.current.value;
    const selectedmonth = monthRef.current.value;

    props.onSearch(selectedYear, selectedmonth)
    
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthRef}>
            <option value="1">January</option>
            <option value="2">Februrary</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">may</option>
            <option value="6">June</option>
            <option value="6">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">october</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button >FInd Events</Button>
    </form>
  );
};

export default EventsSearch;
