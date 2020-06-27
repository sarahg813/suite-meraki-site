import React from "react";
import { Transition } from "react-transition-group";

const duration = 500;

const defaultStyles = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0.01 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0.01 },
};

const TransitionComponent = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration} unmountOnExit>
    {(state) => (
      <div
        style={{
          ...defaultStyles,
          ...transitionStyles[state],
        }}
      >
        {children}
      </div>
    )}
  </Transition>
);

export default TransitionComponent;
