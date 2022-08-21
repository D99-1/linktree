const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const values = urlParams.values();

for (const value of values) {
  console.log(value);
}
