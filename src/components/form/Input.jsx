import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useDispatch } from "react-redux"
import { refreshProfile } from '../../redux/profile'
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

export default function Input() {
    const { t } = useTranslation()
    const classNames = "border-2 border-black outline-non block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    const [username, setUsername] = useState("")
    const [error, setError] = useState("")
    const dispatch = useDispatch();
    const githubUrl = 'https://api.github.com/users/';
    const AT = import.meta.env.VITE_GITHUB_ACCESS_TOKEN
    const toastSettings = {
        icon: '👏',
        style: {
            borderRadius: '10px',
        },
    }

    const handleFetchFromGithub = (searchText) => {
        fetch(`${githubUrl}${searchText}`, {
            headers: {
                'Authorization': `Bearer ${AT}`
            }
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('User not found!')
                }
                setError("");
                toast.success('User fetched!', toastSettings)
                return resp.json()
            })
            .then((data) => {
                dispatch(refreshProfile(data))
                setError("")
            })
            .catch((err) => {
                toast.error(err.message)
                setError(err.message)
            });
    };

    const handleInputChange = (e) => {
        const searchText = e.target.value
        setUsername(e.target.value)
        handleFetchFromGithub(searchText)
    };

    return (
        <div>
            <Toaster position="bottom-right" />
            {error && (
                <div className="bg-red-100 mb-3 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline text-center">{error}</span>
                </div>
            )}
            <DebounceInput
                minLength={2}
                className={classNames}
                placeholder={t('form.Username of wanted Github user')}
                name="username"
                type="search"
                id="username"
                value={username}
                debounceTimeout={1000}
                onChange={(e) => handleInputChange(e)} />

            <small className="dark:text-white">{t("form.Type the wanted github user's username to the input field to show the user's card.")}</small>
        </div>
    );
}
