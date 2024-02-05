import React from 'react';

import { Button, Image } from '@nextui-org/react';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-4 mx-auto md:gap-8 xl:gap-0 md:py-8 md:grid-cols-12">
        <div className="mr-auto place-self-center md:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Clínica Terapêutica
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 md:mb-8 md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            consectetur consequatur animi magni alias vitae voluptas quo
            voluptate eveniet delectus recusandae.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Button color="primary" variant="shadow" size="lg">
              Get Started -
            </Button>
            <Button color="primary" variant="ghost" size="lg">
              Speak to Sales
            </Button>
          </div>
        </div>
        <div className="hidden md:mt-0 md:col-span-5 md:flex">
          <Image
            src="images/hero.jpeg"
            alt="Hero Image"
            style={{ objectFit: 'scale-down' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
