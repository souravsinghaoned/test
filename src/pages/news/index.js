function NewsArticleList({articles}){
    console.log(articles)
    return(
        <div>
            <h1>Articale List</h1>
            {
                articles.map(article =>{
                    return(
                        <div>
                            <p>{article.id}.{article.title}|{article.category}</p>
                            <hr/>
                            {/* <p>{article.description}</p> */}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default NewsArticleList;

export async function getServerSideProps(){
    const response = await fetch("http://localhost:4000/news")
    const data = await response.json()
    console.log('prerendering article list')
    return {
        props : {
            articles : data
        }
    }

}