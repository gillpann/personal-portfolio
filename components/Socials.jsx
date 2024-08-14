"use client";

import { RiInstagramFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";

const icons = [
    {
        path: "https://www.instagram.com/gillpaan_",
        name: <RiInstagramFill />,
    },
    {
        path: "https://github.com/gillpann",
        name: <RiGithubFill />,
    },
    {
        path: "https://www.linkedin.com/in/satria-ahmad-gilvan-pundong",
        name: <RiLinkedinFill />,
    },
];

const Socials = ({ containerStyles, iconsStyles }) => {
    return (
        <div className={`${containerStyles}`}>
        {icons.map((icon, index) => (
            <a
            key={index}
            href={icon.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconsStyles}
            >
            {icon.name}
            </a>
        ))}
        </div>
    );
};

export default Socials;
