//

import * as React from "react";
import cn from "classnames";
import { Container, Grid, Nav } from "tabler-react";


const SiteNav = ({
  children,
  items,
  itemsObjects,
  withSearchForm = true,
  rightColumnComponent,
  fluid = false,
  collapse = true,
  routerContextComponentType,
}) => {

  const classes = cn("header d-lg-flex p-0", { collapse });

  return (
    <div className={classes}>
      <div className={(fluid ? 'container' : 'container-fluid')}>
        {children || (
          <Grid.Row className="align-items-center">
            <Grid.Col className="col-lg order-lg-first">
              <Nav
                tabbed
                className="border-0 flex-column flex-lg-row"
                items={items}
                itemsObjects={itemsObjects}
                routerContextComponentType={routerContextComponentType}
              />
            </Grid.Col>
          </Grid.Row>
        )}
      </div>
    </div>
  );
};

SiteNav.displayName = "Site.Nav";

export default SiteNav;
