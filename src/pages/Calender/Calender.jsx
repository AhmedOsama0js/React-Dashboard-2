import React, { useEffect, useRef, useState } from "react";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./Calender.css";
import { calendarData } from "../../dist/data/calendarData";

function Calender() {
  const calendarRef = useRef(null);
  const [currentEvents, ] = useState(calendarData);

  // const handleEvents = async (events) => {

  //   await Promise.resolve(setCurrentEvents(events));
  // };

const handleDataSelect = (selectInfo) => {
  let title = prompt("please enter a title for the event");
  if (title) {
    const calendarApi = selectInfo.view.calendar;
    if (calendarApi) {
      calendarApi.unselect();
      calendarApi.addEvent({
        title: title,
        start: selectInfo.start,
        end: selectInfo.end,
        allDay: selectInfo.allDay,
        color: "#ff7b00",
      });
    }
  }
};

  const handleEventClick = (click) => {
    if (window.confirm("Are you sure to delete this event")) {
      click.event.remove();
    }
}
  useEffect(() => {
    const calendarEl = calendarRef.current;
    const newData = new Date();
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      allDaySlot: false,
      initialView: "dayGridMonth",
      slotDuration: "01:00:00",
      editable: true,
      selectMirror: true,
      selectable: true,
      dayMaxEvents: true,
      weekends: true,
      initialDate: newData,
      navLinks: true,
      businessHours: true,
      initialEvents: currentEvents,
      // eventsSet: handleEvents,
      select: handleDataSelect,
      eventClick:handleEventClick
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, [currentEvents]);

  return <div className="calendarContainer" ref={calendarRef}></div>;
}

export default Calender;
