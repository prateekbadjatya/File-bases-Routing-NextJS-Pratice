import React from "react";
import { useRouter } from "next/router";
import EventSummary from "../../../components/event-detail/event-summary";
import { getEventById } from "../../../dummy-data";
import EventContent from "../../../components/event-detail/event-content";
import EventLogistics from "../../../components/event-detail/event-logistics";

const EventDetailPage = () => {
  const router = useRouter();
  const selectedEvent = getEventById(router.query?.eventId);
  console.log(router.pathname);
  console.log(router.query);

  if (!selectedEvent) {
    return <p>No Event Found</p>;
  }
  return (
    <>
      <EventSummary title={selectedEvent?.title} />
      <EventLogistics {...selectedEvent} />
      <EventContent description={selectedEvent.description} />
    </>
  );
};

export default EventDetailPage;
