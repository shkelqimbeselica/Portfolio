import React, { PureComponent } from "react";

class Cursor extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { show: true };

    this.cursorRef = React.createRef();
  }

  componentDidMount() {
    let cursor = this.cursorRef.current;
    setTimeout(() => {
      setInterval(() => {
        this.setState({ show: !this.state.show }, () => {
          if (this.state.show) {
            cursor.style.display = "block";
          } else {
            cursor.style.display = "none";
          }
        });
      }, 500);
    }, 2500);
  }

  render() {
    return (
      <div
        className="cursor"
        style={{ display: "block" }}
        ref={this.cursorRef}
      ></div>
    );
  }
}

export default Cursor;
