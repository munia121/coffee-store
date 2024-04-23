import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, test, category, details, photo } = coffee;


    const handleUpdateCoffee = (event) => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, test, category, details, photo }
        console.log(newCoffee)

        // send data to the server

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }

            })
    }


    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold text-center">Update a coffee : {name}</h2>

            <form onSubmit={handleUpdateCoffee}>
                {/* form name and quanity row */}
                <div className="md:flex mt-10 gap-16">
                    <div className="md:w-1/2">
                        <label className=" form-control ">
                            <div className="label">
                                <span className="label-text">Coffee Name</span>
                            </div>
                            <input type="text" name="name" placeholder="coffee name" defaultValue={name} className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Available Quantity</span>
                            </div>
                            <input type="text" name="quantity" placeholder="Available quantity" defaultValue={quantity} className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mt-10 gap-16">
                    <div className="md:w-1/2">
                        <label className=" form-control ">
                            <div className="label">
                                <span className="label-text">Supplier Name</span>
                            </div>
                            <input type="text" name="supplier" placeholder="Supplier Name" defaultValue={supplier} className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Test</span>
                            </div>
                            <input type="text" name="test" placeholder="Test" defaultValue={test} className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mt-10 gap-16">
                    <div className="md:w-1/2">
                        <label className=" form-control ">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <input type="text" name="category" placeholder="Category" defaultValue={category} className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Details</span>
                            </div>
                            <input type="text" name="details" placeholder="Details" defaultValue={details} className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                {/* ***** form photo url */}
                <div className="w-full mt-8">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input type="text" name="photo" placeholder="Photo URL" defaultValue={photo} className="input input-bordered w-full " />
                    </label>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block mt-8 bg-black text-white" />
            </form>
        </div>
    );
};

export default UpdateCoffee;