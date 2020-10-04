import ICard from 'interfaces/ICard'
import OpenPayM from 'shared/modules/OpenPay'

const TokenService = () => {
  const generateNewToken = (card: ICard, successCallback: Function, errorCallback: Function) => {
    OpenPayM.token.create(card, successCallback, errorCallback)
  }
  
  return {
    generateNewToken
  }
}

export default TokenService()