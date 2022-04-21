import axios from "axios";
import { useEffect, useState } from "react"

export const Universities = () => {

    const [universities, setUniversites] = useState();

    useEffect(() => {
        axios.get('http://universities.hipolabs.com/search?country=United+States')
            .then(res => {
                // console.log(res.data)
                setUniversites(res.data);
            })
    }, [])


    return (
        <>
            <h2>Universities</h2>

            <table>

                {
                    universities.map(uni => {
                        return (
                       <tr>
                           <td>{uni.country}</td>
                           <td>{uni.name}</td>
                       </tr>
                    )
                    })
                }
            </table>
        </>
    )
}