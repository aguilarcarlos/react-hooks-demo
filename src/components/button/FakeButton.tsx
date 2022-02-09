import {useImperativeHandle, forwardRef, useRef, PropsWithChildren} from 'react';
import styled from 'styled-components';

// This is just for styling the component on focus
const ButtonFocus = styled.button`
  &: focus {
    background-color: red;
  }
`

// Important to create a custom ref type because it's going to be exported to be
// used with `useRef` generic
export type FakeButtonRefAttributes = {
  doMagic: () => void;
}

// Just for testing, let's have empty props but using `PropsWithChildren` because
// we are using the children to display anything inside our HOC
export type FakeButtonProps = PropsWithChildren<{}>;

// Use forwardRef to forward the react references, since this is a generic type let's pass
// ref attributes first and prop declarations
const FakeButton = forwardRef<FakeButtonRefAttributes, FakeButtonProps>(({ children }, ref) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Attach methods to the external ref, is helpful to use it as a data layer for manipulating
  // stuff inside the component or HTML attributes
  useImperativeHandle(ref, () => ({
    doMagic() {
      buttonRef.current?.focus();
    },
  }));

  return (
    <div>
      <ButtonFocus ref={buttonRef}>{children}</ButtonFocus>
    </div>
  )
});

export default FakeButton;
