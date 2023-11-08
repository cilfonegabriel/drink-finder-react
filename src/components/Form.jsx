import { Button, Form, Row, Col } from "react-bootstrap"
import useCategories from "../hooks/useCategories"


const Formu = () => {

    const { categories } = useCategories()

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
                        {categories.map(category => (
                            <option
                                key={category.strCategory}
                                value={category.strCategory}
                            >{category.strCategory}

                            </option>
                        ))}
                    </Form.Select>

                </Form.Group>
            </Col>
        </Row>
        <Row className="justify-content-end">
            <Col md={3}>
              <Button
                variant="danger"
                className="text-uppercase w-100"
              >
                Search drinks
              </Button>
            </Col>
        </Row>        
    </Form>
  )
}

export default Formu
