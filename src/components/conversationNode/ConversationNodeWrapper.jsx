import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import ConversationNodeComponent from "./ConversationNode";

import {getComponentAttribute} from '../../helpers/utils';

const ConversationNodeComponentWrapper = props => {
  const shadowRef = useRef(null);

  const title =getComponentAttribute(props, 'title'),
    url = getComponentAttribute(props, 'url'),
    clickCallback=getComponentAttribute(props,'clickCallback');

  console.log("Click Callback -> ",clickCallback);
  console.log("Type of Click Callback -> ",typeof clickCallback);

  useEffect(() => {
    if (shadowRef.current) {
      const shadowRoot = shadowRef.current.attachShadow({ mode: "open" });

      const container = document.createElement("div");

      shadowRoot.appendChild(container);

      ReactDOM.render(
        <ConversationNodeComponent conversationTitle={title} url={url} onClick={clickCallback}/>,
        container
      );

      const style = document.createElement("style");
      style.textContent = `
          :host {
            display: block;
            padding: 16px;
            background-color: lightgray;
          }
          div {
            margin: 2rem !important;
            background-color: blue !important;
          }
        `;
      shadowRoot.appendChild(style);
    }
  });
  return <div ref={shadowRef} />;
};

const ConversationNodeWebComponent = reactToWebComponent(
  ConversationNodeComponentWrapper,
  React,
  ReactDOM
);

export default ConversationNodeWebComponent;
