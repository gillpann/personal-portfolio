'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000,  
        easing: 'ease-in-out',  
        once: true,  
        offset: 100, 
        });
    }, []);

    return null;
};

export default AOSInitializer;
