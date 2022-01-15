import React from 'react';
import Calendar from 'react-calendar';
import './Booking.scss'; 

class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            update: false,
            date: new Date(),
        }
    }
    componentDidUpdate() {
        if (this.state.update) {
            //todo update fetch

            this.setState({
                update: false,
            })
        }
    }
    componentDidMount() {
        // options = {
        //     method: 'GET',
        // }
        // fetch(url + path, options)
        //     .then(res => res.json())
        //     .then((data) => {

        //     })

    }
    onChange = date => this.setState({ date })
    render() {
  
        return (
            <div id="BookingPage">
                <div className="left">
                    <Calendar onChange={this.onChange}
                        className="calendar-inner"
                        maxDate={this.addDate(new Date(), 10)}
                        minDate={new Date()}
                        showFixedNumberOfWeeks
                        onClickDay={(value) => { this.handleCalendarClick(value) }}
                        navigationLabel={({ date, view, label }) => {
                            var dateInfolist = date.toDateString().split(' ');
                            var month = dateInfolist[1];
                            var year = dateInfolist[3];
                            return month + ' ' + year;
                        }}
                        tileClassName="calendar-inner-tile" />
                    <div id="MyReservation" roomlist={this.state.roomlist} />
                    <div>

                    </div>
                </div>

                <div  onClick={this.handleMeetingRoomCardClick.bind(this)}
                    className="MeetingRooms" selectDate={this.formatDate(this.state.date)}
                    roomlist={this.state.roomlist} />
                <div id="reservationform">
                    <div
                        show={this.state.modalIsOpen}
                        centered animation
                        onRequestClose={this.closeModal}
                        onHide={this.closeModal}
                    >
                        <div closeButton>
                            <div id="contained-modal-title-vcenter">
                              
                            </div>
                        </div>
                        <div>
                            <div  className="form" />
                        </div>
                    </div>
                </div>
            </div >
        );
    }

    formatDate(date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();
        var result = year.toString() + "/" + month.toString() + "/" + day.toString();
        return result;
    }
    addDate(date, day) {
        date.setDate(date.getDate() + day);
        return date;
    }
    handleCalendarClick(date) {
        // Todo Fetch code for calendar click
        // update meeting room
        console.log(date);
    }

    handleMeetingRoomCardClick(index) {
        console.log(index);
        this.setState({
            modalIsOpen: true,

        });
    }
    closeModal() {
        this.setState({
            modalIsOpen: false,
        });
    }
}

export default Booking;