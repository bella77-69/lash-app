import React from "react";
import "./Price.scss";
import { Link } from "react-router-dom";

class Price extends React.Component {
  render() {
    return (
      <div className="price">
        <div className="price-table">
          <div className="price-block">
            <div className="price-header">
              <div className="price-heading">Classic Full Set</div>
              <div className="price-price">
                <span className="price-currency">$</span>
                <span className="price-value">80</span>
              </div>
            </div>
            <div className="price-body">
              <ul className="price-features">
                <li className="price-list">
                  <strong>(60 - 90</strong> min)
                </li>
                <li className="price-list">
                  <strong>Approximately 70-80 lashes per eye</strong>
                </li>
                <li className="price-list">
                  They are the perfect starting point for first-time wearers of
                  eyelash extensions and are most popular for everyday wear
                </li>
                <li className="price-list">
                  <Link to="/book-appointment" className="price-button">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="price-table">
          <div className="price-block">
            <div className="price-header">
              <div className="price-heading">Hybrid Full Set</div>
              <div className="price-price">
                <span className="price-currency">$</span>
                <span className="price-value">100</span>
              </div>
            </div>
            <div className="price-body">
              <ul className="price-features">
                <li className="price-list">
                  <strong>(120</strong> min)
                </li>
                <li className="price-list">
                  <strong>Approximately 70-80 lashes per eye</strong>
                </li>

                <li className="price-list">
                  Hybrid is most popular in a messy, staggered style that
                  flatters the eye and adds some fabulousness to your look.
                </li>
                <li className="price-list">
                  <Link to="/book-appointment" className="price-button">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="price-table">
          <div className="price-block">
            <div className="price-header">
              <div className="price-heading">Volume Full Set</div>
              <div className="price-price">
                <span className="price-currency">$</span>
                <span className="price-value">120</span>
              </div>
            </div>
            <div className="price-body">
              <ul className="price-features">
                <li className="price-list">
                  <strong>(120</strong> min)
                </li>
                <li className="price-list">
                  <strong>Approximately 200-300 lashes per eye</strong>
                </li>

                <li className="price-list">
                  A very natural look - can be applied to 2/3 eye for winged
                  effect. Allow for a great level of customization.
                </li>
                <li className="price-list">
                  <Link to="/book-appointment" className="price-button">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="price-table">
          <div className="price-block">
            <div className="price-header">
              <div className="price-heading">Russian Full Set</div>
              <div className="price-price">
                <span className="price-currency">$</span>
                <span className="price-value">200</span>
              </div>
            </div>
            <div className="price-body">
              <ul className="price-features">
                <li className="price-list">
                  <strong>(180</strong> min)
                </li>
                <li className="price-list">
                  <strong>Up to 600 lashes per eye</strong>
                </li>

                <li className="price-list">
                  {" "}
                  Think fans (2-3 lashes per fan) delicately placed along your
                  lash line for a full but soft look.
                </li>
                <li className="price-list">
                  <Link to="/book-appointment" className="price-button">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="price-table">
          <div className="price-block">
            <div className="price-header">
              <div className="price-heading">Classic Fill</div>
              <div className="price-price">
                <span className="price-currency">$</span>
                <span className="price-value">60</span>
              </div>
            </div>
            <div className="price-body">
              <ul className="price-features">
                <li className="price-list">
                  <strong>(60</strong> min)
                </li>

                <li className="price-list">Silk, Faux-mink or Flat Lash</li>
                <li className="price-list">
                  <Link to="/book-appointment" className="price-button">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="price-table">
          <div className="price-block">
            <div className="price-header">
              <div className="price-heading">Hybrid Fill</div>
              <div className="price-price">
                <span className="price-currency">$</span>
                <span className="price-value">80</span>
              </div>
            </div>
            <div className="price-body">
              <ul className="price-features">
                <li className="price-list">
                  <strong>(90</strong> min)
                </li>

                <li className="price-list">Silk, Faux-mink or Flat Lash</li>
                <li className="price-list">
                  <Link to="/book-appointment" className="price-button">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="price-table">
          <div className="price-block">
            <div className="price-header">
              <div className="price-heading">Volume Fill</div>
              <div className="price-price">
                <span className="price-currency">$</span>
                <span className="price-value">100</span>
              </div>
            </div>
            <div className="price-body">
              <ul className="price-features">
                <li className="price-list">
                  <strong>(90</strong> min)
                </li>

                <li className="price-list">Silk, Faux-mink or Flat Lash</li>
                <li className="price-list">
                  <Link to="/book-appointment" className="price-button">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="price-table">
          <div className="price-block">
            <div className="price-header">
              <div className="price-heading">Russian Fill</div>
              <div className="price-price">
                <span className="price-currency">$</span>
                <span className="price-value">150</span>
              </div>
            </div>
            <div className="price-body">
              <ul className="price-features">
                <li className="price-list">
                  <strong>(120</strong> min)
                </li>

                <li className="price-list">Silk, Faux-mink or Flat Lash</li>
                <li className="price-list">
                  <Link to="/book-appointment" className="price-button">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Price;
