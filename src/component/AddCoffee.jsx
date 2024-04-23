import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handlerAddCoffee = (event) => {
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

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }

            })
    }



    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold text-center">Add a coffee</h2>

            <form onSubmit={handlerAddCoffee}>
                {/* form name and quanity row */}
                <div className="md:flex mt-10 gap-16">
                    <div className="md:w-1/2">
                        <label className=" form-control ">
                            <div className="label">
                                <span className="label-text">Coffee Name</span>
                            </div>
                            <input type="text" name="name" placeholder="coffee name" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Available Quantity</span>
                            </div>
                            <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered w-full " />
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
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Test</span>
                            </div>
                            <input type="text" name="test" placeholder="Test" className="input input-bordered w-full " />
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
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="md:w-1/2">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Details</span>
                            </div>
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                {/* ***** form photo url */}
                <div className="w-full mt-8">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full " />
                    </label>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block mt-8 bg-black text-white" />
            </form>
        </div>
    );
};

export default AddCoffee;