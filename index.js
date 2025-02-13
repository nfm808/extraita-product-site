const main = async () => {
  const Constants = await fetch("constant.json").then(response =>
    response.json()
  );
  const { directories, files } = Constants;
  console.log(directories);
  const document = document.querySelector("body");
  let el;
  for (x in directories) {
    el = createElement("a");
    el.href = directories[x];
    el.innerText = directories[x];
    console.log(el);
    document.append(el);
  }
};
