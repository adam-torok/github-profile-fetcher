import { useState } from "react"
import { DebounceInput } from "react-debounce-input"
import { useDispatch } from "react-redux"
import { refreshProfile } from '../../redux/profile'

export default function Input() {
    const classNames = "border-2 border-black outline-non block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

    const [error, setError] = useState("")
    const dispatch = useDispatch();
    const githubUrl = 'https://api.github.com/users/'
    const AT = import.meta.env.VITE_GITHUB_ACCESS_TOKEN

    const handleFetchFromGithub = (searchText) => {
        fetch(`${githubUrl}${searchText}`, {
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
            })
    }

    const handleInputChange = (e) => {
        const searchText = e.target.value
        handleFetchFromGithub(searchText)
    }

    return (
        <div>
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

            <small className="dark:text-white">Type the wanted github user's username to the input field to show the user's card.</small>
        </div>
    );
}
