import React from 'react';

function Checkbox(props) {
  return (
    <label>
      <input type="checkbox" {...props} />
      {props.label}
    </label>
  );
}
export default Checkbox;