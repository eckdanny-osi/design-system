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
      <h1>Cards</h1>
      <Card>
        <CardBody>alsdkfjalsdkfj</CardBody>
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
