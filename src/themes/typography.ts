export default {
  htmlFontSize: 16,
  fontFamily: [
    "Lato",
    "Roboto",
    "Arial",
    "sans-serif",
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  // h1: {
  //   fontSize: "3rem",
  //   fontWeight: 900,
  // },
  // h2: {
  //   fontSize: "2rem",
  //   fontWeight: 900,
  // },
  // h3: {
  //   fontSize: "1.64rem",
  // },
  // h4: {
  //   fontSize: "1.5rem",
  // },
  // h5: {
  //   fontSize: "1.285rem",
  // },
  // h6: {
  //   fontSize: "1.142rem",
  // },
  h1: {
    fontWeight: 900,
    fontSize: "3rem",
    letterSpacing: "-0.24px",
    "@media (min-width:600px)": {
      fontSize: "2.5rem",
    },
    "@media (min-width:900px)": {
      fontSize: "3.0rem",
    },
    "@media (min-width:1200px)": {
      fontSize: "3.5rem",
    },
  },
  h2: {
    fontWeight: 900,
    fontSize: "2rem",
    letterSpacing: "-0.24px",
    "@media (min-width:600px)": {
      fontSize: "2rem",
    },
    "@media (min-width:900px)": {
      fontSize: "2.5rem",
    },
    "@media (min-width:1200px)": {
      fontSize: "3rem",
    },
  },
  h3: {
    fontSize: "1.64rem",
  },
  h4: {
    fontSize: "1.5rem",
  },
  h5: {
    fontSize: "1.285rem",
  },
  h6: {
    fontSize: "1.142rem",
  },
  subtitle1: {
    fontSize: "1.3rem",
  },
  body1: {
    fontSize: "1.1rem",
  },
};
