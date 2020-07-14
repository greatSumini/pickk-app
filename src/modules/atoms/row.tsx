import React from 'react';
import styled from 'styled-components/native';

export type RowProps = {
  className?: string;
  style?: any;
  onClick?: any;
  children: any;
  onMouseDown?: any;
  onMouseMove?: any;
  onMouseUp?: any;
  onTouchStart?: any;
  onTouchMove?: any;
  onTouchEnd?: any;
};

export default function Row(props: RowProps) {
  const {
    className,
    style,
    onClick,
    children,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  } = props;

  return (
    <Wrapper
      className={className}
      style={style}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.View({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
});
