import React from 'react';

import WithExhibitionProps from './props';

import Header from './header';

export default WrappedComponent => (props: WithExhibitionProps) => {
  return (
    <>
      <Header {...props.header} />
      <WrappedComponent {...props.content} />
    </>
  );
};
