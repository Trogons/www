import styled from "styled-components";

import Logo from "../assets/logo.svg";
import Email from "../assets/email.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";

// TODO: add structure

const Footer = props => {
  return (
    <div>
      <img src={Logo} />
      <div>
        <a href="mailto:usctrogons@gmail.com">
          <img src={Email} />
        </a>
        <a href="https://www.facebook.com/Trogons/" target="_blank">
          <img src={Facebook} />
        </a>
        <a href="https://www.instagram.com/trogonsacappella/" target="_blank">
          <img src={Instagram} />
        </a>
      </div>
      <p>Trogons 2020 &copy;</p>
    </div>
  );
};

export default Footer;
