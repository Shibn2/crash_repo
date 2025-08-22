function enableProfileSettings() {
  console.log("Enable profile settings!");
}

function accountData() {
  console.log("Account data initiated!");
  enableProfileSettings();
  setTimeout(() => {
    console.log("Enable promotion banner");
  });
}
export default function accountDataUtil() {
  console.log("Account data util started!");
  accountData();
  console.log("Account data util ended!");
}
