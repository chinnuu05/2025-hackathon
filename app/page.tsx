'use client';


import Image from "next/image";
import { Button } from "@mantine/core";
import next from '../public/nextjs-n.svg';
import docker from '../public/docker.svg';
import mantine from '../public/mantine.svg';

import {
  IconHourglassHigh,
  IconHourglassLow,
  IconPlayerPlay,

} from "@tabler/icons-react";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

export default function Home() {
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const savedTime = Cookies.get('hackathonTimer');
    const savedIsRunning = Cookies.get('timerRunning');
    
    if (savedTime && savedIsRunning === 'true') {
      const currentTime = Date.now();
      const endTime = parseInt(savedTime);
      const remaining = Math.max(0, endTime - currentTime);
      setTimeRemaining(remaining);
      setIsRunning(true);
    }
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isRunning && timeRemaining !== null) {
      interval = setInterval(() => {
        setTimeRemaining((prev: number | null) => {
          if (prev === null || prev <= 0) {
            clearInterval(interval);
            return 0;
          }
          const newTime = prev - 1000;
          Cookies.set('hackathonTimer', String(Date.now() + newTime));
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    const duration = 24 * 60 * 60 * 1000; 
    const endTime = Date.now() + duration;
    setTimeRemaining(duration);
    setIsRunning(true);
    Cookies.set('hackathonTimer', String(endTime));
    Cookies.set('timerRunning', 'true');
  };

  const formatTime = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-10">

        <div className="space-y-8">

          <div className="mt-12">
            <div className="text-3xl font-[400]">2025 Wright State University Hackathon</div>
          </div>

          <div className="text-3xl space-x-12 flex items-center">

            <div className="flex space-x-3 items-center">
              <div>NextJS</div>
              <div className="mt-2"><Image src={next} alt="NextJS" width={43} height={43} /></div>
            </div>

            <div className="text-3xl font-bold">+</div>


            <div className="flex space-x-3 items-center">
              <div>Docker</div>
              <div><Image src={docker} alt="Docker" width={43} height={43} /></div>
            </div>

            <div className="text-3xl font-bold">+</div>

            <div className="flex space-x-3 items-center">
              <div>MantineJS</div>
              <div><Image src={mantine} alt="MantineJS" width={43} height={43} /></div>
            </div>


          </div>

        </div>


        <div>


          <div>
            {!isRunning ? (
              <Button
                size="lg"
                radius="lg"
                leftSection={<IconPlayerPlay />}
                onClick={startTimer}
              >
                Start Hackathon Timer
              </Button>
            ) : (
              <Button
                size="lg"
                radius="lg"
                leftSection={<IconHourglassLow />}
                variant="light"
                disabled
              >
                {timeRemaining !== null ? formatTime(timeRemaining) : '24:00:00'}
              </Button>
            )}

          </div>

        </div>
      </div>
    </div>

  );
}
