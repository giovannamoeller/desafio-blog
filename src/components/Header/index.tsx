import React from "react";
import { Link } from "react-router-dom";

import { Container, Text, Menu } from "./style";

interface IProps {
  title: string;
  description?: string;
}

const Header: React.FC<IProps> = ({ title, description }) => {
  return (
    <>
      <Menu>
          <ul>
              <li><Link to="/">Posts</Link></li>
              <li><Link to="/users">Usuários</Link></li>
          </ul>
      </Menu>
      <Container>
        <Text>
          <h1>{title}</h1>
          <p>{description}</p>
        </Text>
      </Container>
    </>
  );
};

export default Header;
