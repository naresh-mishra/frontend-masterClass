export const Home=()=>{
    return (
        <>
           <main>
              <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>We are the World Best IT Company</p>
                        <h1>Welcome to Master Class</h1>
                        <p>
                            Are you ready to take your business to the next level
                            with cutting-edge IT solutions?Look no further! At Master
                            Class,we specialize in providing innovative IT services 
                            and solutions tailored to meet your unique needs.
                        </p>
                         <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">Connect now </button>
                            </a>
                            <a href="/services">
                                <button className="btn secondary-btn">Learn more </button>
                            </a>
                         </div>
                    </div>
                    {/* hero images */}
                    <div className="hero-image">
                        <img src="../public/services.png" alt="Coding together" width="400" 
                          height="400" />
                    </div>
                </div>
              </section>
           </main>
           {/* 2nd section */}
           <section className="section-analytics">
            <div className="container grid grid-four-cols">
                <div className="div1">
                    <h2>50+</h2>
                    <p>registered companies</p>
                </div>
                <div className="div1">
                    <h2>100,00+</h2>
                    <p>Happy clients</p>
                </div>
                <div className="div1">
                    <h2>500+</h2>
                    <p>Well known Developers</p>
                </div>
                <div className="div1">
                    <h2>24/7</h2>
                    <p>services</p>
                </div>
            </div>
           </section>
           {/* 3rd section */}
           <section className="section-hero">
                <div className="container grid grid-two-cols">
                     {/* hero images */}
                     <div className="hero-image">
                        <img src="../public/services.png" alt="Coding together" width="400" 
                          height="400" />
                    </div>
                    <div className="hero-content">
                        <p>We are here to help you</p>
                        <h1>Get Started today</h1>
                        <p>
                           Ready to take the first step towards a more efficient and secure IT infrastructure? Contact us today for a free consulation and let's discuss how Master Class can help your business thrive in the digital age.

                        </p>
                         <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">Connect now </button>
                            </a>
                            <a href="/services">
                                <button className="btn secondary-btn">Learn more </button>
                            </a>
                         </div>
                    </div>
                   
                </div>
              </section>
        </>
    )
}