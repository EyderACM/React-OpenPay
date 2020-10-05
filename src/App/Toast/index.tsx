import React, { useState, useEffect } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import pubsub from "sweet-pubsub"
import { uniqueId } from "lodash"

import { Container, StyledToast, CloseIcon, Title, Message } from "./styles"
import cross from "img/cross.svg"

interface ISingleToast {
  id: string
  type: string
  title: string
  message: string
}

const Toast = () => {
  const [toasts, setToasts] = useState<ISingleToast[]>([])

  useEffect(() => {
    const addToast = ({
      type = "success",
      title,
      message,
      duration = 5,
    }: any) => {
      const id = uniqueId("toast-")

      setToasts((currentToasts) => [
        ...currentToasts,
        { id, type, title, message },
      ])

      if (duration) {
        setTimeout(() => removeToast(id), duration * 1000)
      }
    }

    pubsub.on("toast", addToast)

    return () => {
      pubsub.off("toast", addToast)
    }
  }, [])

  const removeToast = (id: string) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    )
  }

  return (
    <Container>
      <TransitionGroup>
        {toasts.map((toast) => (
          <CSSTransition key={toast.id} classNames="jira-toast" timeout={200}>
            <StyledToast
              key={toast.id}
              type={toast.type}
              onClick={() => removeToast(toast.id)}
            >
              <CloseIcon src={cross} />
              {toast.title && <Title>{toast.title}</Title>}
              {toast.message && <Message>{toast.message}</Message>}
            </StyledToast>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  )
}

export default Toast
