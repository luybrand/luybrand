import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className=" w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          {/* <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-relaxed"
            >
              Choose Your Plan
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Let's choose the package that is best for you and explore it happily
              and cheerfully.
            </motion.p>
          </ScrollAnimationWrapper> */}
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center ">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center lg:min-w-[500px] items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Standard.png"
                    width={145}
                    height={165}
                    alt="Standard Plan"
                  />
                </div>
                <p className="text-lg text-white font-medium capitalize my-2 sm:my-7">
                  Basic Access{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-white flex-grow">
                  <li className="relative check custom-list my-2">
                    3 PDF
                  </li>
                  <li className="relative check custom-list my-2">
                    Ebooks & Templates
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-white text-center mb-4 ">
                    Free
                  </p>
                  <ButtonOutline>Join Now</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center lg:min-w-[500px] border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Premium.png"
                    width={145}
                    height={165}
                    alt="Premium Plan"
                  />
                </div>
                <p className="text-lg text-white font-medium capitalize my-2 sm:my-7">
                  Standard Access{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-white flex-grow">
                  <li className="relative check custom-list my-2">
                    Full access to course creator masterclass
                  </li>
                  <li className="relative check custom-list my-2">
                    Full Access To Our Community.
                  </li>
                  <li className="relative check custom-list my-2">
                    Basic Access included.
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-white text-center mb-4 ">
                    998 Birr
                  </p>

                  <ButtonOutline>Join Now</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>

          </div>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">

            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center lg:min-w-[500px] items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Standard.png"
                    width={145}
                    height={165}
                    alt="Standard Plan"
                  />
                </div>
                <p className="text-lg text-white font-medium capitalize my-2 sm:my-7">
                  VIP Access{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-white flex-grow">
                  <li className="relative check custom-list my-2">
                    Full access to course creator masterclass
                  </li>
                  <li className="relative check custom-list my-2">
                    Extensive supplementary materials (PDF‘S)
                  </li>
                  <li className="relative check custom-list my-2">
                    Full Access To Our Community.
                  </li>
                  <li className="relative check custom-list my-2">
                    Exclusive live Q&A sessions or webinars.
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-white text-center mb-4 ">
                   2289 Birr
                  </p>
                  <ButtonOutline>Join Now</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center lg:min-w-[500px] border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Standard.png"
                    width={145}
                    height={165}
                    alt="Standard Plan"
                  />
                </div>
                <p className="text-lg text-white font-medium capitalize my-2 sm:my-7">
                  101 Mentorship{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-white flex-grow">
                  <li className="relative check custom-list my-2">
                    Free access for 5 minutes
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-white text-center mb-4 ">
                    Enroll Me
                  </p>
                  <ButtonOutline>Enroll Me</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>

        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Testimonials
            </motion.h3>
            {/* <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with great
              pleasure when using this crazy feature.
            </motion.p> */}
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          {/* <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-white text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p>Let's subscribe with us and find the fun.</p>
                </div>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper> */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
