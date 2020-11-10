import React from 'react';

function HeroBannerComponent() {
  return (
    <section className="bg-home bg-home-full" id="home">
      <div className="home-center">
        <div className="home-desc-center">
          <div className="container-fluid">
            <div className="row vertical-content">
              <div className="col-lg-5 col-md-6">
                <div>
                  <h1 className="home-title mb-0">
                    Monitor all your product reviews from multiple channels in
                    one place
                  </h1>
                  <p className="home-subtitle mt-4 mb-0">
                    Build new product features from voice of customers that
                    boosts customer satisfaction and drives growth
                  </p>
                </div>
                <div className="mt-4">
                  <form>
                    <div className="row">
                      <div className="col-lg-10">
                        <div className="input-group mb-3">
                          <input
                            type="email"
                            name="email"
                            className="form-control watch-demo-email-input"
                            placeholder="Enter your email"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-demo" type="submit">
                              WATCH DEMO
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 d-md-block d-lg-block">
                <img
                  className="hero-banner-image"
                  src="./hero-banner.png"
                  alt="Hero Banner"
                ></img>
                {/* <video autoPlay loop playsInline>
                  <source
                    src="https://cdn2.birdeye.com/version2/components/banner/videos/homeVideo.mp4"
                    type="video/mp4"
                  />
                </video> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBannerComponent;
