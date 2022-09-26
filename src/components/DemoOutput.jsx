import React from 'react';

const DemoOutput = (props) => {
  console.log('DEMO OUTPUT is running');
  return <p>{props.show ? 'This is using useState and props' : ''}</p>;
};
export default React.memo(DemoOutput);
