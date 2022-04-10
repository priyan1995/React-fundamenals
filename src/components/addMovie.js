import { useState } from "react"

export const AddMovies = (props) => {


    const [movieId, setMovieId] = useState();
    const [movieTitle, setMovieTitle] = useState();
    const [imdbRec, setImdbRec] = useState();

    const handleChangeId = (e) => {
        setMovieId(e.target.value);
    }

    const handleChangeTitle = (e) => {
        setMovieTitle(e.target.value);
    }

    const handleChangeIMDB = (e) => {
        setImdbRec(e.target.value);
    }


    const submitHandle = (e) => {
        e.preventDefault();
        props.addMovies();
    }


    return (
        <>
            <form onSubmit={submitHandle}>
                <input type="text" id="mId" placeholder="Movie Id" onChange={handleChangeId} />
                <input type="text" id="Mtitle" placeholder="Movie Title" onChange={handleChangeTitle} />
                <input type="text" id="imdbRec" placeholder="IMDB Record" onChange={handleChangeIMDB} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}