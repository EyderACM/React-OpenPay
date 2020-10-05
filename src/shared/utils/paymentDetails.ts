import { v4 as uuidv4 } from 'uuid'

export const auctionDetails = ({
  payConcept = 'Realización de un evento de subasta',
  goodType = 'Correo',
  serviceImport = 15,
  date = new Date().toISOString().slice(0, 10),
  time = new Date().toLocaleTimeString(),
  timezone = 'México'
}) => [{
    detailName: 'Concepto del pago',
    detailValue: payConcept
  },{
    detailName: 'Tipo de bien',
    detailValue: goodType
  },{
    detailName: 'ID del evento',
    detailValue: uuidv4()
  },{
    detailName: 'Importe del servicio',
    detailValue: `$${serviceImport}`
  },{
    detailName: 'Fecha de adjudicación',
    detailValue: date
  },
  {
    detailName: 'Hora de adjudicación',
    detailValue: time
  },
  {
    detailName: 'Huso-horario deseado',
    detailValue: timezone
  }
]