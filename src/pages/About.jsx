import { motion as m } from "framer-motion"

export default function About() {
    return (
        <div>
            <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 px-8 mt-5 sm:mt-6 md:mt-12">
                <m.h2
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    exit={{ opacity: 0 }}
                    className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">Why have I started this project?</m.h2>
                <m.p
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    exit={{ opacity: 0 }}
                    className="text-slate-900 text-sm mt-5 font-bold dark:text-white">
                    I had a Vue background, but I wanted to learn React. <br />
                    In the past I've already tried out React a few times, but I never liked how a React app looks like (still not do) <br />
                    I have started this project for practicing React again. I have set a few goals considering I just started the learning process.
                </m.p>

                <m.ul
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    exit={{ opacity: 0 }}
                    className="mt-5">
                    <h2 className="text-slate-900 text-lg mt-5 font-bold dark:text-white">My goals for this project:</h2>
                    <ol className="list-disc ml-5">
                        <li className="text-slate-900 text-sm dark:text-white">
                            Practice React basics
                            <ul className="list-inside list-disc">
                                <li className="text-slate-900 text-sm dark:text-white">Router</li>
                                <li className="text-slate-900 text-sm dark:text-white">Components</li>
                                <li className="text-slate-900 text-sm dark:text-white">Props</li>
                                <li className="text-slate-900 text-sm dark:text-white">Redux</li>
                            </ul>
                        </li>
                        <li className="text-slate-900 text-sm dark:text-white">Fetching data from github's API</li>
                        <li className="text-slate-900 text-sm dark:text-white">Store my github key in a .env variable - used for more requests to the public API</li>
                        <li className="text-slate-900 text-sm dark:text-white">Use tailwindcss</li>
                        <li className="text-slate-900 text-sm dark:text-white">Try out styled components</li>
                        <li className="text-slate-900 text-sm dark:text-white">Adding dark mode toggle, which is stored in localStorage</li>
                        <li className="text-slate-900 text-sm dark:text-white">Learn best practices eg. folder structure</li>
                        <li className="text-slate-900 text-sm dark:text-white">Trying out different libraries like:
                            <ul className="list-inside list-disc">
                                <li className="text-slate-900 text-sm dark:text-white">
                                    Framer motion - for animations
                                </li>
                                <li className="text-slate-900 text-sm dark:text-white">
                                    Moment - for displaying formatted date (I was lazy)
                                </li>
                                <li className="text-slate-900 text-sm dark:text-white">
                                    React tooltip - for displaying tooltips
                                </li>
                                <li className="text-slate-900 text-sm dark:text-white">
                                    React hot toast - for displaying toast notifications
                                </li>
                            </ul>
                        </li>
                    </ol>
                </m.ul>
            </section>
        </div>
    )
}