import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="text-capitalize">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <em>Definition: </em>
              {definition.definition}
              <br /> <div className="example"> {definition.example}</div>
              <Synonyms synonyms={definition.synonyms} />
            </p>{" "}
          </div>
        );
      })}
    </div>
  );
}
