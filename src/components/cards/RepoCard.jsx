import formatDate from "../../utils/formatDate";

export default function RepoCard(repo) {
    const topics = repo.repo.topics
    console.log(topics);
    return (
        <a href={repo.repo.html_url} target="_blank" rel="noreferrer">
            <div className="max-w-sm bg-white dark:bg-slate-900 rounded overflow-hidden shadow-lg border-2 dark:border-white border-dashed border-black">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl text-slate-800 dark:text-white">
                        {repo.repo.name}
                    </div>

                    <div className="mt-2">
                        {topics && topics.map((topic, index) => {
                            <div
                                key={index}
                                className="inline-block bg-slate-900 color-white rounded text-xs px-3 py-1 text-sm font-semibold border-black border-2 text-gray-700 mr-2 mb-2"
                            >
                                {topic}
                            </div>
                        })}
                    </div>

                    <p className="text-xs text-slate-800 dark:text-white mb-1">Updated at: {formatDate(repo.repo.updated_at)}<b></b></p>
                    <p className="text-xs text-slate-800 dark:text-white mb-1">{repo.repo.watchers_count > 0 && (<>Watcher count: {repo.repo.watchers_count}</>)}<b></b></p>
                    <p className="text-slate-700 dark:text-slate-400 text-base">
                        {repo.repo.description ?
                            <span>{repo.repo.description}</span>
                            :
                            <span>No description.</span>
                        }
                    </p>
                </div>
                <div className="px-6 pt-0 pb-2">
                    {repo.repo.language &&
                        <span className="inline-block rounded bg-white px-3 py-1 text-sm font-semibold border-black border-2 text-gray-700 mr-2 mb-2">
                            {repo.repo.language}
                        </span>
                    }
                </div>
            </div>
        </a>
    )
}