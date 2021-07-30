fetch("https://restcountries.eu/rest/v2/all")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    filterByRegion(data, "Asia");
    filterAboveLimit(data, 200000);
    display(data, "name", "capital", "flag");
    totalPopulation(data);
    printCountry(data, "USD");
  })
  .catch((err) => {
    console.log(err);
  });

//   a. Get all the countries from Asia continent /region using Filter function
filterByRegion = (data, continent) => {
  let filtered = data.filter((element) => {
    return element.region === continent;
  });
  console.log(filtered);
};
//   b. Get all the countries with a population of less than 2 lakhs using Filter function
filterAboveLimit = (data, limit) => {
  let filtered = data.filter((element) => {
    return element.population > limit;
  });
  console.log(filtered);
};
//   c. Print the following details name, capital, flag using forEach function
display = function (data, ...details) {
  data.forEach((element) => {
    let arr = [];
    details.forEach((detail) => {
      arr.push(element[detail]);
    });
    console.log(arr.join(" "));
  });
};
//   d. Print the total population of countries using reduce function
totalPopulation = function (data) {
  let total = data.reduce((prev, curr) => {
    return prev + curr.population;
  }, 0);
  console.log(total);
};
//   e. Print the country which uses US Dollars as currency.
printCountry = (data, currencyCode) => {
  let filtered = data.filter((element) => {
    for (let cur of element.currencies) {
      if (cur.code === currencyCode) return true;
    }
    return false;
  });
  let mapped = filtered.map((element) => element.name);
  console.log(mapped.join("\n"));
};
