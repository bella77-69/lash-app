// import "./Booking.scss";

// export default function TimeSlot({
//   submit,
// time
// }) {

//   const timeStampArr = [
//     "09:00 AM",
//     "09:30 AM",
//     "10:00 AM",
//     "10:30 AM",
//     "11:00 AM",
//     "11:30 AM",
//     "12:00 PM",
//     "12:30 PM",
//     "01:00 PM",
//     "01:30 PM",
//     "02:00 PM",
//     "02:30 PM",
//     "03:00 PM",
//     "03:30 PM",
//     "04:00 PM",
//     "04:30 PM",
//     "05:00 PM",
//     "05:30 PM",
//     "06:00 PM",
//     "06:30 PM",
//     "07:00 PM",
//     "07:30 PM",
//     "08:00 PM",
//     "08:30 PM"
//   ];

//   return (
    
//     <div className="time">
//       <h5 className="time-title">Please select your preferred slot</h5>
//       <div className="time-body">
//         {timeStampArr.map((item) => (
//           <button type="button" className="time-button" key={item}>
//             {item}
//           </button>
//         ))}
//       </div>
//     </div>
//   );

// }

import React, { useState } from 'react';
import "./Booking.scss";


function TimeSlot() {
  const [time, setTime] = useState();

  return (
    <div className='time'>
      <select value={time} 
              onChange={(e) => setTime(e.target.value)}>
                <option className="booking-option" >Select a time</option>
        <option value="8:00am" >8:00am</option>
        <option value="9:00am">9:00am</option>
        <option value="9:30am">9:30am</option>
        <option value="10:00am">10:00am</option>
        <option value="10:30am">10:30am</option>
        <option value="11:00am">11:00am</option>
        <option value="11:30am">11:30am</option>
        <option value="12:00pm">12:00pm</option>
        <option value="12:30pm">12:30pm</option>
        <option value="1:00pm">1:00pm</option>
        <option value="1:30pm">1:30pm</option>
        <option value="2:00pm">2:00pm</option>
        <option value="2:30pm">2:30pm</option>
        <option value="3:00pm">3:00pm</option>
        <option value="3:30pm">3:30pm</option>
        <option value="4:00pm">4:00pm</option>
        <option value="4:30pm">4:30pm</option>
        <option value="5:00pm">5:00pm</option>
        <option value="5:30pm">5:30pm</option>
        <option value="6:00pm">6:00pm</option>
        <option value="6:30pm">6:30pm</option>
        <option value="7:00pm">7:00pm</option>
      </select>
      <h1 className="booking-select">Selected Time: {time}</h1>
    </div>
  );
}

export default TimeSlot; 