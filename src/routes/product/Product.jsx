import React, { useEffect, useState } from 'react'
import "./Product.css"
import { useParams} from 'react-router-dom'
import axios from '../../api/axios'
import Nav from '../nav/Nav'

const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios(`products/${id}`)
        .then(responce => setProduct(responce.data))
    }, [])
    console.log(product)
    return (
        <>
        <Nav/>
        {
            product && (
                
                <div className='product__profile'>
                    <div className='product__information'>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <div className="product__prices">${product.price}</div>
                    </div>
                </div>
            )
        }
        </>
    )
}

export default Product