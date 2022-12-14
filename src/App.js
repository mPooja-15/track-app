import React, { useState } from "react";
import TimersDashboard from "./components/Dashboard/TimersDashboard";
import { Navbar, Container } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Time Tracking App</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="button-create">
        <Button variant="secondary" onClick={() => setIsOpen(true)}>Create Task</Button>
      </div>
      {isOpen && <TimersDashboard />}
    </Container>
  );
};

export default App;
