const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 10, tags: ["html", "css"] },
  { id: "002", likes: 2, tags: ["python", "java"] },
  { id: "003", likes: 0, tags: ["js", "html", "nodejs"] },
  { id: "004", likes: 30, tags: ["js", "vue", "react"] },
];

let sumOfLikes = 0;

for (let i = 0; i < tweets.length; i++) {
  sumOfLikes += tweets[i].likes;
}

console.log("Сума всіх лайків на постах користувача:", sumOfLikes);

const likes = tweets.reduce(
  (countOfLikes, currentTweet) => countOfLikes + currentTweet.likes,
  0
);

const getUserTags = (tweets) => {
  const result = tweets.reduce((listOfTags, currentTweet) => {
    listOfTags.push(...currentTweet.tags);

    return listOfTags;
  }, []);
  return result;
};
const userTags = getUserTags(tweets);

const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }
  acc[tag] += 1;

  return acc;
};

const countOfTags = userTags.reduce(getTagStats, {});

console.log(countOfTags);

const users = [
  { name: "Oleksii", account: 100 },
  { name: "Amalia", account: 300 },
  { name: "Pavlo", account: 220 },
  { name: "Oleksandr", account: 500 },
  { name: "Nazariy", account: 170 },
];

const sortedUsersByAccount = users.sort(
  (first, second) => -(first.account - second.account)
);

const test = ["a", "A", "A", "a", "a"];

console.log(test.sort());

//const sortedUsersByName = users.console.log(sortedUsersByAccount);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const res = numbers.filter((x) => x % 2 === 0).map((x) => x * 2).find((x) => x > 10);

console.log(res);
  