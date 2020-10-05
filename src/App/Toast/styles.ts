import styled from 'styled-components'
import { pixelToRem } from 'shared/utils/pixelToRem'

interface IStyledToast {
  type: string;
}

export const Container = styled.div`
  z-index: 1001;
  position: fixed;
  right: 30px;
  top: 50px;
`;

export const StyledToast = styled.div<IStyledToast>`
  position: relative;
  margin-bottom: 5px;
  width: 300px;
  padding: 15px 20px;
  border-radius: 3px;
  color: #fff;
  ${({type}) => type && `background: ${type}`};
  cursor: pointer;
  transition: all 0.15s;
  transform: translateZ(0);
  &.jira-toast-enter,
  &.jira-toast-exit.jira-toast-exit-active {
    opacity: 0;
    right: -10px;
  }
  &.jira-toast-exit,
  &.jira-toast-enter.jira-toast-enter-active {
    opacity: 1;
    right: 0;
  }
`;

export const CloseIcon = styled.img`
  color: white;
  cursor: pointer;
  position: absolute;
  font-size: ${pixelToRem(22)};
  top: ${pixelToRem(13)};
  right: ${pixelToRem(14)};
  width: ${pixelToRem(18)};
`;

export const Title = styled.div`
  padding-right: 22px;
  font-size: ${pixelToRem(15)};
  font-weight: 600;
`;

export const Message = styled.div`
  padding: 8px 10px 0 0;
  white-space: pre-wrap;
  font-size: ${pixelToRem(14)};
`;