import React from 'react';


export default function App(props) {
  return (
    <div
      className="container m-x-auto"
      style={{ minWidth: 320, maxWidth: 600 }}
    >
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.element,
};
