export const defaultEndPoint =
  "https://deferit-dummy-reciepts-data.herokuapp.com/responce";

export async function request() {
  try {
    const responce = await fetch(
      defaultEndPoint
    );
    const data = await responce.json();
    return data;
  } catch(err) {
    return {item: 'Erros:'+err};
    ;
  }
}