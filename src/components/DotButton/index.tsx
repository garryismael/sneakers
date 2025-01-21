import React, { ComponentPropsWithRef } from "react";

type PropType = ComponentPropsWithRef<"button">;

const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

export default DotButton;
