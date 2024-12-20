import { v4 } from 'uuid';
import { w as writable } from './index2-Bcb5RUHj.js';

const toasts = writable([]);
function toast(message, type = "info", toastId) {
  if (toastId) {
    toasts.update((state) => {
      if (state.some((t) => t.id === toastId)) return state;
      return [
        ...state,
        {
          message,
          type,
          id: toastId
        }
      ];
    });
  } else {
    toasts.update((state) => [
      ...state,
      {
        message,
        type,
        id: v4()
      }
    ]);
  }
  setTimeout(removeToast, type === "error" ? 4e3 : 2e3);
}
function removeToast() {
  toasts.update((state) => {
    return state.slice(1);
  });
}

export { toasts as a, toast as t };
//# sourceMappingURL=toast2-BAKD7V1C.js.map
