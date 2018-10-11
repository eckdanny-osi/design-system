import React from 'react';
import { Row, Col } from '@cwds/components/dist/Grid';
import Card from '@cwds/components/dist/Cards';
import Page from '@cwds/components/dist/Layouts/Page';
import Button from '@cwds/components/dist/Button';
import slackLogo from './Slack_Mark_White_Web.png';
import githubLogo from './GitHub-Mark-Light-64px.png';
// import status from './status';
import Style from './StatusButton.module.css';

const status = {
  lerna: [],
  pkg: {
    bugs: {
      url: '',
    },
  },
};

export default () => (
  <Page
    title="Status"
    layout="dashboard"
    breadcrumb={[
      { path: '/', title: 'Home' },
      { path: '/status', title: 'Status' },
    ]}
    main={() => (
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title>Build Info</Card.Title>
            </Card.Header>
            <Card.Body>
              <table style={{ width: '100%' }}>
                <tbody>
                  <tr>
                    <td>Build Date</td>
                    <td>
                      <tt>{status.buildDate}</tt>
                    </td>
                  </tr>
                  {status.lerna.map(({ name, version }) => {
                    return (
                      <tr key={name}>
                        <td>
                          <tt>{name}</tt>
                        </td>
                        <td>
                          <tt>{version}</tt>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td>Branch</td>
                    <td>
                      <tt>{status.gitInfo}</tt>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Issues</Card.Title>
            </Card.Header>
            <Card.Body>
              <Button
                color="primary"
                href="slack://channel?team=T0FSW5RLH&id=C34SC4BMF"
                className={Style.StatusButton}
              >
                <img
                  src={slackLogo}
                  className={Style.BlockLogo}
                  alt="slack logo"
                />
                #design-ops
              </Button>{' '}
              <Button
                color="primary"
                href={status.pkg.bugs.url}
                className={Style.StatusButton}
                target="_blank"
              >
                <img
                  src={githubLogo}
                  className={Style.BlockLogo}
                  alt="github logo"
                />
                Issues
              </Button>{' '}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )}
  />
);
