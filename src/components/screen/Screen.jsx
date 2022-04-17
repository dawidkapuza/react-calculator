import React from "react";
import cl from "./Screen.module.css";

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.screen = React.createRef();
  }
  componentDidMount() {
    const node = this.screen.current;
    node.scrollTop = node.scrollHeight;
  }
  componentDidUpdate() {
    const node = this.screen.current;
    node.scrollTop = node.scrollHeight;
    window.addEventListener("resize", () => {
      node.scrollTop = node.scrollHeight;
    });
  }

  render() {
    return (
      <div ref={this.screen} className={cl.screen} {...this.props}>
        {this.props.children}
      </div>
    );
  }
}
