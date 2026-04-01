import React from "react";
import HomeTemplate from "../components/templates/HomeTemplate.jsx";
import Informasi from "./Informasi.jsx";
import VisiMisi from "./VisiMisi.jsx";

export default function Home({ setToken }) {
  return (
    <HomeTemplate setToken={setToken}>
      <Informasi />
      <VisiMisi />
    </HomeTemplate>
  );
}