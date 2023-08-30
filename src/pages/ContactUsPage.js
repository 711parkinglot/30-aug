import React from "react";
import Card from "../components/Card";
import "./ContactUsPage.css";
import { GoogleMap, LoadScript } from "react-google-maps";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

function ContactUsPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <div className="contact-cards">
        <Card title="Location">
          <p>124 Conch St., Bikini Bottom, Pacific Ocean</p>
        </Card>
        <Card title="Contact Number">
          <p>555-2368</p>
        </Card>
        <Card title="Email Id">
          <p>lknope@pawneeparks.gov</p>
        </Card>
      </div>
      <div>
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          />
        </LoadScript>
      </div>
    </div>
  );
}

export default ContactUsPage;
