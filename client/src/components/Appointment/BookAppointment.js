import React from 'react';
import AppointmentForm from './AppointmentForm';
import BookingCard from './BookingCard';
import BookingModal from '../Booking/BookingModal';
const BookAppointment = ({date, time}) => {
    return (
        <section>
            {/* <h2 className="text-center text-brand mb-5">Available Appointments on {date.toDateString()}</h2> */}
            <h1 className="booking-select">Selected Time: {time}</h1>
            <div className="booking-row">
                <BookingModal date={date} time={time}/>
                  {/* <BookingCard  date={date} time={time}></BookingCard> */}
                <AppointmentForm time={time} date={date}/>
            </div>
        </section>
    );
};

export default BookAppointment;