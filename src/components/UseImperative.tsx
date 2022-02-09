import { useRef, useEffect } from 'react';
import FakeButton, { FakeButtonRefAttributes } from './button/FakeButton';

export default function UseImperative() {
  // Create a reference for the object that will be injected into `fakeButtonRef`
  const fakeButtonRef = useRef<FakeButtonRefAttributes>(null);

  useEffect(() => {
    if (fakeButtonRef.current) {
      fakeButtonRef.current.doMagic();
    }
  }, []);

  return (
    <div>
      <FakeButton ref={fakeButtonRef}>Fake Button</FakeButton>
    </div>
  )
}
