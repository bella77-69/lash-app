import React from "react";
import classic from "../../Assets/Logo/classic-full.png";
import classicFill from "../../Assets/Logo/classic-fill.png";
import hybrid from "../../Assets/Logo/hybrid-full.png";
import hybridFill from "../../Assets/Logo/hybrid-fill.png";
import volume from "../../Assets/Logo/volume-full.png";
import volumeFill from "../../Assets/Logo/volume-fill.png";
import russian from "../../Assets/Logo/russian-full.png";
import russianFill from "../../Assets/Logo/russian-fill.png";
import "./Price.scss";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-tables";
import { Link } from "react-router-dom";

class Price extends React.Component {
  render() {
    return (
      <PricingTable className="price">
        <Link to="/book-appointment" className="price-link">
          <PricingSlot
            onClick={this.submit}
            buttonText="Book Appointment"
            title="Classic Full Set"
            priceText="$80"
            className="price-info"
          >
            <img className="price-img" src={classic} alt="classic-lashes" />

            <PricingDetail>
              {" "}
              <b>(60 - 90</b> min)
            </PricingDetail>
            <PricingDetail> Approximately 70-80 lashes per eye </PricingDetail>
            <PricingDetail>
              {" "}
              They are the perfect starting point for first-time wearers of
              eyelash extensions and are most popular for everyday wear{" "}
            </PricingDetail>
            <PricingDetail> Silk, Faux-mink or Flat Lash</PricingDetail>
          </PricingSlot>

          <PricingSlot
            onClick={this.submit}
            buttonText="Book Appointment"
            title="Hybrid Full Set"
            priceText="$100"
            className="price-info"
          >
            <img className="price-img" src={hybrid} alt="fill" />
            <PricingDetail>
              {" "}
              <b>(120</b> min)
            </PricingDetail>
            <PricingDetail>
              {" "}
              A 50/50 mix of classic and Russian Volume
            </PricingDetail>
            <PricingDetail>
              {" "}
              Hybrid is most popular in a messy, staggered style that flatters
              the eye and adds some fabulousness to your look.
            </PricingDetail>
            <PricingDetail> Silk, Faux-mink or Flat Lash</PricingDetail>
          </PricingSlot>
          <PricingSlot
            onClick={this.submit}
            buttonText="Book Appointment"
            title="Volume Full Set"
            priceText="$120"
            className="price-info"
          >
            <img className="price-img" src={volume} alt="volume-lashes" />
            <PricingDetail>
              {" "}
              <b>(120</b> min)
            </PricingDetail>
            <PricingDetail>
              {" "}
              Approximately 200 – 300 lashes per eye{" "}
            </PricingDetail>
            <PricingDetail>
              {" "}
              A very natural look - can be applied to 2/3 eye for winged effect.{" "}
            </PricingDetail>
            <PricingDetail> Silk, Faux-mink or Flat Lash</PricingDetail>
          </PricingSlot>
          <PricingSlot
            onClick={this.submit}
            buttonText="Book Appointment"
            title="Russian Full Set"
            priceText="$200"
            className="price-info"
          >
            <img className="price-img" src={russian} alt="russian-lashes" />
            <PricingDetail>
              <b>(180</b> min)
            </PricingDetail>
            <PricingDetail> Up to 600 lashes per eye </PricingDetail>
            <PricingDetail>
              {" "}
              Think fans (2-3 lashes per fan) delicately placed along your lash
              line for a full but soft look.
            </PricingDetail>
            <PricingDetail> Silk, Faux-mink or Flat Lash</PricingDetail>
          </PricingSlot>

          <PricingTable highlightColor="#515355">
            <PricingSlot
              onClick={this.submit}
              buttonText="Book Appointment"
              title="Classic Fill"
              priceText="$60"
              className="price-info"
            >
              <img className="price-img" src={classicFill} alt="fill" />
              <PricingDetail>
                {" "}
                <b>(60</b> min)
              </PricingDetail>
            </PricingSlot>

            <PricingSlot
              onClick={this.submit}
              buttonText="Book Appointment"
              title="Hybrid Fill"
              priceText="$80"
              className="price-info"
            >
              <img className="price-img" src={hybridFill} alt="fill" />
              <PricingDetail>
                {" "}
                <b>(90</b> min) projects
              </PricingDetail>
            </PricingSlot>

            <PricingSlot
              onClick={this.submit}
              buttonText="Book Appointment"
              title="Volume Fill"
              priceText="$100"
              className="price-info"
            >
              <img className="price-img" src={volumeFill} alt="fill" />
              <PricingDetail>
                {" "}
                <b>(90</b> min)
              </PricingDetail>
            </PricingSlot>

            <PricingSlot
              onClick={this.submit}
              buttonText="Book Appointment"
              title="Russian Fill"
              priceText="$150"
              className="price-info"
            >
              <img className="price-img" src={russianFill} alt="fill" />
              <PricingDetail>
                {" "}
                <b>(120</b> min)
              </PricingDetail>
            </PricingSlot>
          </PricingTable>
        </Link>
      </PricingTable>
    );
  }
}
export default Price;
