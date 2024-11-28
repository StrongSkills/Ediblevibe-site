import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { LoadingSpinner } from './LoadingSpinner';

interface SplineSceneProps {
  scene: string;
  className?: string;
  fallback?: React.ReactNode;
  onError?: () => void;
}

export function SplineScene({ 
  scene, 
  className = '', 
  fallback,
  onError 
}: SplineSceneProps) {
  return (
    <Suspense fallback={
      <div className="w-full h-full flex items-center justify-center bg-gray-900">
        {fallback || <LoadingSpinner />}
      </div>
    }>
      <Spline
        scene={scene}
        className={className}
        onError={onError}
      />
    </Suspense>
  );
}