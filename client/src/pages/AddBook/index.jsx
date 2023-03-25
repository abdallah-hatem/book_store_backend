import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/ButtonComponent";
import CardComponent from "../../components/CardComponent";
import InputComponent from "../../components/InputComponent";
import { ADD_BOOK } from "./Api";
import "./style.css";

export default function AddBook() {
  const navigate = useNavigate();

  const defaultValues = useRef({
    title: "",
    desc: "",
    img: "",
  });

  const [values, setValues] = useState(defaultValues.current);

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  useEffect(() => {
    console.log(values, "add book values");
  }, [values]);

  function handleSubmit() {
    ADD_BOOK(values).then(data=>data && alert("Book Added Successfully"))
  }

  const inputs = [
    { label: "Title", name: "title", handleChange },
    { label: "Description", name: "desc", handleChange },
    { label: "Image URL", name: "img", handleChange },
  ];

  return (
    <div style={{ width: "50vw", margin: "auto" }}>
      <CardComponent title="Add Book" style={{ margin: 0 ,borderWidth:2}} >
        {inputs.map((el) => (
          <InputComponent
            label={el.label}
            name={el.name}
            onChange={el.handleChange}
          />
        ))}

        <ButtonComponent
          className="add-btn"
          title="Add"
          onClick={handleSubmit}
        />
      </CardComponent>

      <ButtonComponent
        className="main-btn"
        title="Main"
        onClick={() => navigate("/books")}
      />
    </div>
  );
}
