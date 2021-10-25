export const defaultEndPoint ='https://deferit-dummy-reciepts-data.herokuapp.com/responce'

export async function request(pageNumber: number) {
  try {
    const responce = await fetch(
      `${defaultEndPoint}?_page=${pageNumber}&_limit=10`
    );
    const data = await responce.json();
    return data;
  } catch(err) {
    return {item: 'Erros:'+err};
    ;
  }
}