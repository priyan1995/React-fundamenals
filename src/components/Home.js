import { Link } from "react-router-dom";


export const Home = () => {
    return (
        <>
            <h2>Home Page</h2>
            <div className="navigation">
                <ul>
                    <li>
                        <Link to="/student-list">Student List (Individual Props)</Link>
                    </li>
                    <li>
                        <Link to="/movies-list">Movies List (Array Props)</Link>
                    </li>
                    <li>
                        <Link to="/universities">Universities (Dummy data from API)</Link>
                    </li>
                    <li>
                        <Link to="/country-list">Countries (Component Break and Props)</Link>
                    </li>
                    <li>
                        <Link to="/about">About (Higher Order Component)</Link>
                    </li>
                    <li>
                        <Link to="/button-page">About (Higher Order Component button)</Link>
                    </li>
                    <li>
                        <Link to="/cards-list">Cards List (Bootstrap Components)</Link>
                    </li>
                    <li>
                        <Link to="/login-form">Login Form (Bootstrap Components)</Link>
                    </li>
                    <li>
                        <Link to="/material-ui-elements">Material Ui Elements</Link>
                    </li>
                    <li>
                        <Link to="/slick-slider">Slick Slider</Link>
                    </li>
                    <li>
                        <Link to="/user-form">User Form (Custom Hook)</Link>
                    </li>
                    <li>
                        <Link to="/lazy-load">Lazy Load (Code Splitting)</Link>
                    </li>
                    <li>
                        <Link to="/calculator">Calculator</Link>
                    </li>

                    <li>
                        <Link to="/chat">Chat</Link>
                    </li>
                    
                    <li>
                        <Link to="/todo">Todo</Link>
                    </li>

                </ul>
              
            </div>
        </>
    )
}