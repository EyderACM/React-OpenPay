import pubsub from 'sweet-pubsub'
import { get } from 'lodash'
import { DANGER, BLUE_FANCY} from '../constants/colors'

interface Ishow {
  title: string,
  type?: string,
  message?: string,
  duration?: number,
}

const show = (toast: Ishow) => pubsub.emit('toast', toast)

const success = (title: string) => show({ title, type:  BLUE_FANCY})

const error = (err: string) => {
  show({
    type: DANGER,
    title: 'Error',
    message: get(err, 'message', err),
    duration: 0,
  });
};

export default { show, error, success };