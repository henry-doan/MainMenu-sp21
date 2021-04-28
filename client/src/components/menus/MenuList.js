import Menu from "./Menu";
import { Container, Row, Col } from "react-bootstrap";

const MenuList = ({ menus, deleteMenu, updateMenu }) => {
  return (
    <>
      {menus.map((m) => (
        <>
          <Container fluid>
            <Row>
              <Col>
                <Menu
                  key={m.id}
                  {...m}
                  deleteMenu={deleteMenu}
                  updateMenu={updateMenu}
                />
              </Col>
            </Row>
          </Container>
          <br></br>
        </>
      ))}
    </>
  );
};

export default MenuList;
