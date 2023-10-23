// import React from 'react';
import Swal from 'sweetalert2'
import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, quantity, taste, supplier, category, details, photo} = coffee;


    const handleUpdateCoffee = event =>{
        event.preventDefault(); // avoied reload page
       
        const form = event.target;  //why??

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value; // must similar to name field
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        

        const updateCoffee = {name, quantity, supplier, category, details, photo};
        console.log(updateCoffee) // check in console

        //send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modefiedCount > 0){
                Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  });
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text- 3xl font-extrabold">Update your coffee here!!!</h1>
            <div>
                <form onSubmit={handleUpdateCoffee}>
                    {/* first-row */}
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Your Coffee</span>
                            </label>
                            <label className="input-group">
                                <span>Coffee</span>
                                <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <span>Quantity</span>
                                <input type="text" name='quantity' defaultValue={quantity} placeholder="Coffee Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Second-row */}
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>
                            </label>
                            <label className="input-group">
                                <span>Supplier </span>
                                <input type="text" name='supplier' defaultValue={supplier}  placeholder="Supplier Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <span>Taste</span>
                                <input type="text" name='taste' defaultValue={taste}  placeholder="Coffee Taste" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* third-row */}
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Category</span>
                            </label>
                            <label className="input-group">
                                <span>Category</span>
                                <input type="text" name='category' defaultValue={category} placeholder="Coffee Category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <span>Details</span>
                                <input type="text" name='details' defaultValue={details} placeholder="Coffee Details" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* last-row */}
                    <div className="">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <span>Image</span>
                                <input type="text" name='photo' defaultValue={photo}  placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                       
                    </div>
                    <input type="submit" value="Update Cofee" className="btn btn-block mt-4 btn btn-neutral" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;