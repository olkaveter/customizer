import { createContext, useContext, useState } from "react";

const CustomizationContex = createContext({});

const colors = [
  {
    color: "#FF968A",
    name: "Orange"
  },
  {
    color: "#FFED00",
    name: "Yellow"
  },
  {
    color: "#CCE2CB",
    name: "Green"
  },
  {
    color: "#ABDEE6",
    name: "Blue"
  },
  {
    color: "#6C567B",
    name: "Purple"
  },
  {
    color: "#CBAACB",
    name: "Orchid"
  },
  {
    color: "#59555b",
    name: "Grey"
  },
  {
    color: "#ECEAE4",
    name: "Pale"
  },
];

const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("leather");
  const [legs, setLegs] = useState(1);
  const [chairColor, setChairColor] = useState(colors[0]);
  const [cushionColor, setCushionColor] = useState(colors[1]);

  return (
    <CustomizationContex.Provider
      value={{
        material,
        setMaterial,
        legs,
        setLegs,
        colors,
        chairColor,
        setChairColor,
        cushionColor,
        setCushionColor,
      }} {...props}>
        {props.children}
    </CustomizationContex.Provider>
  )
}

const useCustomize = () => {
  return useContext(CustomizationContex);
}

export { CustomizationProvider, useCustomize };