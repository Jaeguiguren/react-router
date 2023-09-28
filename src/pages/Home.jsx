import ListPost from "../components/ListPost"
import ListCategories from "../components/listCategories"

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListCategories/>
      <ListPost url={"/posts"} />
    </main>
  )
}

export default Home
