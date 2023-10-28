import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchRepos } from "../redux/repos"
import { useParams } from "react-router-dom"
import RepoCard from "../components/RepoCard"

export default function Show() {
    const repos = useSelector((state) => state.repos.repos)
    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRepos(params.username))
    }, [])

    return (
        <div className="grid grid-cols-4 gap-4 container mx-auto mt-5 max-w-7xl">
            {repos ? (
                <>
                    {repos.map((repo) => (
                        <div key={repo.id}>
                            <RepoCard repo={repo} />
                        </div>
                    ))}
                </>
            ) : (
                <div className="dark:text-white"> No repositories found.</div>
            )}
        </div>
    )

}