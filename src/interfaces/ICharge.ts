interface ICharge {
  source_id: string,
  method: string,
  amount: number,
  currency: string,
  description: string,
  order_id: string,
  device_session_id: string,
  customer: {
    name: String,
    last_name: string,
    phone_number: string,
    email: string,
  }
}

export default ICharge