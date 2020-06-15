import React from 'react'


export const BreadcrumbProd = () => {

  return (
    <section className="breadcrumbs">
      <div className="breadcrumbs-container">
        <Link to="/">
          <p className="breadcrumbs-link"></p>
        </Link>
        <Link to={link}>
          <p>{product}</p>
        </Link>
        <Link>
         
        </Link>
      </div>
    </section>
  )
}