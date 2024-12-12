// /app/blog/[id]/page.js

// async function getPost(id: string) {
//   // Simula una llamada a una API o base de datos según el ID
//   const posts = [
//     { id: "1", title: "Primer post", content: "Contenido del primer post" },
//     { id: "2", title: "Segundo post", content: "Contenido del segundo post" },
//     { id: "3", title: "Tercer post", content: "Contenido del tercer post" },
//   ];
//   return posts.find((post) => post.id === id);
// }

// export default async function PostPage({ params: { id: string } }) {
//   const { id } = params; // Desestructurar parámetros dinámicos
//   const post = await getPost(id);

//   if (!post) {
//     return <div>Post no encontrado</div>; // Manejo de errores si no hay datos
//   }

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.content}</p>
//     </div>
//   );
// }
