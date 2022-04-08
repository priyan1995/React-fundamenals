export const Students = (props) => {
    return (
        <>

            <div className="text-left">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Subject: {props.subject}</p>
                <hr />
            </div>

        </>
    )
}