import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
    return (
        <div className='cards'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./src/assets/img/vino-rutini.jpg" />
                <Card.Body>
                    <Card.Title>Bodega Rutini</Card.Title>
                    <Card.Text>
                        <h3>Vino 1</h3>
                        <p>Descripcion</p>
                        <strong>$10.000</strong>
                    </Card.Text>
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./src/assets/img/vino-luigibosca.png" />
                <Card.Body>
                    <Card.Title>Bodega Luigi Bosca</Card.Title>
                    <Card.Text>
                        <h3>Vino 2</h3>
                        <p>Descripcion</p>
                        <strong>$12.000</strong>
                    </Card.Text>
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./src/assets/img/vino-loshelechos.jpg" />
                <Card.Body>
                    <Card.Title>Bodega Los Helechos</Card.Title>
                    <Card.Text>
                        <h3>Vino 3</h3>
                        <p>Descripcion</p>
                        <strong>$8.000</strong>
                    </Card.Text>
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
            <><br /><br /></>
        </div>
    );
}

export default Cards;