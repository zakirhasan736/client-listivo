import React from "react";
// GOOGLE APIS
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { CrossIcon, CurrentLocation, LocationIcon } from "../../assets/icons";

function LocationSelector({
  getUserCurrentLocation,
  handleClearLocationFiled,
  placeholder = "Enter your location here...",
  ...rest
}) {
  return (
    <div className="location-field">
      <div className="icon">
        <LocationIcon />
      </div>
      <PlacesAutocomplete
        onError={(error) => console.log("Error....", error)}
        onLoadFailed={(error) => console.log("Load failed...", error)}
        {...rest}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (
            <div style={{ width: "100%" }}>
              <input
                {...getInputProps({
                  placeholder: placeholder,
                  className: "iput",
                  autoFocus: false,
                })}
              />
              {suggestions?.length > 0 && (
                <div className="autocomplete-dropdown-container">
                  {suggestions.map((suggestion, i) => {
                    const className = "suggestion-item";
                    return (
                      <div
                        key={i}
                        {...getSuggestionItemProps(suggestion, {
                          className,
                        })}
                      >
                        <span id="list_places">{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        }}
      </PlacesAutocomplete>
      {/* <button
        name="bilal1"
        aria-label="cross_button"
        className="cross-btn"
        onClick={handleClearLocationFiled}
      >
        <CrossIcon />
      </button> */}
    </div>
  );
}

export default LocationSelector;
