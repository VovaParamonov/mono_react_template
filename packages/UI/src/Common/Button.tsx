import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export const StyledBtn = styled.button`
  background-color: transparent;
  border: 1px solid #cdcdcd;
  color: #cdcdcd;
  cursor: pointer;
  padding: 5px;
`;

export type ButtonProps = {
    children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...buttonProps }: ButtonProps) {
    return <StyledBtn { ...buttonProps } >{children}</StyledBtn>;
}

Button.displayName = 'Button';
