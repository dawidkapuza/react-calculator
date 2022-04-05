import React from "react";
import cl from "./TextArea.module.css";

export default class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.textArea = React.createRef();
  }
  componentDidMount() {
    const node = this.textArea.current;
    node.scrollTop = node.scrollHeight;
    window.addEventListener("resize", () => {
      node.scrollTop = node.scrollHeight;
    });
  }

  render() {
    return (
      <textarea
        ref={this.textArea}
        className={cl.textarea}
        {...this.props}
        value={this.props.children}
      />
    );
  }
}
