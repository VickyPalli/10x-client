
import { Link } from "react-router-dom";

const Login = ()=>{
    return <div>
        <input type="text"  placeholder="plz enter username"/>
        <input type="text"  placeholder="plz enter password"/>
        <button>login</button>
        <Link to={'/signup'}>
            <button>signup from login page...</button>
        </Link>
    </div>
}

export default Login;