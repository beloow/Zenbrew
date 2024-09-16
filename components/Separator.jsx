import Image from "next/image";

// Default value = bg = "accent"
const Separator = ({bg = "white"}) => {
  const imgSrc = 
  bg === "accent" 
  ? "/assets/separator-accent.svg"
  : "/assets/separator-white.svg";
  
  return <div className="relative w-[168px] h-[26px] mx-auto"><Image src={imgSrc} fill alt="Separator" /></div>;
};

export default Separator;