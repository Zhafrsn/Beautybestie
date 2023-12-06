import { faLock, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import '../../styles/Admin/LoginAdmin.css';

export const LoginAdmin: React.FC = () => {
    return (
        <div className="loginAdmin-container">
            <form className="loginAdmin-form">
                <h1 className="loginAdmin-title">Login</h1>
                <div className="loginAdmin-items">
                    <div className="loginAdmin-button">
                        <FontAwesomeIcon icon={faUser} />
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            className="loginAdmin-username"
                            required
                        />
                    </div>
                    <div className="loginAdmin-button">
                        <FontAwesomeIcon icon={faLock} />
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="loginAdmin-pw"
                            required
                        />
                    </div>
                </div>
                <a href='/Dashboard' className="loginAdmin__login-btn">LOGIN</a>
            </form>
        </div>
    )
}