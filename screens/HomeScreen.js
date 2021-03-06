import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar
} from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";

import { NotificationIcon } from "../components/Icons";
import Card from "../components/Card";
import Logo from "../components/Logo";
import Course from "../components/Course";
import Menu from "../components/Menu";
import Avatar from "../components/Avatar";
import CardsQuery from "../components/CardsQuery";
import CoursesQuery from "../components/CoursesQuery";

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}

function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    const { action } = this.props;
    const { scale, opacity } = this.state;
    if (action === "openMenu") {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(opacity, {
        toValue: 0.5
      }).start();
      StatusBar.setBarStyle("light-content", true);
    }
    if (action === "closeMenu") {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(opacity, {
        toValue: 1
      }).start();
      StatusBar.setBarStyle("dark-content", true);
    }
  };

  render() {
    const { opacity, scale } = this.state;
    const { openMenu, name, navigation } = this.props;
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale }],
            opacity
          }}
        >
          <SafeAreaView>
            <ScrollView>
              <TitleBar>
                <TouchableOpacity
                  style={{ position: "absolute", top: 0, left: 20 }}
                  onPress={openMenu}
                >
                  <Avatar />
                </TouchableOpacity>
                <Title>Welcome Back,</Title>
                <Name>{name}</Name>
                <NotificationIcon
                  style={{ position: "absolute", right: 20, top: 5 }}
                />
              </TitleBar>
              <ScrollView
                style={{
                  flexDirection: "row",
                  padding: 20,
                  paddingLeft: 12,
                  paddingTop: 30
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {logos.map(logo => (
                  <Logo {...logo} key={logo.text} />
                ))}
              </ScrollView>
              <Subtitle>Continue Learning</Subtitle>
              <ScrollView
                horizontal
                style={{ paddingBottom: 30 }}
                showsHorizontalScrollIndicator={false}
              >
                <CardsQuery>
                  {({ loading, error, data }) => {
                    if (loading) {
                      return <Message>Loading...</Message>;
                    }
                    if (error) {
                      return <Message>Error...</Message>;
                    }
                    const { cards } = data;
                    return cards.map(card => (
                      <TouchableOpacity
                        key={card.id}
                        onPress={() =>
                          navigation.navigate("Section", {
                            section: card
                          })
                        }
                      >
                        <Card {...card} />
                      </TouchableOpacity>
                    ));
                  }}
                </CardsQuery>
              </ScrollView>
              <Subtitle>Popular Courses</Subtitle>
              <CoursesQuery>
                {({ loading, error, data }) => {
                  if (loading) {
                    return <Message>Loading...</Message>;
                  }
                  if (error) {
                    return <Message>Error...</Message>;
                  }
                  const { courses } = data;
                  return courses.map(course => (
                    <Course {...course} key={course.id} />
                  ));
                }}
              </CoursesQuery>
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Message = styled.Text`
  margin: 20px;
  color: #b8bece;
  font-size: 15px;
  font-weight: 500;
`;
const logos = [
  {
    image: require("../assets/logo-framerx.png"),
    text: "Framer X"
  },
  {
    image: require("../assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("../assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("../assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("../assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("../assets/logo-sketch.png"),
    text: "Sketch"
  }
];
