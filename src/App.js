import React, { useState, useEffect } from 'react';
import Items from './Items';
function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="App">
      <div className="flex flex-col">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10  text-2xl font-bold text-gray-900">
            Add Tax
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm justify-center" >
          <form className="space-y-6 justify-center text-center" action="#" method="GET">
            
            <div>
              <div className="mt-2">
                <input
                  name="tax"
                  type="text"
                  className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  autoComplete="off"
                />
                <input
                  name="tax"
                  type="text"
                  className="w-1/4 m-auto ms-4 w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  autoComplete="off"
                />
              </div>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="apply"
                    name="apply"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    className={isChecked ? 'checked-orange' : '' + "h-4 w-4 bg-orange-500 border-gray-300 text-orange-600 focus:ring-orange-600"}
                  />
                  <label htmlFor="apply" className="font-medium text-gray-900">
                      Apply to all items in collection
                    </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="apply"
                    name="apply"
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-600 bg-orange-600"
                  />
                  <label htmlFor="apply" className="font-medium text-gray-900">
                      Apply to specific items
                    </label>
                </div>

                <hr/>
                <div className="flex items-center mt-5 gap-x-3 "> 
                
                <input
                  name="search"
                  type="search"
                  className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  autoComplete="off"/>
                  </div>
                  
                
                
              </div>
            </div>
            < Items/>
          </form>

          
        </div>
      </div>

    </div>
  );
}

export default App;
