import Image from "next/image"
import Layout from "@/components/layout"
import styles from "@/styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, guitarLA, tienda de música"}
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
        <Image src="/img/nosotros.jpg" alt="imagen sobre nosotros" width={1000} height={800}/>
          <div>
            <p>Ut est cillum occaecat minim non. Cillum magna pariatur fugiat enim. Aliquip velit aliquip qui labore duis ullamco veniam duis eiusmod. Est exercitation non duis pariatur non deserunt duis veniam exercitation do aliqua esse. Excepteur officia deserunt ut proident id do anim ex ex sit elit anim et ad.</p>

            <p>Ullamco ut excepteur eu labore proident ullamco cillum. In aliquip culpa qui esse commodo. Eu incididunt nisi reprehenderit officia elit cupidatat nostrud pariatur eu incididunt. Irure nostrud ex sit est ea non occaecat ullamco est minim. Lorem eu quis voluptate duis ullamco laboris consectetur exercitation in enim aliquip commodo. Officia laboris non irure aliqua consequat irure nostrud nisi enim qui occaecat quis.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
