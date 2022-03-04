import "./Booking.scss";

export default function TimeSlot() {
  const timeStampArr = [
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
  ];

  return (
    <div className="card">
      <h5 className="card-title">Please select your preferred slot</h5>
      <div className="card-body">
        {timeStampArr.map((item) => (
          <button type="button" className="card-button" key={item}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
