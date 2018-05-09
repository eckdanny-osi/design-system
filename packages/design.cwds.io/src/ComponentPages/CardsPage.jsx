import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from '@cwds/components/lib/Cards';

const CardsPage = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <h3>Cards</h3>
          <p>Cards are just white boxes...</p>
        </CardBody>
      </Card>
      <br />
      <Card>
        <CardHeader>Card Header</CardHeader>
        <CardBody>alsdkfjalsdkfj</CardBody>
        <CardFooter>CardFooter</CardFooter>
      </Card>
    </div>
  );
};

export default {
  name: 'Cards',
  component: CardsPage,
};
