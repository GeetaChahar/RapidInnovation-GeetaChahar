import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../theme/themeSlice";
import styled from "styled-components";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  const ToggleBackground = styled.div`
    background: #ffe761;
    padding: 2px;
    border-radius: 20px;
  `;

  return (
    <ToggleBackground onClick={handleToggle}>
      {" "}
      {theme === "light" ? (
        <img src="/assets/dark.webp" alt="Dark" width={20} height={20} />
      ) : (
        <img src="/assets/light.webp" alt="Light" width={20} height={20} />
      )}{" "}
    </ToggleBackground>
  );
};

export default ThemeToggle;
