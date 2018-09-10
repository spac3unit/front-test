import styled from 'styled-components';
import React, { Component } from 'react';
import {
 Box, Image, Text, Button as ButtonRebass 
} from 'rebass';

export const ActionButton = ({ img, text, px }) => (
  <Button px={px}>
    <Icon img={img} />
    <Box style={{ display: 'flex', flexDirection: 'column' }}>
      <Text fontFamily="Roboto" fontSize="10px">
        Download free
      </Text>
      <Text fontFamily="Rubik" fontSize="15px" fontWeight="medium">
        {text}
      </Text>
    </Box>
  </Button>
);

const Icon = styled.i`
  display: inline-block;
  height: 26px;
  width: 26px;
  margin-right: 10px;
  background-image: ${props => `url(${props.img})`};
  background-repeat: no-repeat;
`;

const Button = styled(ButtonRebass)`
  display: flex;
  flex-direction: row;
  max-width: 150px;
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
  text-decoration: none;
  touch-action: manipulation;
  cursor: pointer;
  &:hover {
  }
`;
