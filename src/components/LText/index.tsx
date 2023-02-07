import React, { createElement, ReactHTML } from "react";
import useComponentCommon from '@/hooks/useComponentCommon';
import { textDefaultProps, textStylePropNames } from '@/defaultProps';
import './index.less';
type LTextProps = {
  tag?: keyof ReactHTML;
} & Partial<typeof textDefaultProps>

const LText: React.FC<LTextProps> = (props) => {
  const { tag = 'div', text } = props;
  const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames)
  return (
    createElement(
      tag,
      { 
        className: 'l-text-component',
        onClick: handleClick,
        style: styleProps,
      },
      text
    )
  );
};

export default LText;