import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function Cards ( {name, image, gender} )  {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={ image } />
      <Card.Body>
        <Card.Title>{ name }</Card.Title>
        <Card.Text>{ gender }</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}