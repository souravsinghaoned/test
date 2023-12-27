function ArticaleListByCategory({articles, category}){
    return(
        <div>
            Showing category {category}.
            <hr/>
            {
                articles.map(article =>{
                    return(
                        <div>
                            <p>{article.id}.{article.title}</p>
                            <p>{article.description}</p>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ArticaleListByCategory;

export async function getServerSideProps(context){
    const {params, req, res,query} = context
    console.log(query)
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie',['name=Token'])
    const {category} = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()
    console.log(`prerendering ${category}`)
    return{
        props : {
            articles : data,
            category
        }
    }
}