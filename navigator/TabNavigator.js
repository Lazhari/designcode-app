import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { Icon } from 'expo';

import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';
import CoursesScreen from '../screens/CoursesScreen';
import ProjectsScreen from '../screens/ProjectsScreen';

const activeColor = '#4775f2';
const inactiveColor = '#b8bece';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Section: SectionScreen
  },
  {
    mode: 'modal'
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  const { routeName } = navigation.state.routes[navigation.state.index];
  if (routeName === 'Section') {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <Icon.Ionicons
        name="ios-home"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};

const CourseStack = createStackNavigator({
  Courses: CoursesScreen
});

CourseStack.navigationOptions = {
  tabBarLabel: 'Course',
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-albums"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const ProjectStack = createStackNavigator({
  Projects: ProjectsScreen
});

ProjectStack.navigationOptions = {
  tabBarLabel: 'Projects',
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-folder"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  CourseStack,
  ProjectStack
});

export default TabNavigator;
