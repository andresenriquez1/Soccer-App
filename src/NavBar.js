import React from 'react';
const Navbar = () =>
{
    return (

    <div>
        <nav class="navbar navbar-light bg-light justify-content-between">
  <a href = " " class="navbar-brand">Home</a>
  <a href = " " class="navbar-brand">Blog</a>
  <h1> Soccer City</h1>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
    </div>
    );

}

export default Navbar;