export const numberFormat = (price) => {
  const currency = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return currency.format(price);
};

// https://github.com/GoogleChromeLabs/web-push-codelab/blob/master/app/scripts/main.js
export const urlB64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    // eslint-disable-next-line no-useless-escape
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};
