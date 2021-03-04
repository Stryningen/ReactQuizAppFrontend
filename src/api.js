export async function getQuizSet(amount = 10, category = null) {
  const apiUrl = `https://opentdb.com/api.php?amount=${amount}${
    category ? "category=" + category : ""
  }`;
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
