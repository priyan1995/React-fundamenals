import { useState } from "react"

export const AddMovies = (props) => {


    const [movieTitle, setMovieTitle] = useState();
    const [imdbRec, setImdbRec] = useState();


    const handleChangeTitle = (e) => {
        setMovieTitle(e.target.value);
    }

    const handleChangeIMDB = (e) => {
        setImdbRec(e.target.value);
    }


    const submitHandle = (e) => {
        e.preventDefault();
        props.addMovies(movieTitle,imdbRec);
        setMovieTitle('');
        setImdbRec('');
    }


    return (
        <>
            <form onSubmit={submitHandle}>
                <input type="text" id="Mtitle" placeholder="Movie Title" onChange={handleChangeTitle} />
                <input type="text" id="imdbRec" placeholder="IMDB Record" onChange={handleChangeIMDB} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}