import { useSelector } from "react-redux"

export default function GithubLottie() {
    const mode = useSelector((state) => state.settings.darkMode)
    return (
        <div className={`mx-auto ${mode == true ? 'inverted' : ''}`}>
            <iframe height="300px" src="https://lottie.host/?file=8d5c542b-4f94-441d-a2c5-9da6b27ff3e7/EJWscusjWh.json"></iframe>
        </div>
    )
}