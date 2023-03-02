import React from "react";
import { adminRoutes } from "../config/MenuItems";
import { useNavigate } from "react-router-dom";

export default function ListItems(props) {
  const navigate = useNavigate();

  const handleGo = (data) => {
    navigate(`/${data.pathName}`);
  };

  return (
    <div>
      {adminRoutes.map((item, index) => (
        <span
          style={{
            textTransform: "none",
            fontFamily: "Poppins",
            color: "black",
            fontSize: 20,
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={() => handleGo(item)}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
}
