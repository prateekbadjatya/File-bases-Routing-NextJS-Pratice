import Link from "next/link";
import React from "react";
import DateIcon from "../icons/date";
import Location from "../icons/Location";
import ArrowRight from "../icons/arrow-right";
import Button from "../ui/Button";
import classes from "./event-item.module.css";

const humanRedableDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    date: "numeric",
    month: "long",
    year: "numeric",
  });

const EventItem = (props) => {
  const { title, image, description, date, location, id } = props;

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanRedableDate(date)}</time>
          </div>
          <div className={classes.address}>
            <Location />
            <address>{location.replace(", ", "\n")}</address>
          </div>
        </div>
        <div className={classes.actions}>
          {/* <Link href={exploreLink}>Explore Events</Link> */}
          <Button link={exploreLink}>
           <span> Explore Events </span>
           <span className={classes.icon}><ArrowRight /></span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;

/* 
{
    id: 'e1',
    title: 'Programming for everyone',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    location: 'Somestreet 25, 12345 San Somewhereo',
    date: '2021-05-12',
    image: 'images/coding-event.jpg',
    isFeatured: false,
  }
 */
