import { Link } from "react-router-dom"

export const Home = () => {
    return(
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
            </ul>
        </div>
        </>
    )
}