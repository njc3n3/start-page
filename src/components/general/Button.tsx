import React, { ButtonHTMLAttributes, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../App'
import { borderRadiusMixin } from './Mixins'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string
  color?: 'primary' | 'secondary'
}

const Button = ({ children, icon, color, ...props }: Props) => {
  const theme = useContext(ThemeContext)
  const text = color ? (color === 'primary' ? 'primaryText' : 'secondaryText') : 'primaryText'

  const StyledButton = styled.button`
    background-color: ${color ? theme[color] : theme.primary};
    border: 1px solid ${color ? theme[color] : theme.primary};
    padding: 8px 16px;
    color: ${theme[text]};
    cursor: pointer;
    ${borderRadiusMixin}
    position: relative;
    overflow: hidden;
    /* transition-property: color background-color;
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out; */

    :hover {
      background-color: ${theme.background};
      color: ${theme.text};
    }

    :active {
      transform: translateY(1px);
    }
  `

  return (
    <StyledButton {...props}>
      {icon && <i className={`fas fa-${icon}`} style={{ paddingRight: children ? 4 : undefined }}></i>}
      {children}
    </StyledButton>
  )
}

export default Button
