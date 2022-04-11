import { useState } from "react";
import { AddMovies } from "./addMovie";

export const MoviesList = (props) => {



    const [moviesList, setMovieList] = useState([
        { id: 1, Title: "John Wick", IMDB: 6 },
        { id: 2, Title: "Equalizer", IMDB: 5.5 },
        { id: 3, Title: "Real Steel", IMDB: 6.7 },
        { id: 4, Title: "Harry Potter", IMDB: 4.8 },
        { id: 5, Title: "Lord of the Rings", IMDB: 5.2 }
    ]);


    const addMovies = (Mtit,mimb) => {
        
        // spread operator
        setMovieList(moviesList => [...moviesList,{
            id: Math.random(),
            Title: Mtit,
            IMDB: mimb
        }])

        console.log("Movie Added", moviesList);
    }


    return (
        <>
            <h2>Movies List (Array Props)</h2>

            <AddMovies addMovies={addMovies} />
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