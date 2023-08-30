import React from "react";

const ConversationNodeComponent = (props) => {
  const { conversationTitle, url, onClick } = props;

  return (
    <div>
      <div className="conversation-component-title">{conversationTitle}</div>
      <a href={url}>LINK</a>
      <button onClick={onClick}>
        Click Me!
      </button>
    </div>
  );
};

export default ConversationNodeComponent;
