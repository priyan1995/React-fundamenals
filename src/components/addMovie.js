import { useState } from "react"

export const AddMovies = () => {


    const [movieId, setMovieId] = useState();
    const [movieTitle, setMovieTitle] =useState();
    const [imdbRec, setImdbRec] = useState();

    return (
        <>
        <form>
            <input type="text" id="mId" placeholder="Movie Id" onChange={} />
            <input type="text" id="Mtitle" placeholder="Movie Title" onChange={} />
            <input type="text" id="imdbRec" placeholder="IMDB Record" onChange={} />
        </form>
        </>
    )
}