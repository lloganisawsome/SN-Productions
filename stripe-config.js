/*
  STRIPE SETUP — replace each placeholder below with a Stripe Payment Link.

  In Stripe Dashboard:
  1. More > Payment links > New
  2. Make fixed-price links for $5, $10, $15, and $20.
  3. Make one separate link with "Customers choose what to pay" enabled.
     Set its minimum to $5.01 (or higher). Paste that link as custom.

  Payment Links look like: https://buy.stripe.com/xxxxxxxx
  Never put a Stripe secret key in this file or anywhere in the website.
*/
window.SN_TIP_CONFIG = Object.freeze({
  currency: "USD",
  minimumCustomTip: 5.01,
  links: {
    5: "https://buy.stripe.com/test_00w4gBcsCge90HRc8QcEw02",
    10: "https://buy.stripe.com/test_fZu7sNgIS3rn3U35KscEw01",
    15: "https://buy.stripe.com/test_cNi6oJ2S2e614Y7dcUcEw03",
    20: "https://buy.stripe.com/test_14A14p3W68LHgGP0q8cEw04",
    custom: "https://buy.stripe.com/test_eVqdRbboy1jf1LV2ygcEw05"
  }
});
