export function reduceApplications() {
  const users = [
    { id: "u1", name: "Alice", banned: false },
    { id: "u2", name: "Bob", banned: true },
    { id: "u3", name: "Charlie", banned: false },
  ];
  const userMap = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});

  console.log("out1 --------------> ", userMap);

  const tags = ["sale", "new", "sale", "popular", "new", "sale"];

  const countMap = tags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});

  console.log("out2 -------------->", countMap);
}
