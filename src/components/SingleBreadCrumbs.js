import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export const SingleBreadCrumbs = (props) => {
  return (
    <Breadcrumbs style={{marginTop: 150}} aria-label="breadcrumb">
      <Link to="/" color="inherit" onClick={handleClick}>
        Hem
      </Link>
      <Link to="/Communication" color="inherit" >
        Produkter
      </Link>
      <p
        aria-current="page"
      >
        {props.active}
      </p>
    </Breadcrumbs>
  );
}

export default SingleBreadCrumbs