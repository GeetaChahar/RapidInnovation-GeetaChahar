import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.div`
  background: black;
  color: white;
  display: flex;
  justify-content: end;
  gap: 20px;
  ${"" /* padding: 6px 20px 0px; */}
  margin: 0px;
  height: fit;
  width: 100%;
`;

export const UnorderList = styled.ul`
  color: white;
  justify-content: end;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  gap: 26px;
  margin: 0px 20px;
`;

export const List = styled.li`
  color: white;
  margin: 20px 0px;
  cursor: pointer;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
