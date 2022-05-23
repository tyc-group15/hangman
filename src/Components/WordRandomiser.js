var words = [
  "pizza",
  "cheese",
  "potato",
  "lasagna",
  "apple",
  "orange",
  "banana",
  "pineapple",
  "grapefruit",
  "spaghetti",
  "yogurt",
  "noodles",
  "fried rice",
  "soup",
  "corndog",
  "sandwich",
  "subway",
  "acai",
  "french fries",
];

export function wordRandomiser() {
  return words[Math.floor(Math.random() * words.length)];
}
