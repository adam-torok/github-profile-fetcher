import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useDispatch } from "react-redux"
import { refreshProfile } from '../redux/profile'

export default function Input() {
    const classNames =
        "border-2 border-black outline-non block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"

    const [search, setSearch] = useState("")
    const [error, setError] = useState("")
    const dispatch = useDispatch();

    const AT = import.meta.env.VITE_GITHUB_ACCESS_TOKEN

    const handleFetchFromGithub = (searchText) => {
        fetch(`https://api.github.com/users/${searchText}`, {
            headers: {
                'Authorization': `Bearer ${AT}`
            }
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error(resp.statusText)
                }
                setError("");
                return resp.json()
            })
            .then((data) => {
                dispatch(refreshProfile(data))
                setError("")
            })
            .catch((err) => {
                setError(err.message)
            });
    };

    const handleInputChange = (e) => {
        const searchText = e.target.value
        setSearch(searchText)
        handleFetchFromGithub(searchText)
    };

    return (
        <>
            {error && <p>{error}</p>}
            <DebounceInput
                minLength={2}
                className={classNames}
                placeholder="Username of wanted Github user"
                name="username"
                type="search"
                id="username"
                debounceTimeout={500}
                onChange={(e) => handleInputChange(e)} />

            <small>Type the wanted github user's username to the input field to show a basic statistic.</small>
        </>
    );
}
