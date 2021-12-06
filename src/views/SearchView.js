function giveOptions(opt) {
  return <option> {opt} </option>;
}

function eventPrinter(evt) {
  console.log(evt);
}

function SearchFormView(props) {
  return (
    <div>
      <input onInput={(e) => props.onText(e.target.value)} />
      <select onChange={(event) => props.onDishType(event.target.value)}>
        <option>Choose:</option>
        {props.options.map(giveOptions)}
      </select>
      <button onClick={(event) => props.onSearch()}>search!</button>
      <button onClick={() => window.location.hash="#summary"} style="margin-left:10px"> Summary </button>
    </div>
  );
}

function SearchResultsView(props) {
  return (
    <div>
      {props.searchResults.map((result) => {
        return (
          <span
            class="searchResult"
            key={result.id}
            onClick={() => {props.dishChosen(result.id); window.location.hash="#details"} }
          >
            <img
              src={"https://spoonacular.com/recipeImages/" + result.image}
              height="100"
            />
            <div>{result.title}</div>
          </span>
        );
      })}
    </div>
  );
}
