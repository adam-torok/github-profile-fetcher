import { motion } from "framer-motion";

export default function About() {
    return (
        <div>
            <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 px-8 mt-5 sm:mt-6 md:mt-12">
                <motion.h2
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    exit={{ opacity: 0 }}
                    className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">Why have I started this project?</motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    exit={{ opacity: 0 }}
                    className="text-slate-900 text-sm mt-5 font-bold dark:text-white">
                    Creating a GitHub profile fetcher with React is a fantastic project to dive into for those wanting to learn more about React and web development in general.
                </motion.p>

                <motion.ul
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    exit={{ opacity: 0 }}
                    className="mt-5">
                    <li className="text-slate-900 text-sm font-bold dark:text-white">[x] Practice React basics</li>
                    <li className="text-slate-900 text-sm font-bold dark:text-white">[x] Fetching data from github's API</li>
                    <li className="text-slate-900 text-sm mt-5 font-bold dark:text-white"></li>
                    <li className="text-slate-900 text-sm mt-5 font-bold dark:text-white"></li>
                    <li className="text-slate-900 text-sm mt-5 font-bold dark:text-white"></li>
                </motion.ul>
            </section>
        </div>
    )
}