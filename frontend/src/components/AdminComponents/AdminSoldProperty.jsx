




import React, { useEffect, useState } from 'react';
import NavBar from '../landingComponents/NavBar';
import axios from 'axios';
import Swal from 'sweetalert2';

const AdminSoldProperty = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:9000/api/admin-sold-list');
    if (response?.data?.code === 200) {
      setData(response?.data?.data);
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
        const response = await axios.post('http://localhost:9000/api/delete-sold-item', { _id });
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
      <div className="container py-5">
        <h2 className="text-center text-danger mb-4"> Sold Property List</h2>

        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Sr.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Title</th>
                <th>Price</th>
                <th>Area</th>
                <th>Location</th>
                <th>Media</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.contact}</td>
                  <td>{item?.title}</td>
                  <td>{item?.price}</td>
                  <td>{item?.area}</td>
                  <td>{item?.location}</td>
                  <td>
                    <img
                      src={`http://localhost:9000/img/${item?.pic}`}
                      alt="property"
                      style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteProperty(item?._id)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {data?.length === 0 && (
          <p className="text-center text-muted mt-3">No Record Found!</p>
        )}
      </div>
    </>
  );
};

export default AdminSoldProperty;

