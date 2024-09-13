import Image from "next/image"

const Separator = ({containerStyles}) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image src="/assets/badge.svg" fill alt="Badge" className="object-contain" />
    </div>
  );
};

export default Separator;