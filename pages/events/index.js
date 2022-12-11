import { useRouter } from "next/router";
import React from "react";
import EventsSearch from "../../components/events/event-search";
import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";

const Event = () => {
  const router = useRouter();
  const events = getAllEvents();

  const onSearch = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <h1>Hello</h1>
      <EventsSearch onSearch={onSearch} />
      <EventList items={events} />
    </>
  );
};

export default Event;
