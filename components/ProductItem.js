import Link from 'next/link'
import Image from 'next/image'
import articleStyles from '../styles/Article.module.css'

const ProductItem = ({ product }) => {
    return (
        <Link href="/product/[id]" as={`/product/${product.id}`} >
            <a className={articleStyles.card}>
                <h3>{product.title}</h3>
                <a>{product.thumbnailUrl}</a>
            </a>
        </Link>
    )
}

export default ProductItem