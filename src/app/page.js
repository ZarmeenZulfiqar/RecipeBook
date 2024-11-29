'use client';
import dynamic from 'next/dynamic';
// Dynamically import Lottie component to disable SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import hi from '../app/homeAnimation/hi.json'; 
import cooking from '../app/homeAnimation/cooking.json'; 

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Lottie
        animationData={hi}
        loop={true}       // Loop the animation
        autoplay={true}   // Start the animation automatically
        style={{ width: '60%', height: '200px' }} // You can adjust size here
      />
      <Lottie
        animationData={cooking}
        loop={true}       // Loop the animation
        autoplay={true}   // Start the animation automatically
        style={{ width: '60%', height: '200px' }} // You can adjust size here
      />
    </div>
  );
}

