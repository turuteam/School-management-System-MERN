import React from 'react'

function Search(props) {

     let { inputFields, title} = props
    return (
        <form  className="mb-5 content__container">
        <h3 className="mb-3">{title || ""}</h3>
        <div className="row g-3 mb-3">
             {inputFields && inputFields.map(input  => {
                  return (
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <label htmlFor="">{input.label}</label>
                        {input.type === "select" ? 
                              <select 
                              value={input.value} 
                              name={input?.name} 
                              onChange={(e) => input?.onChange(e.target.value)}  
                              className="form-select form-select-sm py-2" 
                             
                              >
                                  <option disabled hidden selected>Select</option>
                                  {input?.options && input?.options.map(option => <option key={option.id}>{option.name}</option>)}
                              </select>
                              :
                              <input 
                              type="text"
                              value={input.value} 
                              name={input?.name} 
                              className="form-control py-3" 
                              placeholder={`Search by ${input.name}`}
                              onChange={(e) => input?.onChange(e.target.value)} /> 
                    
                         }
                    </div>
                )
        })}
        </div>
        <div className="row g-3 ">
            <div className="col-2  mb-3">
                 <button className="btn orange__btn ">Search</button>
            </div>
            <div className="col  mb-3">
               <button className="btn blue__btn ">Reset</button>
            </div>
            
        </div>
    </form>
    )
}

export default Search
