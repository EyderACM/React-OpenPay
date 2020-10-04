import styled from 'styled-components'

import { pixelToRem } from 'shared/utils/pixelToRem'
import { BLUE_FANCY, WHITE } from 'shared/constants/colors'

export const ActionButton = styled.button`
  align-self: center;
  background: ${ BLUE_FANCY };
  border: none;
  border-radius: ${pixelToRem(15)};
  color: ${ WHITE };
  cursor: pointer;
  font-size: ${pixelToRem(17)};
  font-weight: 600;
  height: ${pixelToRem(50)};
  justify-self: center;
  transition: .2s ease-out;
  width: ${pixelToRem(150)};

  &:hover {
    scale: 1.02;
  } 
`