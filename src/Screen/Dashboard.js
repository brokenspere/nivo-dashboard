import React from "react";
import Menu from "../Components/MenuBar";
import Header from "../Components/Header";
import { Container } from "../Components/Style/index.view";
const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Menu />
    </Container>
  );
};
export default Dashboard;
