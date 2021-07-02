import { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  const [city, setCity] = useState("");
  let history = useHistory();

  const handleSubmit = () => {
    history.push("/city/" + city);
  };

  return (
    <Container
      style={{ height: "100vh", backgroundColor: "#F2FEDC" }}
      className="d-flex flex-column justify-content-center align-items-center"
      fluid={true}
    >
      <Row>
        <Col>
          <Form inline className="d-flex gap-2" onSubmit={handleSubmit}>
            <FormGroup className="d-inline-block">
              <Input
                type="text"
                placeholder="Enter city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

