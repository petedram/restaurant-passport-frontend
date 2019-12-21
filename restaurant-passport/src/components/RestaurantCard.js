import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function RestaurantCard(props) {
  console.log("Card: ", props);
  return (
    <Card fluid>
      <Image src='https://via.placeholder.com/150x75.png' wrapped ui={false} />
      <Card.Content>
        <Image
          floated='left'
          size='mini'
          src='https://files.slack.com/files-pri/T4JUEB3ME-FRYB8R0LC/restaurant-passport.png'
          widht='100px'
        />
        <Card.Header>{props.restaurant.name}</Card.Header>
        <Card.Meta>{props.restaurant.city}</Card.Meta>
        <Card.Description>This card doesn't have any info!</Card.Description>
      </Card.Content>

      <Card.Content extra>
        <div className='ui two buttons'>
          <Button
            as={Link}
            to={`/restaurants/${props.restaurant.id}}`}
            basic
            color='blue'>
            View
          </Button>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}
