import axios from "axios";

export const getSpecies = async () => {
  let allCharacters: string[] = [];

  //Obtener la cantidad de paginas
  const pagesLength = await axios
    .get("https://rickandmortyapi.com/api/character")
    .then((result) => result.data.info.pages);

  //Obtener todas las paginas
  const allPages = await Promise.all(
    Array(pagesLength)
      .fill(0)
      .map((item: number, index: number) =>
        axios
          .get(`https://rickandmortyapi.com/api/character/?page=${index + 1}`)
          .then((result) => result.data.results)
      )
  );

  //Obtener todas las especies
  [].concat
    .apply([], allPages)
    .map((item: any) => allCharacters.push(item.species));

  //Filtrar las especies repetidas
  return allCharacters.filter(
    (item: string, index: number) => allCharacters.indexOf(item) === index
  );
};
