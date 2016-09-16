import React from 'react';


export default function App(props) {
  return (
    <div className="container m-x-auto">
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.element,
};
