const GET = async () => {
  //   const data = await fetch("https://jsonplaceholder.typicode.com/photos").then(
  //     (res) => res.json()
  //   );

  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await response.json();

  return Response.json({ status: 200, data: data });
};
export { GET };
