import Geocode from "react-geocode";

const parse = (data) => {
  return JSON.parse(data);
};

const keyCodes = {
  ENTER: 13,
};

const keyupListener = (e, keyCode, callback) => {
  var key = e.which || e.keyCode;
  key === keyCode && callback();
};

const isValidEmail = (e) => {
  let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return e.match(reg);
};

function isValidURL(string) {
  var res = string.match(
    /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
  );
  return res !== null;
}

const focus = (id) => {
  try {
    document.querySelector(id).focus();
  } catch (e) {}
};

// Get latitude & longitude from address.
const getLatLngFromAddress = (address) => {
  const geoLocation = Geocode.fromAddress(address).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      const _geoloc = {
        lat: lat,
        lng: lng,
      };
      return _geoloc;
    },
    (error) => {
      console.error(error);
    }
  );

  return geoLocation;
};

// Get Distance between two longitude and latitude.
const getDistance = (lat1, lon1, lat2, lon2) => {
  if (lat1 === lat2 && lon2 === lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344; //convert miles to km
    return dist;
  }
};

// Remove Duplicate from the array
function remove_duplicates_safe(arr) {
  var seen = {};
  var ret_arr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!(arr[i] in seen)) {
      ret_arr.push(arr[i].toLowerCase());
      seen[arr[i].toLowerCase()] = true;
    }
  }
  return ret_arr;
}

export {
  parse,
  keyCodes,
  keyupListener,
  isValidEmail,
  focus,
  isValidURL,
  getDistance,
  getLatLngFromAddress,
  remove_duplicates_safe,
};
