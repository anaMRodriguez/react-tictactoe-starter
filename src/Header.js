import React from 'react';
import SubHeader from './SubHeader'

function Header(props) {
  return <h2>Welcome to {props.firstName}
      <SubHeader lastName={props.lastName} />
      Website!
    </h2>;
}

export default Header;
