import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Map from '../../components/Map';
import LeftMenu from '../../components/LeftMenu/index';
// import { Container } from './styles';

import { Creators as DevActions } from '../../store/ducks/devs';

class Main extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <LeftMenu />
        <Map />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  devs: state.devs,
});
const mapDispatchToProps = dispatch => bindActionCreators(bindActionCreators(DevActions), dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
