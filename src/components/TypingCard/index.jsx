import React, { useRef, useEffect } from "react";
import { Card } from "antd";
import Typing from "@/utils/typing";

const TypingCard = (props) => {
  const { title, source } = props;

  const sourceEl = useRef();
  const outputEl = useRef();

  useEffect(() => {
    const typing = new Typing({
      source: sourceEl.current,
      output: outputEl.current,
      delay: 30,
    });
    typing.start();
  }, []);
  return (
    <Card bordered={false} className="card-item" title={title}>
      <div
        style={{ display: "none" }}
        ref={sourceEl}
        dangerouslySetInnerHTML={{ __html: source }}
      />
      <div ref={outputEl} />
    </Card>
  );
};

TypingCard.propTypes = {
  title: "",
  source: "",
};

export default TypingCard;
