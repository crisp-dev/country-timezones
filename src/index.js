"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**************************************************************************
 * IMPORTS
 ***************************************************************************/

var dataForCountries = require("./data/countries.js");

var getCountryTimezones = function(code) {
  return dataForCountries[code.toUpperCase()];
};

/**************************************************************************
 * EXPORTS
 ***************************************************************************/

exports.getCountryTimezones = getCountryTimezones;

exports.countries = dataForCountries;

exports.default = {
  getCountryTimezones: getCountryTimezones,
};