import React, { useEffect, useState } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import { GET_BOOKS } from "./Api";
import RenderingCards from "./components/RenderingCards";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Books() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    GET_BOOKS().then((data) => setData(data.data));
  }, []);

  useEffect(() => {
    console.log(data, "all books");
  }, [data]);

  return (
    <div className="main-container">
      <h1>Book Store</h1>

      <div className="cards-container">
        <RenderingCards data={data} />
      </div>

      <ButtonComponent
        title="Add a book"
        style={{ width: "fit-content", padding: 4, alignSelf: "center" }}
        onClick={() => navigate("/add-book")}
      />
    </div>
  );
}
