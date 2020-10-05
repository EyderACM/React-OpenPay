import styled from 'styled-components'

import { pixelToRem } from 'shared/utils/pixelToRem'
import { BLUE_FANCY } from 'shared/constants/colors'

export const DetailWrapper = styled.div`
  border: ${BLUE_FANCY} solid ${pixelToRem(2)};
  border-radius: ${pixelToRem(10)};
  height: ${pixelToRem(500)};
  padding: ${pixelToRem(10)} ${pixelToRem(10)} 0 ${pixelToRem(10)};
  width: 95%;
`