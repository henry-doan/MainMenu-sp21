import Menu from "./Menu";
import { Container, CardDeck, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IMG, HomeImgCont, FormCont } from "../shared/StyledComponents";

const MenuList = ({ menus, deleteMenu, updateMenu }) => {
  return (
    <>
      {menus.map((m) => (
        <>
          <Menu
            key={m.id}
            {...m}
            deleteMenu={deleteMenu}
            updateMenu={updateMenu}
          />
          <br></br>
        </>
      ))}
    </>
  );
};

export default MenuList;
