import "./Booking.scss";

export default function TimeSlot() {
  const timeStampArr = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "08:00 PM",
    "08:30 PM"
  ];

  return (
    <div className="time">
      <h5 className="time-title">Please select your preferred slot</h5>
      <div className="time-body">
        {timeStampArr.map((item) => (
          <button type="button" className="time-button" key={item}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
