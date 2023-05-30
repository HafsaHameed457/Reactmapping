import React,{ useState, useEffect } from 'react';
import data from './api/api.json'
function Items() {
  // const [selectedCategories, setSelectedCategories] = useState([]);
  
        // const categories = [...new Set(data.map((item) =>item.category))];

        // const handleCategoryChange = (category) => {
        //   if (selectedCategories.includes(category)) {
        //     setSelectedCategories(selectedCategories.filter((c) => c !== category));
        //   } else {
        //     setSelectedCategories([...selectedCategories, category]);
        //   }
        // };
        console.log(data)
        const filteredData = data.filter((item) => item.hasOwnProperty('category'));
        console.log(filteredData)
  return(
<div>
  
      {filteredData&&filteredData.map(data => {
        return(
          <div key={data.id}>
          <input
          
            type="checkbox"
            // checked={selectedCategories.includes(data)}
            // onChange={() => handleCategoryChange(data)}
          />
          
          <span style={{ backgroundColor: 'grey' }}>{data.category.name}</span>
        </div>
        
        
        )}
        )
      }
        
        
      
    </div>
  );
};

export default Items;