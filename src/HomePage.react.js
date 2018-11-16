// @flow

import * as React from "react";

import {
  Page,
  Avatar,
  Icon,
  Grid,
  Card,
  Text,
  Table,
  Alert,
  Progress,
  colors,
  Dropdown,
  Button,
  StampCard,
  StatsCard,
  Container,
  ProgressCard,
  Badge,
} from "tabler-react";
import ReactSimpleMap from "./ReactSimpleMap";

import C3Chart from "react-c3js";
import cn from "classnames";
import SiteWrapper from "./SiteWrapper.react";

const PageHeader = Page.Header;
PageHeader.displayName = 'PageHeader';




function PageContent({
  className,
  children,
  title,
  subTitle,
  options,
  fluid = false
}) {
  const classes = cn("page-content", className);
  return (
    <div className={classes}>
      <div className={(fluid) ? 'container' : 'container-fluid'}>
        {(title || subTitle || options) && (
          <PageHeader title={title} subTitle={subTitle} options={options} />
        )}
        {children}
      </div>
    </div>
  );
}

PageContent.displayName = "Page.Content";





function Home() {
  return (
    <SiteWrapper>
      <PageContent title="Dashboard">
        <Grid.Row cards={true}>

          <Grid.Col lg={6}>
            <Card>
              <Card.Header>
                <Card.Title>Development Activity</Card.Title>
              </Card.Header>

              <Card.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quos nihil repellat praesentium expedita, ducimus nesciunt soluta magnam, maxime assumenda voluptatem doloribus ullam pariatur, sed similique officiis? Adipisci, quisquam iure?
                Veritatis distinctio iusto recusandae, porro et voluptate repudiandae ratione, assumenda deserunt cum laudantium provident enim numquam ullam illum fuga! Porro reprehenderit, quas sit saepe necessitatibus magnam veniam praesentium ipsam obcaecati!
                Mollitia odit quae laborum ad repellat nihil porro illum adipisci distinctio expedita incidunt earum quisquam animi cumque, laboriosam saepe error, ea delectus, eligendi totam laudantium soluta. Modi expedita velit ab?
                Doloremque non praesentium rerum eos optio maxime quae placeat qui modi vel commodi, nesciunt aut sint ipsam harum repudiandae consequatur vero, id tenetur aperiam neque eveniet voluptatum. Vel, iste numquam.
                Molestias rem fugit doloremque culpa! Doloremque nesciunt voluptate, harum odit quis eos blanditiis? Dolore, soluta! Ea praesentium, unde, repellendus inventore modi alias ut ipsa esse voluptates aperiam debitis, neque tenetur.
                Blanditiis esse optio nesciunt dicta quae explicabo, aliquam sapiente aut animi porro perferendis culpa enim libero distinctio ea alias! Nisi est ipsa fugiat, voluptatum explicabo magnam modi a tenetur consequatur!
                Impedit assumenda accusamus et laboriosam! Soluta voluptate maxime quas doloribus porro dignissimos, repellendus beatae consequatur voluptates totam quaerat et? Excepturi sed maxime mollitia id quam soluta officiis, consequatur quasi ratione?
                Odit doloremque blanditiis qui tenetur quidem porro numquam enim nemo maxime earum nostrum dolor nesciunt deserunt et aut nobis est quo facilis impedit perspiciatis illum id, officiis quae! Laudantium, assumenda.
                Voluptate mollitia aut nobis, voluptatum debitis consectetur? Accusamus blanditiis explicabo optio ratione laboriosam culpa placeat voluptate eum repudiandae accusantium mollitia, aperiam ducimus nesciunt ad laudantium? Tenetur molestias temporibus excepturi culpa?
                Recusandae, non est eum facere delectus ab officiis culpa corporis facilis, eligendi maxime! Reiciendis illo optio, alias consectetur nobis nemo, corrupti nostrum cumque vero iure doloribus, quo dolorem provident dolorum.
                Consequatur enim autem unde soluta, perferendis doloremque id temporibus veritatis illum amet obcaecati velit, ut, voluptas repellendus ipsam laboriosam alias iusto blanditiis hic natus quisquam vitae eum explicabo qui! Nisi.
                Dolorem adipisci laudantium nulla corrupti quaerat minima accusamus ab, quo, provident similique maxime! Odio et tempore, repellendus, facere enim consectetur at voluptatibus nobis assumenda, quae excepturi minus voluptates iusto provident.
                Odit consequuntur dicta ratione soluta, quibusdam et repudiandae iure, enim, deleniti sint ut reiciendis facilis est voluptatum optio. Modi doloremque corrupti aliquam sed natus sit consectetur neque ex autem possimus!
                Recusandae tempore harum error quos a numquam veritatis minus impedit alias architecto itaque officia commodi, reiciendis, expedita eaque nulla nihil? Nemo quia aliquam eveniet odit rem dolore modi dicta at.
                Voluptate tenetur veritatis accusamus aperiam cum, inventore veniam explicabo, facere, placeat atque obcaecati eos ratione reprehenderit esse illum perferendis dolor sit omnis deleniti voluptas soluta fuga! Accusantium iusto officia minima.
                Nam, soluta recusandae. Cupiditate esse quo minima. Voluptatibus sint aperiam officia? Dolor distinctio temporibus libero laborum ipsa minima reiciendis molestias quisquam? Esse error nisi adipisci commodi quidem. Delectus, reprehenderit repudiandae.
                Velit minima, iusto sapiente labore expedita maxime consectetur eius veniam tenetur corrupti ipsum voluptates eligendi, non voluptatem inventore magnam obcaecati delectus accusantium reiciendis natus tempore excepturi ipsa! Magnam, repudiandae eligendi.
                Odit eos eum facere alias sunt laudantium neque consectetur amet non, distinctio veritatis repudiandae, assumenda obcaecati tenetur et! Molestiae, quod? Quis reiciendis dolor tempore odio qui quam fuga? Repellat, delectus.
                Aliquid velit perspiciatis libero minus sint voluptas accusantium. Quidem non, enim nesciunt voluptatibus maxime voluptate aperiam provident sed facilis fugiat harum tempora doloremque, nobis voluptatum laboriosam dolores porro ipsum eum.
                Recusandae expedita voluptates, aut sunt maiores ullam suscipit nobis repellendus qui illo vel non commodi placeat, dignissimos ipsa perferendis cumque tenetur accusantium, quisquam blanditiis aspernatur optio distinctio corrupti ipsum. Voluptate.
              </Card.Body>
            </Card>
          </Grid.Col>


          <Grid.Col lg={6}>
            <Card title="World population map" body={<ReactSimpleMap />} />
          </Grid.Col>

        </Grid.Row>
      </PageContent>
    </SiteWrapper>
  );
}

export default Home;
