import React from 'react';

const Testimonial = () => {
  return (
    <>
      <div className="container py-5 background">
        <div className="text-center mb-5">
          <div className="tagline">Our Testimonial</div>
          <h2 className="section-title">Clients Feedback</h2>
        </div>

        <div className="row g-4">
          {[
            {
              name: 'Jacob William',
              img: '/img/1.jpg_1.jpeg',
              title: 'SELLING AGENTS',
            },
            {
              name: 'Kelian Anderson',
              img: '/img/2.jpg_1.jpeg',
              title: 'SELLING AGENTS',
            },
            {
              name: 'Adam Joseph',
              img: '/img/3.jpg_2.jpeg',
              title: 'SELLING AGENTS',
            },
          ].map((client, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
              <div className="card border-0 shadow-lg rounded-3 p-3 feedcard w-100">
                <div className="feedtop  mb-3">
                  <img src="/img/testimonial1.png" alt="quote" />
                </div>
                <p className="px-2 feedtext">
                  "I had a fantastic experience with this real estate team. They were professional, responsive, and truly understood what I was looking for. The entire home-buying process was smooth, and their support made everything stress-free.
                </p>
                <div className="d-flex align-items-center mt-4">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="img-fluid feedimg me-3"
                    style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <strong>{client.name}</strong>
                    <p className="color1 m-0">{client.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
