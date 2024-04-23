import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex gap-8 mb-20">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/addCoffee'}>Add Coffee</NavLink>
            <NavLink to={'/signup'}>SignUp</NavLink>
            <NavLink to={'/signin'}>SignIn</NavLink>
            <NavLink to={'/'}></NavLink>
        </div>
    );
};

export default Header;