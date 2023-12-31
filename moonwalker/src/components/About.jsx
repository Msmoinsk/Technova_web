import React from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx">
                        <h2>About Us</h2>
                        <p>Technova fest is an initiative by departments of BSc.(IT) & BSc.(CS) & Bsc.(DS) of Shree LR. Tiwari Degree College of Arts, Commerce and Science, Mira Road. Technova includes some mesmerizing events.

                            All the previous events of Technova fest was a grand success with amazing events, students experience awesomeness, joy in every moment.

                            This is a fest where you get to show off your spectacular skills in gaming, coding and

                            other fun-loving events</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Visual Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>People interaction</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Logo Design</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
