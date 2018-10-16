import React from 'react';
import { Row, Col } from '@cwds/components/dist/Grid';
import Card from '@cwds/components/dist/Cards';
import Page from '@cwds/components/dist/Layouts/Page';
import Button from '@cwds/components/dist/Button';
import slackLogo from './Slack_Mark_White_Web.png';
import githubLogo from './GitHub-Mark-Light-64px.png';
import Style from './StatusButton.module.css';
import status from './status';

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
                  <tr>
                    <td>Branch</td>
                    <td>
                      <tt>{status.git}</tt>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
            <Card.Footer>
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
                href={status.main.bugs.url}
                className={Style.StatusButton}
                target="_blank"
              >
                <img
                  src={githubLogo}
                  className={Style.BlockLogo}
                  alt="github logo"
                />
                Issues
              </Button>
            </Card.Footer>
          </Card>
          <h3>Packages</h3>
          {status.packages.map(pkg => {
            return (
              <Card key={pkg.name}>
                <Card.Header>
                  <h4
                    className="m-0"
                    style={{
                      fontFamily:
                        'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                      fontSize: '85%',
                    }}
                  >
                    {pkg.name}
                  </h4>
                </Card.Header>
                <Card.Body>
                  <h4>Dependencies</h4>
                  <pre>
                    <code>
                      {JSON.stringify(pkg.pkgJson.dependencies, null, 2)}
                    </code>
                  </pre>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    )}
  />
);
