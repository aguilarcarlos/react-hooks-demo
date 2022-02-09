import { useLayoutEffect, useEffect } from 'react';

// For seeing the difference, open the devtools and see the logs
export default function UseLayoutEffect() {
  // Layout works as synchronous function before components gets mounted
  // in a nutshell, is blocking the rendering
  useLayoutEffect(() => {
    console.log('useLayoutEffect 1 executed!!!');
  }, []);

  // useEffect waits until components are ready and mounted
  // in a nutshell, waits for render without blocking it
  useEffect(() => {
    console.log('useEffect 1 executed!!!');
  }, []);

  useLayoutEffect(() => {
    console.log('useLayoutEffect 2 executed!!!');
  }, []);

  useEffect(() => {
    console.log('useEffect 2 executed!!!');
  }, []);

  useLayoutEffect(() => {
    console.log('useLayoutEffect 3 executed!!!');
  }, []);

  useEffect(() => {
    console.log('useEffect 3 executed!!!');
  }, []);

  useLayoutEffect(() => {
    console.log('useLayoutEffect 4 executed!!!');
  }, []);

  useEffect(() => {
    console.log('useEffect 4 executed!!!');
  }, []);

  return (
    <div>
      <h1>DOM Element</h1>
    </div>
  )
}
