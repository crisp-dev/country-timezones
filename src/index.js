"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**************************************************************************
 * IMPORTS
 ***************************************************************************/

var dataForCountries = require("./data/countries.json");

var getCountryTimezones = function(code) {
  if (dataForCountries[code.toUpperCase()]) {
    return dataForCountries[code.toUpperCase()].timezones;
  }

  return null;
};

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

exports.getCountryTimezones = getCountryTimezones;

exports.countries = dataForCountries;

exports.default = {
  getCountryTimezones: getCountryTimezones,
};