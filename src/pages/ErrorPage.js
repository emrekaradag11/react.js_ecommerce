import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
      <div className="col-12 text-center mt-5 pt-5">
        <img src="/assets/images/404.svg" className="mx-auto" alt="404" />
        <h1 className="head2">Looks like you are lost </h1>
        <p className="homeText">We can't find the page you're looking for</p>
        <Link to={"/"} className="btn btn-primary">
          <svg stroke="currentColor" fill="currentColor" className="me-2" stroke-width="0" viewBox="0 0 512 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z"></path></svg>
          Go Home</Link>
      </div>
    </div>
  )
}

export default ErrorPage