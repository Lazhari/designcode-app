import React, { Component } from 'react';
import styled from 'styled-components';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'expo';
import { connect } from 'react-redux';

import MenuItem from './MenuItem';

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () =>
      dispatch({
        type: 'CLOSE_MENU'
      })
  };
}

const { height: screenHeight } = Dimensions.get('window');

class Menu extends Component {
  state = {
    top: new Animated.Value(screenHeight)
  };

  componentDidMount() {
    this.toggleMenu();
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    const { action } = this.props;
    const { top } = this.state;
    if (action === 'openMenu') {
      Animated.spring(top, {
        toValue: 54
      }).start();
    }
    if (action === 'closeMenu') {
      Animated.spring(top, {
        toValue: screenHeight
      }).start();
    }
  };

  render() {
    const { top } = this.state;
    const { closeMenu } = this.props;
    return (
      <AnimatedContainer style={{ top }}>
        <Cover>
          <Image source={require('../assets/background2.jpg')} />
          <Title>Med Lazhari</Title>
          <Subtitle>JavaScript Expert</Subtitle>
        </Cover>
        <TouchableOpacity
          onPress={closeMenu}
          style={{
            position: 'absolute',
            top: 120,
            left: '50%',
            marginLeft: -22,
            zIndex: 1
          }}
        >
          <CloseView>
            <Icon.Ionicons name="ios-close" size={44} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>

        <Content>
          {items.map(item => (
            <MenuItem {...item} key={item.title} />
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;
const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;
const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
  padding: 50px;
`;

const items = [
  {
    icon: 'ios-settings',
    title: 'Account',
    text: 'settings'
  },
  {
    icon: 'ios-card',
    title: 'Billing',
    text: 'payments'
  },
  {
    icon: 'ios-compass',
    title: 'Learn React',
    text: 'start course'
  },
  {
    icon: 'ios-exit',
    title: 'Log out',
    text: 'see you soon!'
  }
];
