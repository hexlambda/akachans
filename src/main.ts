import "@fontsource/days-one";
import "@fortawesome/fontawesome-free/css/all.css";

const generateBackgroundTiles = () => {
  const baseFontSize = Number.parseFloat(
      getComputedStyle(document.body).fontSize
    ),
    tileDimensions = baseFontSize * 8,
    tileGap = baseFontSize * 4;

  return [
    ...Array(
      // Calculating the number of rows
      Math.floor(
        document.body.clientHeight /
          Math.floor(Math.sqrt(tileDimensions * tileDimensions))
      ) + 1
    ).keys(),
  ].map((_) => {
    const row = document.createElement("ul");
    row.className = "background-row";
    row.append(
      ...[
        ...Array(
          // Calculating the number of tiles per row
          Math.floor(
            document.body.clientWidth /
              (Math.floor(Math.sqrt(tileDimensions * tileDimensions)) + tileGap)
          ) + 2
        ).keys(),
      ].map((_) => {
        const tile = document.createElement("li");
        tile.className = "background-tile";
        tile.append(document.createElement("span"));

        return tile;
      })
    );

    return row;
  });
};

document.querySelector("#background")?.append(...generateBackgroundTiles());

window.addEventListener(
  "resize",
  () => {
    document
      .querySelector("#background")
      ?.replaceChildren(...generateBackgroundTiles());
  },
  true
);
