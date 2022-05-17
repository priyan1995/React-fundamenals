import axios from "axios";
import { useEffect, useState } from "react"
import { useFetch } from "./Hooks/useFetch";

export const Universities = () => {

    const { fetchedData }= useFetch('http://universities.hipolabs.com/search?country=United+States');

    return (
        <>
            <h2>Universities</h2>

            <table>

                {
                    fetchedData.map(uni => {
                        return (
                            <>
                                <tr>
                                    <td>{uni.country}</td>
                                    <td>{uni.name}</td>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}