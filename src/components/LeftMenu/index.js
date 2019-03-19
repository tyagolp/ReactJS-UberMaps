import React, { Component } from 'react';

import './styles.css';

class LeftMenu extends Component {
  state = {
    user: [
      {
        id: 0,
        login: '',
        icon: '',
        icon_desc: '',
      },
    ],
  };

  render() {
    // const { user } = this.props;
    return (
      <div className="leftmenu">
        {this.state.user.map(dev => (
          <div key={dev.id}>
            <div>
              <img href={dev.icon} alt={dev.icon_desc} />
            </div>
            <div>
              <strong />
              <span />
            </div>
            <div>
              <button type="button" onClick={() => {}}>
                <i className="fa fa-fw fa-times-circle remove" />
              </button>
              <a href={`https://github.com/${dev.login}`} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-fw fa-angle-right go-to-page" />
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default LeftMenu;
