import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Logo from '@cwds/components/lib/Logo';
import Container from '@cwds/components/lib/Container';
import { Card, CardBody, CardHeader } from '@cwds/components/lib/Cards';

export default () => {
  return (
    <div>
      <AppBar
        brand={props => {
          return (
            <Link to="/">
              <Logo />
            </Link>
          );
        }}
      />
      <PageHeader title="Core Style" />
      <Container>
        <Card>
          <CardHeader>
            <h2>Typography</h2>
          </CardHeader>
          <CardBody>
            <h3>Headers</h3>
            <h1>alsdkfj</h1>
            <h2>alksdjf</h2>
            <h3>alskdfj</h3>
            <h4>alskdfj</h4>
            <h5>alskdfj</h5>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h3>Inline Text Elements</h3>
          </CardHeader>
          <CardBody>
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
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h3>Lists</h3>
          </CardHeader>
          <CardBody>
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
          </CardBody>
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
