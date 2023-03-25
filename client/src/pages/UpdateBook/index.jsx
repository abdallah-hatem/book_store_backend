import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonComponent from "../../components/ButtonComponent";
import CardComponent from "../../components/CardComponent";
import InputComponent from "../../components/InputComponent";
import { GET_A_BOOK, UPDATE_BOOK } from "./Api";

import "./style.css";

export default function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const defaultValues = useRef({
    title: "",
    desc: "",
    cover: "",
  });

  const [values, setValues] = useState(defaultValues.current);

  const handleChange = useCallback((e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  useEffect(() => {
    GET_A_BOOK(id).then((data) => {
      let newData = data.data[0];
      delete newData.id;
      setValues(newData);
    });
  }, []);

  useEffect(() => {
    console.log(values, "add book values");
  }, [values]);

  function handleSubmit() {
    UPDATE_BOOK(id, values).then(
      (data) => data && alert("Book Updated Successfully")
    );
  }

  const inputs = [
    { label: "Title", name: "title", values: values["title"], handleChange },
    {
      label: "Description",
      name: "desc",
      values: values["desc"],
      handleChange,
    },
    {
      label: "Image URL",
      name: "cover",
      values: values["cover"],
      handleChange,
    },
  ];

  return (
    <div style={{ width: "50vw", margin: "auto" }}>
      <CardComponent title="Update Book" style={{ margin: 0, borderWidth: 2 }}>
        {inputs.map((el) => (
          <InputComponent
            value={el.values}
            label={el.label}
            name={el.name}
            onChange={el.handleChange}
          />
        ))}

        <ButtonComponent
          className="update-btn"
          title="Update"
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
