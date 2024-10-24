"use client";

import HugeGlobal from "../../public/assets/HugeGlobal.svg";
import amazon from "../../public/assets/Icon/amazon.png";
import netflix from "../../public/assets/Icon/netflix.png";
import reddit from "../../public/assets/Icon/reddit.png";
import discord from "../../public/assets/Icon/discord.png";
import spotify from "../../public/assets/Icon/spotify.png";

import { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getScrollAnimation } from "@/lib/utils";
import ScrollAnimationWrapper from "../ScrollAnimationWrapper";

const GlobalNetwork = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div>
      {/* Global Network */}
      <div className="flex flex-col w-full my-16">
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-500-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto text-center"
          >
            Huge Global Network of Fast VPN{" "}
          </motion.h3>
          <motion.p
            className="leading-normal mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
            variants={scrollAnimation}
          >
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
          </motion.p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div className="w-full px-8 mt-8" variants={scrollAnimation}>
            <Image
              src={HugeGlobal}
              alt="Huge Global Network"
              layout="responsive"
              placeholder="empty"
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="w-full flex justify-center">
        <ScrollAnimationWrapper className="w-full flex justify-evenly items-center flex-wrap lg:flex-nowrap">
          <motion.img
            src={amazon}
            alt="Amazon"
            className="h-14 w-auto mt-4"
            variants={scrollAnimation}
          />
          <motion.img
            src={netflix}
            alt="Netflix"
            className="h-14 w-auto mt-4"
            variants={scrollAnimation}
          />
          <motion.img
            src={reddit}
            alt="Reddit"
            className="h-14 w-auto mt-4"
            variants={scrollAnimation}
          />
          <motion.img
            src={discord}
            alt="Discord"
            className="h-14 w-auto mt-4"
            variants={scrollAnimation}
          />
          <motion.img
            src={spotify}
            alt="Spotify"
            className="h-14 w-auto mt-4"
            variants={scrollAnimation}
          />
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default GlobalNetwork;
