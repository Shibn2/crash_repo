function userData() {
  let name = null;
  let age = null;
  function set(name, age) {
    name = name;
    age = age;
  }
  function getWelcomeMessage() {
    return `Hi ${name} , Welcome to the team!!!`;
  }

  return {
    set,
    getWelcomeMessage,
  };
}

async function userDataAsync() {
  const userData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "JSRookie", age: 1 });
    }, 1000);
  });

  const achievementList = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { title: "JSBasics Challenge", winner: "JSRookie" },
        { title: "JSDOM Challenge", winner: "JSRookie" },
        { title: "JSDOM Advance Challenge", winner: "JSDeveloper" },
      ]);
    }, 2000);
  });

  //   await userData;
  console.log("User data: ", await userData);

  setTimeout(() => {
    console.log("User loaded");
  }, 2000);
  //   await achievementList;
  console.log("Achievement list: ", await achievementList);
}
function userDataFetch() {
  console.log("User data fetching started!!!");

  setTimeout(() => {
    console.log("User data loaded");
  }, 2000);

  console.log("User data load complete");
}

function main() {
  userDataFetch();
}

export default function closureUtil() {
  const user = userData();

  user.set("Shibin", 34);

  console.log(user.getWelcomeMessage());

  userDataAsync();
  main();
}
