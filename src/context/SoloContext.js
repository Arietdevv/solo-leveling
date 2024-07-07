import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { SOLO } from "../helpers/const";
import { useLocation } from "react-router-dom";

const soloContext = createContext();
export const useSoloContext = () => useContext(soloContext);

const SoloContext = ({ children }) => {
  const [solo, setSolo] = useState([]);
  const location = useLocation();
  const [oneSolo, setOneSolo] = useState([]);
  async function create(newSolo) {
    await axios.post(SOLO, newSolo);
    read();
  }
  async function getOneSolo(id) {
    let { data } = await axios.get(`${SOLO}/${id}`);
    setOneSolo(data);
  }

  async function read() {
    let res = await axios(`${SOLO}/${window.location.search}`);
    setSolo(res.data);
  }

  async function del(id) {
    await axios.delete(`${SOLO}/${id}`);
    read();
  }

  const values = {
    create,
    read,
    solo,
    del,
    getOneSolo,
    oneSolo,
  };
  return <soloContext.Provider value={values}>{children}</soloContext.Provider>;
};

export default SoloContext;
