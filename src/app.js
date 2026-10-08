const stripe = require('stripe')('~[STRIPE_SECRET_KEY_0]~');
const jwt    = require('jsonwebtoken');

const JWT_SECRET     = 'my-ultra-secret-jwt-signing-key-do-not-share';
const INTERNAL_TOKEN = '~[JS_HARDCODED_SECRET_0]~';
const DB_PASSWORD    = '~[URL_EMBEDDED_PASSWORD_0]~';

module.exports = { stripe, JWT_SECRET };
