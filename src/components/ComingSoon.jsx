import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({ days: 10, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 10);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='min-h-screen bg-black text-white flex flex-col items-center justify-center p-5 relative'>
      <motion.div
        className='absolute top-10'
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
      >
        <Image
          src='/public/white-halo.png'
          alt='Floating Halo'
          width={200}
          height={100}
          className='opacity-80'
        />
      </motion.div>

      <motion.div
        className='mb-10'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src='/public/Burdened_But_Still_Blessed_Streetlight_White_Halo_Printify_Ready.png'
          alt='Burdened but Still Blessed'
          width={600}
          height={800}
          className='rounded-2xl shadow-lg'
        />
      </motion.div>

      <motion.div
        className='mb-10'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Image
          src='/public/Heavy_Halos_Transparent.png'
          alt='Heavy Halos Logo'
          width={400}
          height={200}
          className='rounded-xl'
        />
      </motion.div>

      <motion.h1
        className='text-3xl md:text-5xl font-bold mb-5 text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Coming Soon
      </motion.h1>

      <motion.div
        className='text-xl md:text-2xl font-semibold mb-5 text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
      </motion.div>

      <Button className='bg-white text-black px-5 py-3 rounded-full font-bold hover:bg-gray-200 transition'>
        Get Notified
      </Button>
    </div>
  );
}
