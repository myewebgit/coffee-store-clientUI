// import React from 'react';

import { Link } from "react-router-dom";

import Swal from 'sweetalert2'

const CoffeeCart = ({coffee, coffees, setCoffees}) => {
    const {_id, name, quantity, supplier, category, details, photo} = coffee;

    const handleDelete = _id =>{
        console.log(_id);
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       Swal.fire(
        //         'Deleted!',
        //         'Your file has been deleted.',
        //         'success'
        //       )
        //     console.log('delete confiremd')
        //     }
        //   })
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'delete'
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            // if(data.deleteCount >0){
                 //       swal.fire(
        //         'Deleted!',
        //         'Your file has been deleted.',
        //         'success'
            // }
            const remaining = coffees.filter(cof => cof._id !== _id);
            setCoffees(remaining)
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className="w-60 " src={photo} alt="Movie"/></figure>
  <div className="flex justify-between w-full pr-4">
    <div>
    <h2 className="card-title">Name:{name}</h2>
    <p>{quantity}</p>
    <p>{supplier}</p>
    <p>{category}</p>
   
    </div>

    <div className="card-actions justify-end">
      <div className="btn-group btn-group-vertical space-y-4">
<button className="btn btn-active">BUtton</button>
<Link to={`updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
<button onClick={() => handleDelete(_id)}
 className="btn bg-red-600">Delete</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default CoffeeCart;