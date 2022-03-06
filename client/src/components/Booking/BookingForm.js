import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Booking.scss";
import TimeSlot from "./TimeSlot";
import BookingModal from "./BookingModal";
import styled from "styled-components";

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
          <form className="booking-form">
            <label className="booking-label">Name</label>
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
            </div>
            <label className="booking-label">Email Address</label>
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
            </div>
          </form>
          <div className="booking-form__drop">
            <select
              className="booking-select"
              placeholder="Select Service"
              aria-label="Select Service"
              value={lashName}
              onChange={(e) => setLashName(e.target.value)}
            >
              <option className="booking-option">Select Service</option>
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
            <div className="booking-calendar">
              <CalendarContainer>
                <Calendar
                  onClickDay={onChange}
                  value={selectDate}
                  required
                  className="react-calendar"
                />
              </CalendarContainer>
            </div>
          </div>

          <h5 className="card-title">Date : {selectedDate}</h5>

          <TimeSlot></TimeSlot>
          {successMessage()}
        </div>
      </div>
    </>
  );
}

const CalendarContainer = styled.div`
  max-width: 400px;
  margin-top: 1.25rem;

  button {
    margin: 3px;
    font-size: 1rem;
    border: 0;
    border-radius: 3px;
    color: #737373;
    padding: 5px 0;

    &:hover {
      background-color: #556b55;
    }

    &:active {
      background-color: #c0c0c0;
    }
  }

  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      max-width: initial !important;
      font-size: 1rem;
    }
  }
`;
