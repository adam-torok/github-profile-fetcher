import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchRepos } from "../redux/repos"
import { useParams } from "react-router-dom"
import RepoCard from "../components/cards/RepoCard"
import Masonry from 'react-masonry-css'
import { motion as m } from "framer-motion"

export default function Show() {
    const repos = useSelector((state) => state.repos.repos)
    const params = useParams()
    const dispatch = useDispatch()

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    }

    useEffect(() => {
        dispatch(fetchRepos(params.username))
    }, [])

    const repositories = repos.map((repo) => {
        return (
            <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                key={repo.id}>
                <RepoCard repo={repo} />
            </m.div>)
    })

    return (
        <div className="max-w-7xl mx-auto mt-10">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {repositories}
            </Masonry>
        </div>
    )

}