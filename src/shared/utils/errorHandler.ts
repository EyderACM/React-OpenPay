import toast from './toast'

export const tokenGeneratedHandler = () => {
  toast.success('Token generado satisfactoriamente')
}

export const tokenFailedHandler = () => {
  toast.error('Token no ha sido generado')
}

export const succesfulPayment = (callback: any) => {
  toast.success('Pago realizado satisfactoriamente')
  callback()
}

export const failedPayment = () => {
  toast.error('El pago ha fallado')
}