import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../App'

const StyledSpinner = styled.div<{ ringColor: string; color: string }>`
  border: 16px solid ${({ ringColor }) => ringColor};
  border-radius: 50%;
  border-top: 16px solid ${({ color }) => color};
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Spinner = ({ color }: { color?: string }) => {
  const theme = useContext(ThemeContext)

  return <StyledSpinner color={color ? color : theme.primary} ringColor={theme.text} />
}

export default Spinner
