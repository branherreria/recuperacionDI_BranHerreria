import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class Ejercicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://v2.jokeapi.dev/joke/Any?lang=es&type=twopart&amount=3',

      requestOptions
    );
    const responseData = await response.json();

    this.setState({
      joke: responseData.response,
      selectedItem: responseData.response[0],
    });
  }

  render() {
    return (
      <div className="main-site">
        {this.state.joke.map((item) => {
          return (
            <tr key={uuid()}>
              {item.setup} - {item.delivery}
              <div>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{item.setup}</Accordion.Header>
                    <Accordion.Body>{item.delivery}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                ;
              </div>
            </tr>
          );
        })}

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Desplegable idioma 1</Form.Label>
            <select>
              <option>es</option>;<option>de</option>;<option>en</option>;
              <option>cs</option>;<option>fr</option>;<option>pt</option>;
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Desplegable idioma 2 (API)</Form.Label>
            <select>
              {this.state.joke.map((item) => {
                return <option>{item.jokeLanguages}</option>;
              })}
            </select>
            <br />
            <strong>SPOILER: No me sale</strong>
          </Form.Group>

          <Button variant="primary" type="submit">
            Actualizar
          </Button>
        </Form>
      </div>
    );
  }
}

export default Ejercicio;
