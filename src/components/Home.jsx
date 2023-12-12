import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpMpPwHVmrdb5wH9jZ96WFv1JkVYrYjW4cIkdI8K27qa-RbjVjPtwnis6067sslgXzyxdk-H56YHPtKfFBtmod5wWB24gr8i-FbXexWW6TBQOej5grNxeUgYe0ewPmNwlJYEdaJS7SGhDMEnz7YFugb_cApOCSjyRK8OlDiXWf3R4NySKmiBh4AyHjeuo/s1380/heroi.jpg.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
        Savor the Culinary Adventure in Every Bite.
        </h1>
        <p className=" text-backgroundColor">
        Indulge in a culinary experience like no other, where every bite is a step towards savoring the extraordinary flavors that elevate your inner foodie.        </p>
        <div className=" lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;