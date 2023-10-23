export default function Input() {
    const classNames = 'border-2 border-black outline-non  block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6'
    return (
        <>
            <input
                type="text"
                placeholder="Username of wanted Github user"
                name="username"
                id="username"
                className={classNames}
            />

            <small>
                Type the wanted github user's username to the input field to show a basic statistic.
            </small>
        </>
    )
}