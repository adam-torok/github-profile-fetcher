import { Link } from "react-router-dom";

export default function GithubCard({ profile }) {
    return (
        <Link to={'profile/'+profile.login} className="w-full mt-5 group relative block">
            <span className="absolute inset-1 border-2 border-dashed border-black"></span>

            <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="absolute p-4 relative">
                    <div className="flex">
                        <img className="w-full h-100 max-w-[40%] border-2 object-cover me-3 border-black" src={profile.avatar_url} alt={profile.name} />
                        <div className="w-full">
                            <h3 className="text-lg font-bold">{profile.name}</h3>
                            <h5 className="text-sm font-gray">@{profile.login}</h5>

                            {profile.bio && (
                                <div className="mt-2">
                                    <h2 className="font-bold text-sm">✍🏻 Bio:</h2>
                                    <p className="text-xs">
                                        {profile.bio}
                                    </p>
                                </div>
                            )}

                            {profile.email && (
                                <div className="mt-2">
                                    <h2 className="font-bold text-sm">📧 Email:</h2>
                                    <p className="text-xs">
                                        {profile.email}
                                    </p>
                                </div>
                            )}

                            {profile.company && (
                                <div className="mt-2">
                                    <h2 className="font-bold text-sm">🏢 Company:</h2>
                                    <p className="text-xs">
                                        {profile.company}
                                    </p>
                                </div>
                            )}

                            <div className="mt-2">
                                <h2 className="font-bold text-sm">🗓️ Created at:</h2>
                                <p className="text-xs">
                                    {profile.created_at}
                                </p>
                            </div>

                            <div className="basic--button">
                                List Public Repos
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}