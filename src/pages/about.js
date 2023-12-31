import AnimatedText from "@/Components/AnimatedText";
import Education from "@/Components/Education";
import Layout from "@/Components/Layout";
import Skills from "@/Components/Skills";
import Transitions from "@/Components/Transitions";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ProfilePic from "../../public/images/profile/gaurav.jpeg";
import Experience from "@/Components/Experience";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionvalue = useMotionValue(1);

  const springvalue = useSpring(motionvalue, { duration: 4200 });

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionvalue.set(value);
    }
  }, [isInView, value, motionvalue]);

  useEffect(() => {
    springvalue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springvalue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Gaurav | About Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transitions/>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Passion Fuels Purpose! "}
            className="mb-16 lg:!text-7xl md:!text-6xl sm:!text-4xl sm:!mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase tex-dark/75 dark:text-primary">
                BIOGRAPHY
              </h2>
              <p className="font-medium">
              Welcome to my corner of the digital realm! I&apos;m Gaurav Singh, a passionate Machine Learning 
              Engineer with a keen focus on developing and implementing cutting-edge deep learning models for 
              various applications in the realm of data science. My journey in the field has been marked by the 
              creation of impactful projects, such as drowsiness detection systems and in-depth analyses of YouTube 
              and Uber data.


              </p>

              <p className="font-medium my-4">
              My technical toolkit includes proficiency in Python, where I harness the power of PyTorch, 
              numpy, and pandas, among other modules, to bring ideas to life. I thrive on the challenge 
              of translating complex problems into elegant solutions, and my commitment to staying at the 
              forefront of technology fuels my drive to explore new possibilities within the ever-evolving 
              landscape of machine learning.

              </p>

              <p className="font-medium">
              Whether delving into the intricacies of neural networks or extracting meaningful insights from 
              vast datasets, I find joy in the pursuit of innovation and the potential to make a positive impact. 
              Join me on this journey as we navigate the fascinating intersection of machine learning and real-world 
              applications. I look forward to working with you!
              </p>
              
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 rounded-br-xl border-solid border-dark bg-light p-3 dark:bg-dark dark:border-primaryDark xl:col-span-4 md:order-1 md:col-span-8" >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-primary " />
              <Image
                src={ProfilePic}
                alt="Profile Pic"
                className="w-full h-auto rounded-2xl border-solid border-2 dark:border-primaryDark"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl">
                  <AnimatedNumbers value={1200} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-primaryDark xl:items-center md:text-lg sm:text-base xs:text-sm">
                  Hours of Coding{" "}
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl">
                  <AnimatedNumbers value={500} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-primaryDark xl:items-center md:text-lg sm:text-base xs:text-sm">
                  Hours of DSA
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-primaryDark xl:items-center md:text-lg sm:text-base xs:text-sm">
                  Projects
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
