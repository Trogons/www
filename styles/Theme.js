const Theme = {
  colors: {

  },
  fontSizes: {
    large: "48px",
    title: "32px",
    header: "20px",
    subheader: "18px",
    regular: "16px"
  },
  fontFamily: "Roboto, sans-serif",
  media: {
    desktop: style => `
      @media screen and (max-width: 960px) {
        ${style}
      }
    `,
    tablet: style => `
      @media screen and (max-width: 768px) {
        ${style}
      }
    `,
    mobile: style => `
      @media screen and (max-width: 425px) {
        ${style}
      }
    `
  }
}

export default Theme