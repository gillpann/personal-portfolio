import Image from "next/image";
const DevImg = ({ containerStyles, imgSrc, width, height }) => {
    return (
        <div className={`${containerStyles}`}>
        <Image
            src={imgSrc}
            alt=""
            className="object-cover w-full h-full rounded-full"
            width={width}
            height={height}
        />
        </div>
    );
};

export default DevImg;
