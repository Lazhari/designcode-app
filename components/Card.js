import React from 'react';
import styled from 'styled-components';

const Card = ({ title, image, logo, caption, subtitle }) => (
  <Container>
    <Cover>
      <Image source={image} />
      <Title>{title}</Title>
    </Cover>
    <Content>
      <Logo source={logo} />
      <Wrapped>
        <Caption>{caption}</Caption>
        <Subtitle>{subtitle}</Subtitle>
      </Wrapped>
    </Content>
  </Container>
);

export default Card;

const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  height: 80px;
  align-items: center;
`;

const Wrapped = styled.View`
  margin-left: 10px;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 4px;
`;
