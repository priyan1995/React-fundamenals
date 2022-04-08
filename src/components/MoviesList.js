export const MoviesList = (props) => {



    const moviesList = props.movies;
    console.log(moviesList);


    return (
        <>
            <h2>Movies List (Array Props)</h2>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>IMDB Record</th>
                </tr>

                {
                    moviesList.map(movie => {
                        return (
                            <tr>
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