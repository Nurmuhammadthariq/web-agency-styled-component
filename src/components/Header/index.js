import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';

const Headers = styled.header``;

const Header = () => {
  return (
    <Headers>
      <div>
        <img src={logo} alt="" />
        <h3>CodeAgency</h3>
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">
          <button>Contact Us</button>
        </a>
      </nav>
    </Headers>
  );
};

export default Header;
