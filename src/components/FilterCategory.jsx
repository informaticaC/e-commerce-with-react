import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { getAllProductsCartThunk } from '../store/slices/cart.slice'
import { useDispatch } from 'react-redux'
import { getAllProductsThunk } from '../store/slices/products.slice'

const FilterCategory = () => {

    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
    const [categories, getAllCategories] = useFetch(url)

    useEffect(()=>{
        getAllCategories()
    },[])

   // console.log(categories)
	const dispatch = useDispatch()
  const handleClickCategories = (id) => {
		const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
		dispatch(getAllProductsThunk(url))
	}

	const handleClickAllProducts = ()=>{
		dispatch(getAllProductsThunk())
	}
    
  return (
    <div>

        <h3>Category</h3>
        <ul>
            <li onClick={handleClickAllProducts}>All Products</li>
            {
                categories?.map(category =>(
                    <li onClick={()=> handleClickCategories(category.id)} key={category.id}>{category.name}</li>
                ))
            }
        </ul>
        
    </div>
  )
}

export default FilterCategory