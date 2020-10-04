import IAddress from './IAddress'

interface ICard {
  holder_name: string, 
  card_number: number,
  cvv2: number,
  expiration_month: number,
  expiration_year: number,
  address: IAddress,
}

export default ICard