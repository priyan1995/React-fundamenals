import { AddMovies } from "./addMovie";

export const MoviesList = (props) => {



    const moviesList = props.movies;
    console.log(moviesList);


    return (
        <>
            <h2>Movies List (Array Props)</h2>

            <AddMovies />
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>IMDB Record</th>
                </tr>

                {
                    moviesList.map(movie => {
                        return (
                            <tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td>{movie.Title}</td>
                                <td>{movie.IMDB}</td>
                            </tr>
                        )
                    })
                }

            </table>







        </>
    )
}