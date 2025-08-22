function pipe(...funcs) {
  return function (initialValue) {
    return funcs.reduce((acc, currFunc) => {
      return currFunc(acc);
    }, initialValue);
  };
}

export function pipeUtil() {
  const trim = (str) => str.trim();
  const toLower = (str) => str.toLowerCase();
  const removePunctuation = (str) => str.replace(/[.,!?]/g, "");
  const capitalizeWords = (str) =>
    str.replace(/\b\w/g, (char) => char.toUpperCase());

  const transformInput = pipe(
    trim,
    toLower,
    removePunctuation,
    capitalizeWords
  );

  // Usage
  const rawInput = "  Hello, world!!  ";
  console.log("Piped function", transformInput(rawInput)); // "Hello World"
}

function asyncPipe(...funcs) {
  return async function (initValue) {
    let result = initValue;

    for (const func of funcs) {
      try {
        result = await func(result);
      } catch (err) {
        console.error("Error in step:", func.name || "anonymous", err);
        throw err;
      }
    }

    return result;
  };
}

export function asyncPipeUtil() {
  // Async step functions
  const fetchUser = async (id) => {
    const res = await fetch(`/api/user/${id}`);
    return await res.json();
  };

  const extractEmail = async (user) => user.email;

  const log = async (email) => {
    console.log("Email:", email);
    return email;
  };

  // Compose using asyncPipeAwait
  const loadUserEmail = asyncPipe(fetchUser, extractEmail, log);

  // Run
  console.log("Async pipe in action:", loadUserEmail(42));
}
