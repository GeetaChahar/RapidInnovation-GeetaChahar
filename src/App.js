import "./App.css";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/contactUs/Contact";
import TaskPage from "./components/Taskpage";
import { useSelector } from "react-redux";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./components/home";
import { Navbar } from "./styled/NavbarStyles";
import { Small } from "./styled/FooterStyles";
import styled from "styled-components";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  const appStyles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const ToggleParent = styled.div`
    margin-top: 6px;
    margin-right: 20px;
    display: flex;
    justify-content: end;
    gap: 20px;
  `;

  return (
    <div style={appStyles}>
      {/* Navigation Links */}{" "}
      <Navbar>
        <ToggleParent>
          <ThemeToggle />
          <Small>Register</Small>
          <Small>Log In</Small>
        </ToggleParent>
      </Navbar>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" exact element={<ContactUs />} />
        <Route path="/taskpage" exact element={<TaskPage />} />
      </Routes>
    </div>
  );
}

export default App;
