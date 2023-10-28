import formatDate from "../../utils/formatDate";

export default function RepoCard(repo) {
    // TODO: List topics, star count, make it clickable, hover effect, masonry
    return (
        <>
            <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg border-2 dark:border-white border-dashed border-black">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl">{repo.repo.name}</div>
                    <span className="text-xs font-slate-800 mb-1">Updated at: {formatDate(repo.repo.updated_at)}<b></b></span>
                    <p className="text-gray-700 text-base">
                        {repo.repo.description ?
                            <span>{repo.repo.description}</span>
                            :
                            <span>No description.</span>
                        }
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {repo.repo.language && <span className="inline-block rounded bg-white px-3 py-1 text-sm font-semibold border-black border-2 text-gray-700 mr-2 mb-2">{repo.repo.language}</span>}
                </div>
            </div>
        </>
    )
}