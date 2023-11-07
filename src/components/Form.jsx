import { Button, Form, Row, Col } from "react-bootstrap"

const Formu = () => {
  return (
    <Form>
        <Row>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Name Drink</Form.Label>

                    <Form.Control
                        id="name"
                        type="text"
                        placeholder="Ej: Tequila, Vodka, etc..."
                        name="nombre"
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="category">Category Drink</Form.Label>

                    <Form.Select
                        id="category"
                        name="category"
                    >
                        <option value="">--Select Category--</option>
                    </Form.Select>

                </Form.Group>
            </Col>
        </Row>
    </Form>
  )
}

export default Formu
