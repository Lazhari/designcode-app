import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components';

import { NotificationIcon } from './components/Icons';
import Card from './components/Card';
import Logo from './components/Logo';

export default class App extends React.Component {
	render() {
		return (
			<Container>
				<SafeAreaView>
					<ScrollView>
						<TitleBar>
							<Avatar source={require('./assets/avatar.jpg')} />
							<Title>Welcome Back,</Title>
							<Name>Med</Name>
							<NotificationIcon
								style={{ position: 'absolute', right: 20, top: 5 }}
							/>
						</TitleBar>
						<ScrollView
							style={{
								flexDirection: 'row',
								padding: 20,
								paddingLeft: 12,
								paddingTop: 30
							}}
							horizontal
							showsHorizontalScrollIndicator={false}
						>
							<Logo
								image={require('./assets/logo-framerx.png')}
								text="FramerX"
							/>
							<Logo image={require('./assets/logo-figma.png')} text="Figma" />
						</ScrollView>
						<Subtitle>Continue Learning</Subtitle>
						<ScrollView
							horizontal
							style={{ paddingBottom: 30 }}
							showsHorizontalScrollIndicator={false}
						>
							<Card
								title="Styled Components"
								image={require('./assets/background2.jpg')}
								caption="React Native"
								subtitle="5 of 12 Sections"
								logo={require('./assets/logo-react.png')}
							/>
							<Card
								title="Styled Components 2"
								image={require('./assets/background1.jpg')}
								caption="React Native"
								subtitle="5 of 12 Sections"
								logo={require('./assets/logo-react.png')}
							/>
						</ScrollView>
					</ScrollView>
				</SafeAreaView>
			</Container>
		);
	}
}

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
`;

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

const Avatar = styled.Image`
	width: 44px;
	height: 44px;
	background: black;
	border-radius: 22px;
	margin-left: 20px;
	position: absolute;
	top: 0;
	left: 0;
`;
