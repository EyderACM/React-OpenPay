import styled from 'styled-components'
import { pixelToRem } from 'shared/utils/pixelToRem'

interface IResizableImg {
  width?: number,
  height?: number
}

export const ResizableImg = styled.img<IResizableImg>`
  ${({height}) => height &&  `height: ${pixelToRem(height)}`};
  ${({width}) => width &&  `width: ${pixelToRem(width)}`};
`