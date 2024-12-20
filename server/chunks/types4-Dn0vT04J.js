const dbIdentification = ({
  memberId,
  externalCode
}) => memberId ? { memberId } : { externalCustomerCode: externalCode };
const GRACE_PERIOD_WINDOW = 60 * 1e3;
const TIME_TO_BUY = 5 * 60 * 1e3;

export { GRACE_PERIOD_WINDOW as G, TIME_TO_BUY as T, dbIdentification as d };
//# sourceMappingURL=types4-Dn0vT04J.js.map
