import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Geocode from "react-geocode";
import { toast } from "react-toastify";
import { Col, Row, Input } from "antd";
import Button from "@/components/elements/button";
import Linked from "@/components/elements/linked";
import Image from "next/image";
import icons from "@/icons";
import { setUserGeoLocation, setScale } from "@/store/reducers/globalReducer";
import {
  getFromStorage,
  setToStorage,
  getLatLngFromAddress,
} from "@/utils/common";
import LocationSelector from "@/components/elements/LocationSelector";

const Hero = () => {
  const { scale } = useSelector((state) => state.globalReducer);

  const dispatch = useDispatch();
  const [locationLoading, setLocationLoading] = useState(false);
  const [enteredLocationModal, setEnteredLocationModal] = useState(false);

  const [address, setAddress] = useState(
    getFromStorage("address") !== null &&
      getFromStorage("address") !== undefined
      ? JSON.parse(getFromStorage("address"))
      : ""
  );

  useEffect(() => {
    // timed so it appears after page load
    setTimeout(function () {
      fetchLocalStorages();
      allowUserLocationPermission();
    }, 1500);
  }, []);

  const fetchLocalStorages = async () => {
    const _address = JSON.parse(getFromStorage("address"));
    if (_address) {
      dispatch(setUserGeoLocation(await getLatLngFromAddress(_address)));
    } else {
      setEnteredLocationModal(true);
    }
  };

  const allowUserLocationPermission = () => {
    if (navigator.geolocation) {
      getUserCurrentLocation();
      // navigator.permissions
      //   .query({ name: "geolocation" })
      //   .then(function (result) {
      //     if (result.state === "granted") {
      //       console.log("location granted...", result.state);
      //       getUserCurrentLocation();
      //     } else if (result.state === "prompt") {
      //       console.log("location prompt...", result.state);
      //     } else if (result.state === "denied") {
      //       console.log("location denied...", result.state);
      //       toast(
      //         "Please allow your Geolocation for better usage or enter your location.",
      //         {
      //           type: "error",
      //         }
      //       );
      //     }
      //     result.onchange = function () {
      //       console.log(result.state);
      //     };
      //   });
    } else {
      toast("Sorry geolocation not available!", {
        type: "error",
      });
    }
  };

  const getUserCurrentLocation = (isCurrentLocation = false) => {
    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      function (position) {
        let lat = parseFloat(position.coords.latitude);
        let lng = parseFloat(position.coords.longitude);
        let geoLocation = {
          lat,
          lng,
        };
        Geocode.fromLatLng(lat, lng).then(
          (response) => {
            setLocationLoading(false);
            const adr = response.results[0].formatted_address;
            if (address === "" || address === null || isCurrentLocation) {
              setToStorage("address", JSON.stringify(adr));
              setAddress(adr);
              dispatch(setUserGeoLocation(geoLocation));
            }
          },
          (error) => {
            console.error("Geocode error..", error);
            toast(error.message, {
              type: "error",
              position: "top-center",
              autoClose: 7000,
            });
            setLocationLoading(false);
          }
        );
      },
      function (error) {
        console.log("Error Code = " + error.code + " - " + error.message);
        // toast("Please allow your Geolocation for better usage.", {
        //   type: "error",
        //   position: "top-center",
        //   autoClose: 7000,
        // });
        setLocationLoading(false);
        if (error.code) {
          console.log("error...", error);
        }
      }
    );
  };

  const getCityNameFromAddress = (adr) => {
    if (adr) {
      var value = adr.split(",");

      let count = value.length;
      let country = value[count - 1];
      let state = value[count - 2];
      let city = value[count - 3];
      // console.log("country...state...city...", country, state, city);
      // setCountry(country);
      if (!scale) {
        if (country === "USA") {
          setToStorage("scale", "mi");
          dispatch(setScale("mi"));
        } else if (country === "Canada") {
          setToStorage("scale", "km");
          dispatch(setScale("km"));
        } else {
          setToStorage("scale", "mi");
          dispatch(setScale("mi"));
        }
      }
    }
  };

  const handleChangeLocation = async (value) => {
    setAddress(value);
    if (value) {
      dispatch(setUserGeoLocation(await getLatLngFromAddress(value)));
      handleSaveLocation(value);
    }
  };

  const handleSelectLocation = async (value) => {
    setAddress(value);
    if (value) {
      dispatch(setUserGeoLocation(await getLatLngFromAddress(value)));
      handleSaveLocation(value);
    }
  };

  const handleSaveLocation = async (value) => {
    setToStorage("address", JSON.stringify(value));
    getCityNameFromAddress(value);
  };

  return (
    <div className="hero-banner-section">
      <div className="hero-banner-wrapper-main">
        <div className="custom-container">
          <Row gutter={0}>
            <Col xxl={19} xl={19} lg={19} md={24} xs={24}>
              <div className="hero-banner-wrapper">
                <div className="hero-banner-content-box">
                  <div className="banner-text-content">
                    <h1 className="banner-title">
                      Your Trusted Partner for The{" "}
                      <span className="lang-event color-text">Tamil</span>{" "}
                      Community
                    </h1>
                    <p className="banner-description">
                      Search for a service is free and easy – it only takes a
                      few simple steps! Find the best service for your needs.
                    </p>
                    <Image
                      className="banner-shape"
                      src="/image/banner-shape.svg"
                      alt="shape image"
                      width={63}
                      height={156}
                    />
                  </div>
                  <div className="banner-search-widgets">
                    <div className="category-search-widgets-box">
                      <Input
                        Text
                        size="large"
                        placeholder="Type here"
                        prefix={<icons.HiOutlineLightBulb />}
                      />
                      <LocationSelector
                        value={address}
                        placeholder="Location"
                        onChange={handleChangeLocation}
                        onSelect={handleSelectLocation}
                      />
                      <Button
                        butVerient="button-secondary banner-search-button"
                        btnText="Search"
                        btnsIcon={<icons.AiOutlineSearch />}
                      />
                    </div>
                    <p className="category-suggetion-list">
                      <span className="title">{`What's popular:`}</span>{" "}
                      <Linked href={"/"} title="Pool" />,
                      <Linked href={"/"} title="Movers" />,
                      <Linked href={"/"} title="Landscaping" />,
                      <Linked href={"/"} title="Locksmiths" />,
                      <Linked href={"/"} title="Plumbers" />,
                      <Linked href={"/"} title="Painters" />
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Hero;
