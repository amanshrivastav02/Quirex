import React, { useEffect, useState } from 'react'
import { IoBedOutline } from "react-icons/io5";
import { LuBedSingle } from "react-icons/lu";
import { FaVectorSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { useLocation ,useNavigate} from "react-router-dom";
import NavBar from './NavBar';
import Swal from 'sweetalert2';
import axios from 'axios';
const Property = () => {
   const [listData, setListData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await axios.get('http://localhost:9000/api/property-list');
     if(response?.data?.code==200){
      setListData(response?.data?.data)
     }

  }
  const location = useLocation();
  const navigate=useNavigate()
  const handleBuy=async (propertyId)=>{
    const userData=JSON.parse(localStorage.getItem("userInfo"));
    if(!userData?._id){
      navigate('/login')
      return
    }
    const response=await axios.post("http://127.0.0.1:9000/api/buy",{userId:userData?._id,propertyId});
    if(response?.data?.code==200){
      Swal.fire({
        title:"Buy Property",
        text:response?.data?.message,
        icon:"success"
      })
    }
    else{
      Swal.fire({
        title:"Buy Property",
        text:response?.data?.message,
        icon:"error"
      })
      }
  }
  return (
    <>
      {location?.pathname != "/" && <NavBar />}
    

      {/* <div className='row property py-5'>
              <div className="text-center ">
                <div className="tagline ">Properties </div>
                <h2 className="section-title">Featured Listings</h2>
              </div>
              <div className='col-sm-1'></div>
              <div className='col-sm-10'>
                <div className='row py-3 px-3 '>
                  {listData?.map((item, index) => {
                    return (<>
                      <div className='col-sm-3  px-3 mb-4'>
                        <div className="card  mx-auto shadow-lg border border-0">
                          <img src={`http://127.0.0.1:9000/img/${item?.pic}`} className="card-img-top img-fluid featuredimg" alt="..." />
                          <div className="card-body">
                            <p className='mycolor1'><b>${item?.price}</b>/Month</p>
                            <h5 className="card-title"><b className='mycolor2'>{item?.title}</b></h5>
                            <p className="card-text featuredp ">{item?.description}</p>
                            <div className='row'>
                              <div className='col-6 featureddiv featuredp'>
                                <p className='m-0 ps-2'>{item?.area}</p>
                                <span className='ps-2'>{item?.location}</span>
                              </div>
                               
                            </div>
                            
                          </div>
                          <button onClick={()=>handleBuy(`${item?._id}`)} className='btn btn-outline-danger m-2'>Buy</button>
                        </div>
                      </div>
                    </>)
                  })}
                  {listData?.length == 0 && <h1 className='text-center'>No Record Found</h1>}
                </div>
              </div>
              <div className='col-sm-1'></div>
            </div> */}
            <div className='col-sm-10 mx-auto'>
  <div className='row py-3 px-3 '>
    {listData?.map((item, index) => {
      return (
        <div key={index} className='col-lg-3 col-md-6 col-sm-6 col-12 px-3 mb-4'>
          <div className="card mx-auto shadow-lg border border-0 h-100">
            <img src={`http://127.0.0.1:9000/img/${item?.pic}`} className="card-img-top img-fluid featuredimg" alt="..." />
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <p className='mycolor1'><b>{item?.price}</b>/Month</p>
                <h5 className="card-title"><b className='mycolor2'>{item?.title}</b></h5>
                <p className="card-text featuredp">{item?.description}</p>
              </div>
              <div className='row'>
                <div className='col-12 featureddiv featuredp'>
                  <p className='m-0 ps-0'>{item?.area}</p>
                  <span className='ps-0'><FaLocationDot/>{item?.location}</span>
                </div>
              </div>
            </div>
           {/* {location?.pathname!=="/property" && location?.pathname!=="/" && }*/}
            <button onClick={() => handleBuy(`${item?._id}`)} className='btn btn-outline-danger m-2'>Buy</button> 
          </div>
        </div>
      )
    })}
    {listData?.length === 0 && <h1 className='text-center'>No Record Found</h1>}
  </div>
</div>

    </>
  )
}

export default Property



  