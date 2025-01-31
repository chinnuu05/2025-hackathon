'use client';
import { NavigationProgress, nprogress } from '@mantine/nprogress';
import { useEffect } from 'react';

export function RouterTransition() {
  useEffect(() => {
    nprogress.complete();
    return () => nprogress.complete();
  }, []);

  return <NavigationProgress color="blue" size={12} />;
}