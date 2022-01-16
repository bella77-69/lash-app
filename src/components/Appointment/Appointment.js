import React, { useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import {useParams, useHistory, Link, Redirect,} from 'react-router-dom';
import './Appointment.scss';
import { Container, Button, Row, Col} from 'react-bootstrap';
import LeftArrow from '../../Assets/Icons/left.png';
import RightArrow from '../../Assets/Icons/right.png';

const TIME_SLOT = [9, 10, 11, 12, 13, 14, 15, 16];

const Appointment = ({
  appointments,
}) => { 
  let { date, month, year } = useParams();
  const history = useHistory();
  const currentDate = `${date}/${month}/${year}`;

  const bookingData = useMemo(
    () => ((appointments && appointments[currentDate]) || {}),
    [appointments, currentDate]
  );

  const gotoDate = useCallback(
    (day) => (
      moment(`${date}/${month}/${year}`, "D/M/YYYY").add(day, "days").format('D-M-YYYY').split('-')
    ), [date, month, year]
  );

  const changeDate = useCallback(
    (newDate) => ( 
      history.push(
        `/${parseInt(newDate[0])}/${parseInt(newDate[1])}/${parseInt(newDate[2])}/`
      )
    ), [history]
  )

  const formatTime = useCallback(
    (time) => {
      if (time < 12) {
        return `${time} AM`
      }

      if (time > 12) {
        time = time - 12;
      }
    
      return `${time} PM`
    }, []
  );

  if (!(date && month && year)) {
    const currentDate = moment();
    date = currentDate.date();
    month = currentDate.month() + 1;
    year = currentDate.year();
    return (
      <Redirect to={`/${date}/${month}/${year}/`} />
    )
  }
 
  return (
    <div className="AppointmentWrapper">
      <div className="navWrapper">
        <Container className="nav">
          <div onClick={() => changeDate(gotoDate(-1))} className="button"><img alt="left button" src={LeftArrow}/>️</div>
          <h2>{currentDate}</h2>
          <div onClick={() => changeDate(gotoDate(1))} className="button"><img alt="right button" src={RightArrow}/>️</div>
        </Container>
      </div>
    <Container>
      <Row>
        <Col className="mx-3">
          <h2 className="mt-5">
            Select A Time Slot
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          { TIME_SLOT.map(
              time => (
                <Link key={time} to={`${time}/details/`}>
                  <Button className={bookingData[time] && "booked"}>
                    { formatTime(time) } to { formatTime(++time) }
                  </Button>
                </Link>
              )
            )
          }
        </Col>
      </Row>
    </Container>
    </div>
  );
 }

 export default Appointment;
// export default connect(
//   ({appointments}) => ({
//     appointments,
//   })
// )(Booking);

// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './Booking.scss'
//  import { branches } from '../../redux/actions/actionTypes';


// function Booking({handleSubmit}) {

//   const allMonthValues = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
//   ];
 

//   const [branch, setBranch] = useState('');
//  // State for date selected by user
//  const [selectedDate, setSelectedDate] = useState();

//  // State for text above calander
//  const [calendarText, setCalendarText] = useState(`No Date is selected`);

//  // Function to update selected date and calander text
//  const handleDateChange = (value) => {
//    setSelectedDate(value);
//    setCalendarText(`The selected Date is ${value.toDateString()}`);
//  };

//  // Function to handle selected Year change
//  const handleYearChange = (value) => {
//    const yearValue = value.getFullYear();
//    setCalendarText(`${yearValue} Year  is selected`);
//  };

//  // Function to handle selected Month change
//  const handleMonthChange = (value) => {
//    const monthValue = allMonthValues[value.getMonth()];
//    setCalendarText(`${monthValue} Month  is selected`);
//  };

//    const onSubmitForm = (e) => {
//     e.preventDefault();
//     handleDateChange(selectedDate, branch);
//   };

//  return (
//    <div className="booking">
//      <h2 className="calander-details">{calendarText}</h2>
//      <Calendar
//        onClickMonth={handleMonthChange}
//        onClickYear={handleYearChange}
//        onChange={handleDateChange}
//        value={selectedDate}
//      />
//             <form className="booking-form" onSubmit={onSubmitForm}>
//         <input
//           className="booking-control"
//           type="datetime-local"
//           onChange={(event) => { selectedDate(event.target.value); }}
//         />
//         <select
//           className="booking-filter"
//           onChange={(event) => { setBranch(event.target.value); }}
//           id="filter"
//         >
//           {
//           branches.map((item) => (
//             <option value={item} key={item} className="booking-option">
//               {item} 
//             </option>
//           ))
//           }
//         </select>
//         <button type="submit" className='booking-btn'>Book Now</button>
//       </form>
//    </div>
//  );
// }

// export default Booking;
