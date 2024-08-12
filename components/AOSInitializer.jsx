'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000,  // Durasi animasi
        easing: 'ease-in-out',  // Easing
        once: true,  // Hanya tampil sekali
        offset: 100,  // Offset untuk memulai animasi
        });
    }, []);

    return null;
};

export default AOSInitializer;
