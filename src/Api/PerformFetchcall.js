
import {Api} from './config'
async function  performFetchCall() {
            const response = await fetch(`${Api.url}`)
              .then((res) => res.json())
              .catch((e) => console.log(e));
            return response;
}
          
export { performFetchCall }
