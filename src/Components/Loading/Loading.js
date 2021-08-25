import React from "react";
import { Spin } from "antd";

const Loading = ({ content }) => {
  return <Spin size="large" tip={content} />;
};

export default Loading;
