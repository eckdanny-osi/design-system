import React, { Fragment } from 'react';
import { Row, Col } from '@cwds/components/lib/Grid';
import Card from '@cwds/components/lib/Cards';
// import Page from '../../components/Layout/Page';
import Page from '@cwds/components/lib/Layouts/Page';
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
        <Col md={{ size: 6, offset: 3 }}>
          <Card>
            <Card.Header>
              <Card.Title>Info</Card.Title>
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
        </Col>
      </Row>
    )}
  />
);
