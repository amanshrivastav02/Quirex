

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import NavBar from '../landingComponents/NavBar';

const AdminContactUsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:9000/api/get-contact-us');
    if (response?.data?.code === 200) {
      setData(response?.data?.data);
    }
  };

  const show = (message) => {
    Swal.fire({
      title: "Message",
      text: message,
      icon: 'info'
    });
  };

  return (
    <>
      <NavBar />
      <div className="container py-4">
        <h2 className="text-center mb-4 text-primary">Contact List</h2>

        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Sr. No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Subject</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={item._id || index}>
                  <td>{index + 1}</td>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.contact}</td>
                  <td>{item?.subject}</td>
                  <td
                    style={{ cursor: 'pointer', color: 'blue' }}
                    onClick={() => show(item?.message)}>
                    {item?.message?.slice(0, 30)}...
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {data?.length === 0 && (
          <p className="text-center mt-3 text-muted">No Record Found!</p>
        )}
      </div>
    </>
  );
};

// export default AdminContactUsList;


export default AdminContactUsList
