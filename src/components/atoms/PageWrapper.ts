import styled from 'styled-components'

export interface IPageWrapper {
  fullScreen?: boolean;
  justify?: boolean;
}

export const PageWrapper = styled.div<IPageWrapper>`
  display: flex;
  ${({fullScreen}) => fullScreen && `height: 95vh;`}
  ${({justify}) => justify && `justify-content: center;`}
  ${({fullScreen}) => fullScreen && `width: 98vw;`}
`