import { useSelector } from "react-redux";
import GithubCard from "../components/GithubCard";

export default function Show() {
    const { profile } = useSelector(state => state.profile)
    // Get params from url, make api call for endpoint listing repos
    // Store it in state maybe
    // Make a new Card component for repos
    return (
        <div className="container search--container mx-auto max-w-lg  mt-5 font-mono">
            {profile && (
                <GithubCard profile={profile} />
            )}
        </div>
    )
}