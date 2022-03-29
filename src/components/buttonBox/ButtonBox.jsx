import React from "react";
import Button from "../UI/button/Button";
import cl from "./ButtonBox.module.css";
import { buttonsContent } from "../../utils/buttonsContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { faCompress } from "@fortawesome/free-solid-svg-icons";

export default function ButtonBox(props) {
  return (
    <div className={cl.buttonBox} onClick={props.onClick}>
      {buttonsContent.map((btn) => {
        let { value, priority = null, unary = "" } = btn;
        return (
          <Button
            key={value}
            value={value === 'x²' ? '^' : value}
            data-priority={priority}
            data-unary={unary}
          >
            {value === "del" ? (
              <FontAwesomeIcon
                style={{ color: "whitesmoke", height: "16px" }}
                icon={faDeleteLeft}
              />
            ) : value === "C" ? (
              <FontAwesomeIcon
                style={{ color: "whitesmoke", height: "16px" }}
                icon={faRemove}
              />
            ) : value === 'more'? (
              <FontAwesomeIcon
                style={{ color: "whitesmoke", height: "16px" }}
                icon={faCompress}
              />
            ) : value}
          </Button>
        );
      })}
    </div>
  );
}
