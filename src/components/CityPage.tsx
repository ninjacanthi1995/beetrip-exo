import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";

interface City {
  cityName: string;
}

function CityPage() {
  let city: City = useParams();

  const [temp, setTemp] = useState<null | number>(null);
  const [cityName, setCityName] = useState(city.cityName);

  useEffect(() => {
    const loadCity = async () => {
      const cityRaw = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=98b7465353d383f3d0f3bc4a284a48ae&units=metric`
      );
      const cityJSON = await cityRaw.json();
      setTemp(cityJSON.main.temp);
      setCityName(cityJSON.name);
    };
    loadCity();
  }, []);

  return (
    <Container
      style={{
        height: "100vh",
        backgroundColor: !temp ? "" : temp < 15 ? "#5BC1D1" : "#F0EF4F",
        color: !temp ? "" : temp < 15 ? "#002E3C" : "#2F3200",
      }}
      className="d-flex flex-column justify-content-center align-items-center p-0"
      fluid={true}
    >
      <Row>
        <Col xs="12">
          <h1 className="text-center mb-5">{cityName}</h1>
          <h2 className="text-center">{temp}°</h2>
          <h3 className="text-center">
            {!temp ? "" : temp < 15 ? "Il fait froid!!!🥶" : "Il fait chaud!!!🥵"}
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default CityPage;
