import { Card } from "antd";

const { Meta } = Card;

export default function BookCard({
  title = "title",
  desc = "desc",
  img,
  style,
  actions = [],
}) {
  return (
    <Card
      style={{
        width: 240,
        borderWidth: 3,
        margin: 5,
        ...style,
      }}
      actions={actions}
      cover={<img alt="book cover" src={img} height="300" />}
    >
      <Meta title={title} description={desc} />
    </Card>
  );
}
