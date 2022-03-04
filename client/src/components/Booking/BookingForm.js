import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Booking.scss";
import TimeSlot from "./TimeSlot";
import BookingModal from "./BookingModal";

export default function Form({
  lashName,
  setLashName,
  userName,
  setUserName,
  description,
  setDescription,
  onChange,
  selectDate,
  selectedDate,
  bookAppointment,
  setSelectedDate,
  setSuccess,
}) {
  const successMessage = () => {
    return (
      <>
        <BookingModal
          onChange={onChange}
          bookAppointment={bookAppointment}
          lashName={lashName}
          userName={userName}
          description={description}
          selectDate={selectDate}
          selectedDate={selectedDate}
          setUserName={setUserName}
          setDescription={setDescription}
          setSelectedDate={setSelectedDate}
          setLashName={setLashName}
          setSuccess={setSuccess}
        />
      </>
    );
  };
  return (
    <>
      <div className="booking">
        <div className="booking-container">
          <h5 className="booking-title">Booking</h5>

          <form className="booking-form">
            <div className="booking-form__container">
              <select
                className="booking-select"
                placeholder="Select Service"
                aria-label="Select Service"
                value={lashName}
                onChange={(e) => setLashName(e.target.value)}
              >
                <option>Select Service</option>
                <option value="Classic Lashes Full Set">
                  Classic Lashes Full Set
                </option>
                <option value="Classic Lashes Fill">Classic Lashes Fill</option>
                <option value="Hybrid Lashes Full Set">
                  Hybrid Lashes Full Set
                </option>
                <option value="Hybrid Lashes Fill">Hybrid Lashes Fill</option>
                <option value="Volume Lashes Full Set">
                  Volume Lashes Full Set
                </option>
                <option value="Volume Lashes Fill">Volume Lashes Fill</option>
                <option value="Russian Lashes Full Set">
                  Russian Lashes Full Set
                </option>
                <option value="Russian Lashes Fill">Russian Lashes Fill</option>
              </select>
              <label className="booking-label"></label>
            </div>

            <div className="booking-form__container">
              <input
                type="text"
                className="booking-control"
                placeholder="Enter your name"
                required
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              ></input>
              <label className="booking-label">Name</label>
            </div>
            <div className="booking-form__container">
              <input
                type="text"
                className="booking-control"
                placeholder="Enter a valid email"
                required
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></input>
              <label className="booking-label">Email Address</label>
            </div>
            <div className="booking-form__container">
              <div className="react-calendar">
                <Calendar onClickDay={onChange} value={selectDate} required />
              </div>
            </div>
          </form>
          <h5 className="card-title">Date : {selectedDate}</h5>

          <TimeSlot></TimeSlot>
          {successMessage()}
        </div>
      </div>
    </>
  );
}
