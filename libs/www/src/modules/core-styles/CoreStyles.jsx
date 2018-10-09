import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Breadcrumb from '@cwds/components/lib/Breadcrumbs';
import Card from '@cwds/components/lib/Cards';
import { Container } from '@cwds/components/lib/Grid';

export default () => {
  return (
    <div>
      <AppBar />
      <PageHeader title="Core Style" />
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Core Style</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Container>
        <Card>
          <Card.Header>
            <Card.Title>Type</Card.Title>
          </Card.Header>
          <Card.Body>
            <h1>Heading 1 (Page Title)</h1>
            <h2>Heading 2 (Header)</h2>
            <h3>Heading 3 (Title)</h3>
            <h4>Heading 4 (Subheader)</h4>
            <div>Regular</div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Inline Text Elements</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>
              You can use the mark tag to <mark>highlight</mark> text.
            </p>
            <p>
              <del>
                This line of text is meant to be treated as deleted text.
              </del>
            </p>
            <p>
              <s>
                This line of text is meant to be treated as no longer accurate.
              </s>
            </p>
            <p>
              <ins>
                This line of text is meant to be treated as an addition to the
                document.
              </ins>
            </p>
            <p>
              <u>This line of text will render as underlined</u>
            </p>
            <p>
              <small>
                This line of text is meant to be treated as fine print.
              </small>
            </p>
            <p>
              <strong>This line rendered as bold text.</strong>
            </p>
            <p>
              <em>This line rendered as italicized text.</em>
            </p>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Lists</Card.Title>
          </Card.Header>
          <Card.Body>
            <ul className="list-unstyled">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>
                Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </Card.Body>
        </Card>

        <p>alskdjfalksdjf....</p>
        <h2>Spacing</h2>
        <p>alksjdflaksdjf</p>
        <h2>Colors</h2>
        <p>Something about colors...</p>
      </Container>
    </div>
  );
};
