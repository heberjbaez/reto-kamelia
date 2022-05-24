import React from "react";
import "../assets/styles/Footer.css"

export default function Footer(props) {
  return (
    <>
      <footer className="footer">
        <button onClick={props.handle} type="button" className="btn btn-primary">
          Otro
        </button>
      </footer>
    </>
  );
}
