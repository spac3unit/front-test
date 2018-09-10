import styled from 'styled-components';
import React, { Component } from 'react';
import { Box, Image, Text, Link, Button } from 'rebass';
import { device } from './devices';

export const ActionButton = ({ img, text, px }) => (
  <StyledButton px={px}>
    <Icon img={img} />
    <IconButtonTextWrapper>
      <Text fontFamily="Roboto" fontSize="10px">
        Download free
      </Text>
      <Text fontFamily="Rubik" fontSize="15px" fontWeight="medium">
        {text}
      </Text>
    </IconButtonTextWrapper>
  </StyledButton>
);

const IconButtonTextWrapper = styled(Box)`
  display: none;
  flex-direction: column;
  padding: 0 10px;

  @media ${device.tablet} {
    display: flex;
    }
`;

const Icon = styled.i`
  display: inline-block;
  height: 25px;
  width: 20px;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
`;

const StyledButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 10px;
  background: #424F61;
  border: 0;
  border-radius: 7px;
  color: #fff;
  text-align: left;
  cursor: pointer;
  outline: 0;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 10px;
  white-space: nowrap;
  cursor: pointer;
  transition: all .2s ease;
  &:hover {
     background: #224E61;
  }
`;
