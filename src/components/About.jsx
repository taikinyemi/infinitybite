import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
          "Choose us for an unparalleled experience crafted with passion and
          dedication. We prioritize your satisfaction by offering a diverse
          selection of premium products/services, personalized attention to your
          needs, and a commitment to excellence.
        </p>
        <p>
          With a reputation for reliability and innovation, we stand as your
          trusted partner, ensuring that every interaction with us is a decision
          well made.
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
