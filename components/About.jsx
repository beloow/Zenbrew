"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Badge from "./Badge";
import Separator from "./Separator";

const data = [
  {
    imgSrc: "/assets/about/photo-1.jpg",
    title: "Notre voyage",
    description:
      "Fondé en 2000, Zenbrew a commencé comme un petit café avec une vision d'un café exceptionnel. Aujourd'hui une marque appréciée, nous sommes connus pour leur qualité et leur durabilité. Animés par la passion, nous créons des expériences café mémorables. Rejoignez-nous pour explorer le café, une tasse à la fois.",
  },
  {
    imgSrc: "/assets/about/photo-2.jpg",
    title: "Notre promesse",
    description:
      "Chez Zenbrew, nous promettons le meilleur café avec un impact positif. Nous nous approvisionnons en haricots provenant de fermes durables, dans le respect des personnes et de la planète. Notre torréfaction méticuleuse garantit une expérience riche et satisfaisante. Nous nous engageons envers la qualité, la durabilité et la communauté.",
  },
  {
    imgSrc: "/assets/about/photo-3.jpg",
    title: "Notre équipe",
    description:
      "Chez Zenbrew, notre équipe dévouée est derrière chaque grande tasse. Nos baristas qualifiés et nos torréfacteurs experts travaillent avec passion et précision, rendant chaque expérience café spéciale. Rencontrez les personnes qui apportent créativité et soin à chaque tasse et découvrez leurs histoires uniques.",
  },
];

const About = () => {
  const scrollableSectionRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animation = gsap.fromTo(
      scrollableSectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: "top top",
          end: "1800vw top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-primary">
      <div ref={scrollTriggerRef}>
        <div ref={scrollableSectionRef} className="h-screen w-[300vw] flex relative">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-screen h-screen flex flex-col justify-center items-center relative"
              >
                <div className="container mx-auto">
                  <div className="flex gap-[30px] relative">
                    {/* text */}
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <Badge containerStyles="w-[180px] h-[180px]" />
                      <div className="max-w-[560px] text-center">
                        {/* title */}
                        <h2 className="h2 text-white mb-4">
                          <span className="mr-4">
                            {item.title.split(" ")[0]}
                          </span>
                          <span className="text-accent">
                            {item.title.split(" ")[1]}
                          </span>
                        </h2>
                        {/* separator */}
                        <div className="mb-8">
                          <Separator />
                        </div>
                        {/* Description */}
                        <p className="leading-relaxed mb-16 px-8 xl:px-0">
                          {item.description}
                        </p>
                        {/* btn */}
                        <button className="btn">See More</button>
                      </div>
                    </div>
                    {/* Image */}
                    <div className="hidden xl:flex flex-1 w-full h-[70vh] relative">
                      <Image
                        src={item.imgSrc}
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                        alt="About Us Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
