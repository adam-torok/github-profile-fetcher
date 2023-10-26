import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { clearRepos, getRepos } from '../redux/repos'

export default function Show() {
    const repos = useSelector(state => state.repos)
    const username = useParams().username;
    const dispatch = useDispatch();
    const AT = import.meta.env.VITE_GITHUB_ACCESS_TOKEN


    useEffect( () => {fetchRepos() }, [])


    const fetchRepos = () => {
        dispatch(clearRepos())
        console.log('Fetching repositories...');
        fetch(`https://api.github.com/users/${username}/repos`, {
            headers: {
                'Authorization': `Bearer ${AT}`
            }
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error(resp.statusText)
                }
                return resp.json()
            })
            .then((data) => {
                dispatch(getRepos(data))
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container search--container mx-auto max-w-lg  mt-5 font-mono">
            {repos && (
                <h1>hello</h1>
            )}
        </div>
    )
}