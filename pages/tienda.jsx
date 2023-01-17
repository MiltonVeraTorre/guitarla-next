import Layout from "@/components/layout";
import Guitarra from "@/components/guitarra";
import styles from "@/styles/grid.module.css"

export default function Tienda({ guitarras }) {
  console.log(guitarras);
  return (
    <Layout title={"Tienda"} description={"Tienda virtual, venta de guitarras"}>
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.grid}>
          {guitarras?.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
// Generación estatica, solo cambia en cada build
// export async function getStaticProps(){
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//   const {data:guitarras} = await respuesta.json();

//   return {
//     props:{
//       guitarras
//     }
//   }
// }

// Generación con servidor, cambia dinamicamente
export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );
  const { data: guitarras } = await respuesta.json();

  return {
    props: {
      guitarras,
    },
  };
}
