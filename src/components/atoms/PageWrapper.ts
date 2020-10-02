import styled from 'styled-components'

export interface IPageWrapper {
  fullScreen?: boolean
}

export const PageWrapper = styled.div<IPageWrapper>`
  display: flex;
  ${({fullScreen}) => fullScreen && `height: 95vh;`}
  ${({fullScreen}) => fullScreen && `width: 98vw;`}
`