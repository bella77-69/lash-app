import React from "react";
import "./Error.scss";

function ErrorNotice(props) {
  return (
    <div className="error">
      <span className="error-message">{props.message}</span>
      <button onClick={props.clearError} className="error-btn">
        X
      </button>
    </div>
  );
}
export default ErrorNotice;
