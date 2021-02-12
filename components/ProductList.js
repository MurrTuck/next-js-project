import ProductItem from './ProductItem'
import articleStyles from '../styles/Article.module.css'

const ProductList = ({ products }) => {
    return (
        <div className={articleStyles.grid}>

            {products.map((product) => (
                <ProductItem product={product} />
            ))}

        </div>
    )
}

export default ProductList