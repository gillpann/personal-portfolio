'use client'

import {RiInstagramFill, RiGithubFill, RiLinkedinFill} from 'react-icons/ri';
import Link from 'next/link';

const icons = [
    {
        path:'/',
        name: <RiInstagramFill />,
    },
    {
        path:'/',
        name: <RiGithubFill />,
    },
    {
        path:'/',
        name: <RiLinkedinFill />,
    },
];

const Socials = ({containerStyles, iconsStyles}) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index)=> {
                return <Link href={icon.path} key={index}>
                <div className={`${iconsStyles}`}>{icon.name}</div>
                </Link>
            })}
        </div>
    )
};

export default Socials