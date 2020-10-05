import ICharge from 'interfaces/ICharge'
import axios from 'axios'

const PaymentService = () => {
  const makePayment = (chargeData: ICharge,  onSuccessCallback: Function, onFailCallback: Function) => {
    axios({
      url: `${process.env.REACT_APP_BASE_URL || "http://localhost:3001"}api/posts/charge/post`,
      method: 'POST',
      data: chargeData,
      headers: {
        "Content-type": "application/json",
      },
    }).then(
      res => { onSuccessCallback(res.data) }, 
      error => { onFailCallback(error) })
  }

  return {
    makePayment
  }
}

export default PaymentService()