import React, { Component } from 'react';

import Page from './shared/Page';
import UserForm from './shared/UserForm';

import withAd from './hocs/withAd';

class LoginPage extends Component {

  render() {
    return (
      <Page  title="Log in">
        <img alt="another ad" src={this.props.ad.thumbnailUrl} width={100} />
        <UserForm submitValue="Log in!" />
      </Page>
    );
  }

}

export default withAd(LoginPage);
