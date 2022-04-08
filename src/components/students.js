export const Students = (props) => {

    return (
        <>

            <h2>Student List (Individual Props)</h2>
            <div className="text-left">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Subject: {props.subject}</p>
                <hr />
            </div>

        </>
    )
}