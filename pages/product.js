import Head from 'next/head'
import ProductList from '../components/ProductList'

export default function Product({ products }) {
    console.log(products)
    return (
        <div>
            <Head>
                <title>Look at all the Swag</title>
                <meta name='keywords' content='Product Page, Dont be a stranger, to product' />
            </Head>
            <h1>Product</h1>

            <ProductList products={products} />
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
    const products = await res.json()

    return {
        props: {
            products
        }
    }
}