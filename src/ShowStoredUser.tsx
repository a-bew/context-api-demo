import * as React from "react";

// Your props are your public API, so it's worth taking the
// time to use JSDoc to explain how it works:

export interface Props {
  /** The user's name */
  name: string;
  /** Should the name be rendered in bold */
  priority?: boolean;
}

const PrintName: React.FC<Props> = props => {
  return (
    <div>
      <p style={{ fontWeight: props.priority ? "bold" : "normal" }}>{props.name}</p>
    </div>
  );
};

// You can play with the new component's usage below:

const ShowUser: React.FC<Props> = props => {
  return <PrintName name="Ned" />;
};

// TypeScript supports providing intellisense inside
// the {} in an attribute

let username = "Cersei";

const ShowStoredUser: React.FC<Props> = props => {
  return <PrintName name={username} priority />;
};

export default ShowStoredUser;