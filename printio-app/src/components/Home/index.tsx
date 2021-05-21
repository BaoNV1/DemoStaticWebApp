import OFUtils from 'commons/OFUtils';
import { MainRouterUser } from 'configs/routingUser';
import { MainRouterAdmin } from 'configs/routingAdmin';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'views/Layout/Layout';

export default class HomeCP extends Component<IHome> {
    constructor(props: IHome){
      super(props);
    }

    render() {
      document.body.style.background = 'url() no-repeat center center';
      const mode = OFUtils.getModeDisplay();
      return (
        // this.getLayout
        <Layout>
              { mode == 'user' &&
                <MainRouterUser />
              }
              {mode != 'user' &&
                <MainRouterAdmin />
              }
            {/* // Add compoent children */}
          </Layout>
      );
    }
  }
interface IHome {
    isLogin: boolean
}
const mapStateToProps = (state: any) => {
    return {
        isLogin: state.common.isLoggedIn,
    };
};
export const Home = connect(mapStateToProps)(HomeCP);