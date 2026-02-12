import React, { useEffect, useState } from 'react'
import { IoBedOutline } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import NavBar from '../landingComponents/NavBar'
import axios from 'axios';
import Swal from 'sweetalert2';

const AdminPropertyList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:9000/api/property-list');
    if (response?.data?.code === 200) {
      setListData(response?.data?.data);
    }
  };

  const handleDeleteProperty = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.post('http://localhost:9000/api/delete-property', { _id });
        if (response?.data?.code === 200) {
          Swal.fire({
            title: "Deleted!",
            text: response?.data?.message,
            icon: "success"
          });
          fetchData();
        } else {
          Swal.fire({
            title: "Error!",
            text: response?.data?.message,
            icon: "error"
          });
        }
      }
    });
  };

  return (
    <>
      <NavBar />
      <div className='container py-5'>
        <div className="text-center mb-4">
          <div className="tagline">Properties</div>
          <h2 className="section-title">Featured Listings</h2>
        </div>

        <div className='row'>
          {listData?.map((item, index) => (
           <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4' key={index}>
  <div className="card h-100 shadow border-0">
    <img 
      src={`http://localhost:9000/img/${item?.pic}`} 
      className="card-img-top w-100" 
      style={{ height: "200px", objectFit: "cover", borderRadius: "10px" }} 
      alt="Property" 
    />
    <div className="card-body d-flex flex-column">
      <p className='mycolor1'><b>{item?.price}</b>/Month</p>
      <h5 className="card-title mycolor2"><b>{item?.title}</b></h5>
      <p className="card-text featuredp">{item?.description}</p>
      <div className='mb-3'>
        <p className='mb-1'><IoBedOutline /> {item?.area}</p>
        <p className='mb-0'><FaLocationDot /> {item?.location}</p>
      </div>
      <button
        onClick={() => handleDeleteProperty(item?._id)}
        className='btn btn-outline-danger mt-auto'
      >
        Delete
      </button>
    </div>
  </div>
</div>

          ))}
          {listData?.length === 0 && (
            <div className="col-12 text-center">
              <h4>No Record Found</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPropertyList;
