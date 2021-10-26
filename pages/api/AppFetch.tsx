export const defaultEndPoint =
  "https://deferit-dummy-reciepts-data.herokuapp.com/responce";
let lastPageToLoad: number | undefined;

// the way JSON-Server sends the previous, next, and last page is described in response headers in the Link section.
//This function captures the Link key from API responce headers and extracs the last page number.
const findLastPageNumber = (headersSlice: string): number => {
  //Example of header extracted:
  //<http://deferit-dummy-reciepts-data.herokuapp.com/responce?_page=50&_limit=20>; rel="last"
  //Searching the header for the first character "=" and setting the index to the first index.
  //In the example URL you can see we need to know what index belongs to the character
  // right before the number. _page=50
  const findPageNumber = headersSlice.search("=");

  //Searching the string for the character right after the number we need.
  const findendOfNumber = headersSlice.search("&");

  //Sending an integer of the number we have extracted.
  const lastPageNO = headersSlice.substring(
    findPageNumber + 1,
    findendOfNumber
  );
  return parseInt(lastPageNO);
};

export async function request(pageNumber: number) {
  try {
    const responce = await fetch(
      `${defaultEndPoint}?_page=${pageNumber}&_limit=10`
    );

    //Capturing the response headers using get function from headers attribute.
    //get() function helps us to access the exact header we need 'Link'.
    const headers = responce.headers.get("Link");

    //Example of the header I extracted:
    // <http://deferit-dummy-reciepts-data.herokuapp.com/responce?_page=1&_limit=20>; rel="first", <http://deferit-dummy-reciepts-data.herokuapp.com/responce?_page=2&_limit=20>; rel="next", <http://deferit-dummy-reciepts-data.herokuapp.com/responce?_page=50&_limit=20>; rel="last"

    //Splitting the header value using ",".
    //As this header contains the previous, next, and last page links.
    //This approach makes an array with 4 entities.
    //I just need the last entity that is the last page.
    const headersSlice = headers?.split(",");
    if (headersSlice && headersSlice[3])
      lastPageToLoad = findLastPageNumber(headersSlice[3]);

    const data = await responce.json();
    return { data: data, end: lastPageToLoad };
  } catch (err) {
    return { item: "Erros:" + err };
  }
}
