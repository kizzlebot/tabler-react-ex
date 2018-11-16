//

import * as React from "react";
import { Page, Site, Container, Notification, AccountDropdown } from "tabler-react";
import SiteNav from './SiteNav.react';
// import WrapperHeader from './WrapperHeader.react';








/**
 * The very top header bar of your website, containing the logo and some optional
 * action components, such as a NotificationTray or an AccountDropdown on the right hand side
 */
const WrapperHeader = ({
  children,
  href,
  align = 'container',
  fluid = false,
  imageURL,
  alt,
  notificationsTray: notificationsTrayFromProps,
  accountDropdown: accountDropdownFromProps,
  navItems,
  navItemsLeft,
  onMenuToggleClick,
}) => {


  return (
    <div className="header py-0">
      <div className={(fluid ? 'container' : 'container-fluid')}>
        <div className="d-flex align-items-center">
          {children || (
            <React.Fragment>
              <Site.Logo href={href} alt={alt} src={imageURL} />
              {navItemsLeft && <div className="d-flex order-lg-2 mr-auto">
                {navItemsLeft}
              </div>}
              <div className="d-flex order-lg-2 ml-auto">
                {navItems}
                <Notification.Tray {...notificationsTrayFromProps} />
                <AccountDropdown {...accountDropdownFromProps} />
              </div>

              <button className="header-toggler d-lg-none ml-3 ml-lg-0" onClick={onMenuToggleClick} >
                <span className="header-toggler-icon" />
              </button>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

WrapperHeader.displayName = "Site.Header";






export default class SiteWrapper extends React.PureComponent {
  static displayName = "Site.Wrapper";

  state = {
    collapseMobileMenu: true,
  };

  handleCollapseMobileMenu = () => {
    this.setState(s => ({ collapseMobileMenu: !s.collapseMobileMenu }));
  };

  render() {
    const {
      headerProps,
      navProps,
      footerProps,
      children,
      routerContextComponentType,
    } = this.props;

    return (
      <Page>
        <Page.Main>
          <WrapperHeader {...{ ...headerProps, onMenuToggleClick: this.handleCollapseMobileMenu }} />
          {/* <SiteNav {...{ ...navProps, collapse: this.state.collapseMobileMenu, routerContextComponentType }} /> */}
          {children}
        </Page.Main>

        <Site.Footer {...footerProps} />
      </Page>
    );
  }
}




