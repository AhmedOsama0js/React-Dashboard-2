



  const newData = new Date();
  const day = newData.toISOString().split("").slice(0, 8).join("");
 export const calendarData = [
      {
          title: "Business Lunch",
          start: `${day}20`,
          end: `${day}23`,
          color: "#ff7b00",
        },
        {
          title: "Business Lunch",
          start: `${day}19`,
          end: `${day}23`,
          color: "#ff7b00",
        },
        {
          title: "Business Lunch",
          start: `${day}20`,
          end: `${day}23`,
          color: "#ff7b00",
        },
        {
          title: "Business Lunch",
          start: `${day}01`,
          end: `${day}03`,
          color: "#ff7b00",
        },
        {
          title: "meeting",
          start: `${day}27`,
          end: `${day}28`,
          color: "#ff7b00",
        },
        {
          title: "meeting",
          start: `${day}01`,
          end: `${day}02`,
          color: "#ff7b00",
        },
        {
          title: "meeting",
          start: `${day}01`,
          end: `${day}02`,
          color: "#ff7b00",
        },
        {
          title: "meeting",
          start: `${day}14`,
          end: `${day}16`,
          color: "#ff7b00",
        },
        {
          title: "Meeting",
          start: `${day}06`,
          end: `${day}08`,
          constraint: "availableForMeeting",
          color: "#ff7b00",
        },
        {
          start: `${day}09`,
          end: `${day}12`,
          overlap: false,
          display: "background",
          color: "#ff7b00",
        },
        {
          start: `${day}28`,
          end: `${day}31`,
          overlap: false,
          display: "background",
          color: "#ff7b00",
        },
        {
          start: `${day}17`,
          end: `${day}20`,
          overlap: false,
          display: "background",
          color: "#ff7b00",
        },
]