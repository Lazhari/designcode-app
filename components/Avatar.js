import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name =>
      dispatch({
        type: 'UPDATE_NAME',
        name
      })
  };
}

class Avatar extends Component {
  state = {
    photo: 'https://cl.ly/9621d769ff2c/download/avatar-default.jpg'
  };

  componentDidMount() {
    const { updateName } = this.props;
    fetch('https://uinames.com/api/?ext&gender=female')
      .then(response => response.json())
      .then(response => {
        this.setState({ photo: response.photo });
        updateName(response.name);
      });
  }

  render() {
    const { photo } = this.state;
    return <Image source={{ uri: photo }} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: grey;
`;
