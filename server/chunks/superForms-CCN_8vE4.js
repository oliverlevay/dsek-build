import { t as toast } from './toast2-BAKD7V1C.js';
import { s as superForm$1 } from './superForm-DTXAq_ly.js';
import './superValidate-C2lU2J3v.js';
import './index-BHX467Gw.js';

function superForm(...params) {
  return superForm$1(params[0], {
    onError: (response) => {
      toast(response.result.error.message, "error");
    },
    ...params[1]
  });
}

export { superForm as s };
//# sourceMappingURL=superForms-CCN_8vE4.js.map
