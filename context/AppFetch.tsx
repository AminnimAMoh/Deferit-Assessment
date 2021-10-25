export const defaultEndPoint =
  "https://deferit-dummy-reciepts-data.herokuapp.com/responce";

const findLastPageNumber = (headersSlice: string): number => {
  let lastPageNO;
  const lastPage = headersSlice;
  const findPageNumber = headersSlice.search("=");
  const findendOfNumber = headersSlice.search("&");

  lastPageNO = lastPage.substring(findPageNumber + 1, findendOfNumber);
  return parseInt(lastPageNO);
};

export async function request(pageNumber: number) {
  try {
    const responce = await fetch(
      `${defaultEndPoint}?_page=${pageNumber}&_limit=20`
    );
    let lastPageToLoad;
    const headers = responce.headers.get("Link");
    const headersSlice = headers?.split(",");
    if (headersSlice && headersSlice[3])
      lastPageToLoad = findLastPageNumber(headersSlice[3]);

    const data = await responce.json();
    return { data: data, end: lastPageToLoad };
  } catch (err) {
    return { item: "Erros:" + err };
  }
}
