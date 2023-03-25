import React from "react";
import { Button } from "antd";

export default function ButtonComponent({
  title = "title",
  disabled = false,
  style,
  onClick,
  hidden,
  htmlType,
  type = "primary",
  className,
}) {
  return (
    <Button
      type={type}
      htmlType={htmlType}
      disabled={disabled}
      style={{ padding: 4, ...style }}
      onClick={onClick}
      hidden={hidden}
      className={className}
    >
      {title}
    </Button>
  );
}
