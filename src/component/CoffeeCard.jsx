/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { _id, name, quantity, supplier, test, category, details, photo } = coffee;

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaining = coffees.filter(coffee => coffee._id !== id);
                            setCoffees(remaining)
                        }
                    })

                console.log('delete confirm')
            }
        });
    }


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} className="w-96 h-96" alt="Movie" /></figure>
                <div className="flex ml-4 justify-between w-full">
                    <div className="space-y-3">
                        <h2 className="card-title">{name}</h2>
                        <p>Quantity: {quantity}</p>
                        <p>Supplier {supplier}</p>
                        <p>Test: {test}</p>
                    </div>
                    <div className="card-actions justify-end ">
                        <div className="join join-vertical space-y-3">
                            <Link to={`viewDetails/${_id}`}>
                                {/* <button className="btn join-item">View</button> */}
                                <a href="#_" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                    <span className="relative text-white">View</span>
                                </a>
                            </Link>


                            <Link to={`updateCoffee/${_id}`}>
                                {/* <button className="btn join-item">Edit</button> */}
                                <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                    <span className="relative text-black group-hover:text-white">Edit</span>
                                </a>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn join-item bg-red-400 text-white ">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;