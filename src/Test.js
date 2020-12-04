import React, { useEffect, useState } from 'react';
import Product from './Product.json';
import './App.css';

function Test() {
    const [product, setproduct] = useState();
    useEffect(() => {
        setproduct(Product)
    }, []);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>oldPrice</th>
                        <th>stockQuantity</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((data, key) => {
                        return (
                            <tr key={key}>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>{data.oldPrice}</td>
                                <td>{data.stockQuantity}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Test;
