import React from 'react'

const SliderImgs = ({product}) => {

  return (
    <div>SliderImgs
			
			{

				product?.images[0]? 
						<img src={product?.images[0].url} alt={product?.title} />
						:<p>Loading...</p>

			}	
		
    </div>
  )
}

export default SliderImgs
