import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchRepos } from "../redux/repos"
import { useParams } from "react-router-dom"

export default function Show() {
    const repos = useSelector((state) => state.repos.repos)
    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRepos(params.username))
    }, [])

    return (
        <div className="repo--container container search--container mx-auto max-w-lg mt-5 font-mono">
            {repos ? (
                <div className="dark:text-white">
                    {repos.map((repo) => (
                        <div key={repo.id}>
                            {repo.name}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="dark:text-white"> No repositories found.</div>
            )}
        </div>
    )

}