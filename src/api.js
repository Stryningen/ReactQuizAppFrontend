export async function getQuizSet(amount, category, difficulty) {
  const apiUrl = `https://opentdb.com/api.php?amount=${amount}${
    category ? "category=" + category : ""
  }${difficulty ? "difficulty=" + difficulty : ""}`;
  const url = apiUrl;
  const quizSet = fetch(url, { charset: "utf-8" })
    .then((r) => {
      if (r.ok) {
        return r.json();
      }
    })
    .then((data) => [...data.results]);
  return quizSet;
}
