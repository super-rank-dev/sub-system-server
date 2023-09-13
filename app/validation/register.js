const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.commsPercent = !isEmpty(data.commsPercent) ? data.commsPercent : '';
    data.country = !isEmpty(data.country) ? data.country : '';
    data.currency = !isEmpty(data.currency) ? data.currency : '';
    // data.datetime = !isEmpty(data.datetime) ? data.datetime : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
    data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
    data.maxAllowedBet = !isEmpty(data.maxAllowedBet) ? data.maxAllowedBet : '';
    data.mobileNumber = !isEmpty(data.mobileNumber) ? data.mobileNumber : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    // data.sponsorId = !isEmpty(data.sponsorId) ? data.sponsorId : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.username = !isEmpty(data.username) ? data.username : '';
    data.walletBalance = !isEmpty(data.walletBalance) ? data.walletBalance : '';

    if (Validator.isEmpty(data.commsPercent)) errors.commsPercent = 'commsPercent field is required';
    if (Validator.isEmpty(data.country)) errors.country = 'country field is required';
    if (Validator.isEmpty(data.currency)) errors.currency = 'currency field is required';
    // if (Validator.isEmpty(data.datetime)) errors.datetime = 'datetime field is required';
    if (!Validator.isEmail(data.email)) errors.email = 'email is invalid';
    if (Validator.isEmpty(data.email)) errors.email = 'email field is required';
    if (Validator.isEmpty(data.firstName)) errors.firstName = 'firstName field is required';
    if (Validator.isEmpty(data.lastName)) errors.lastName = 'lastName field is required';
    if (Validator.isEmpty(data.maxAllowedBet)) errors.maxAllowedBet = 'maxAllowedBet field is required';
    if (Validator.isEmpty(data.mobileNumber)) errors.mobileNumber = 'mobileNumber field is required';
    if (Validator.isEmpty(data.password)) errors.password = 'password field is required';
    // if (Validator.isEmpty(data.sponsorId)) errors.sponsorId = 'sponsorId field is required';
    if (Validator.isEmpty(data.status)) errors.status = 'status field is required';
    if (Validator.isEmpty(data.username)) errors.username = 'username field is required';
    if (Validator.isEmpty(data.walletBalance)) errors.walletBalance = 'walletBalance field is required';

    return {
        errors,
        isValid: isEmpty(errors)
    };
};