import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
const NavBar = () => {
  const navigate = useNavigate()
  const [useData, setUserData] = useState(null) 
  const data = useLocation()
  console.log(data,'data'
  )
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    setUserData(user)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/login')
  }

  const activeColor =(url)=>{
    if(data.pathname === url){
      return 'text-dark'
    }else{
      return 'text-blue'
    }
  }

  if (useData?.userType == "admin") {
    return (<>
      <nav className="navbar navbar-expand-sm bg-white border-bottom shadow-sm sticky-top">
        <div className="container">
          <div className="navbar-brand text-danger fw-bold d-flex align-items-center" >
            <img src="/img/favicon.png" alt="Logo" /> &nbsp;<b className='font text-center'>QUIREX</b>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="mx-5 collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item"><Link className={`nav-link ${activeColor("/admin-add")} fw-bold`}to="/admin-add">Add</Link></li>
              <li className="nav-item"><Link className={`nav-link ${activeColor("/admin-list")} fw-bold`} to="/admin-list">List</Link></li>
              <li className="nav-item"><Link className={`nav-link ${activeColor("/admin-sold")} fw-bold`}to="/admin-sold">Sold</Link></li>
              <li className="nav-item"><Link className={`nav-link ${activeColor("/admin-user")} fw-bold`} to="/admin-user">User</Link></li>
              <li className="nav-item"><Link className={`nav-link ${activeColor("/admin-profile")} fw-bold`} to="/admin-profile">Profile</Link></li>
              <li className="nav-item"><Link className={`nav-link ${activeColor("/admin-contact")} fw-bold`} to="/admin-contact">Contact</Link></li>
            </ul>
            <div className="d-flex align-items-center gap-3" onClick={handleLogout}>
              <Link > <button className=" btn1  px-4 py-2 ">LogOut</button></Link>
            </div>
          </div>
        </div>
      </nav>
    </>)
  } else if (useData?.userType == "user") {
    return (<>
      <nav className="navbar navbar-expand-sm bg-white border-bottom shadow-sm sticky-top">
        <div className="container">
          <div className="navbar-brand text-danger fw-bold d-flex align-items-center" >
            <img src="/img/favicon.png" alt="Logo" /> &nbsp;<b className='font text-center'>QUIREX</b>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="mx-5 collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item"><Link className={`nav-link ${activeColor("/user-property")} fw-bold`} to="/user-property">Property</Link></li>
              <li className="nav-item"><Link className={`nav-link ${activeColor("/user-bought")} fw-bold`} to="/user-bought">Bought</Link></li>
              <li className="nav-item"><Link className={`nav-link ${activeColor("/user-profile")} fw-bold`} to="/user-profile">Profile</Link></li>
            </ul>
            <div className="d-flex align-items-center gap-3" onClick={handleLogout}>
              <Link > <button className=" btn1  px-4 py-2 ">LogOut</button></Link>
            </div>
          </div>
        </div>
      </nav>
    </>)
  } else {


    return (
      <>
        <nav className="navbar navbar-expand-sm bg-white border-bottom shadow-sm sticky-top">
          <div className="container">
            <div className="navbar-brand text-danger fw-bold d-flex align-items-center" >
              <img src="/img/favicon.png" alt="Logo" /> &nbsp;<b className='font text-center'>QUIREX</b>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="mx-5 collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item"><Link className={`nav-link ${activeColor("/")} fw-bold`}to="/">Home</Link></li>
                <li className="nav-item"><Link className={`nav-link ${activeColor("/about")} fw-bold`} to="/about">About</Link></li>
                <li className="nav-item"><Link className={`nav-link ${activeColor("/services")} fw-bold`} to="/services">Services</Link></li>
                <li className="nav-item"><Link className={`nav-link ${activeColor("/property")} fw-bold`} to="/property">Property</Link></li>
                <li className="nav-item"><Link className={`nav-link ${activeColor("/add-contact-us")} fw-bold`} to="/add-contact-us">ContactUs</Link></li>
              </ul>
              <div className="d-flex align-items-center gap-3">
                <Link to='/register'>  <button className=" btn1 px-4 py-2  ">Registration</button></Link>
                <Link to='/login'> <button className=" btn1  px-4 py-2 ">Login</button></Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }

}

export default NavBar
