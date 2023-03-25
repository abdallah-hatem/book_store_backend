import React from "react";
import BookCard from "../../../../components/BookCard";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { DELETE_BOOK } from "../../Api";

export default function RenderingCards({ data }) {
  const navigate = useNavigate();

  function handleDelete(id) {
    DELETE_BOOK(id).then(() => window.location.reload());
  }

  return data.map((el, index) => (
    <BookCard
      id={el.id}
      title={el.title}
      desc={el.desc}
      img={el.cover}
      actions={[
        <EditOutlined
          key="edit"
          onClick={() => navigate(`/update-book/${el.id}`)}
        />,
        <DeleteOutlined key="ellipsis" onClick={() => handleDelete(el.id)} />,
      ]}
      key={index}
    />
  ));
}
