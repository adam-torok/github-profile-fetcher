import { motion as m } from "framer-motion"
import { useTranslation } from "react-i18next"

export default function About() {
    const { t } = useTranslation()

    return (
        <div>
            <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 px-8 mt-5 sm:mt-6 md:mt-12">
                <m.h2
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    exit={{ opacity: 0 }}
                    className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white">{t('pages.about.Why have I started this project?')}</m.h2>
                <m.p
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    exit={{ opacity: 0 }}
                    className="text-slate-900 text-sm mt-5 font-bold dark:text-white">
                    {t('pages.about.I had a Vue background, but I wanted to learn React.')} <br />
                    {t("pages.about.In the past I've already tried out React a few times, but I never liked how a React app looks like (still not do)")} <br />
                    {t("pages.about.I have started this project for practicing React again. I have set a few goals considering I just started the learning process.")}
                </m.p>

                <m.ul
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    exit={{ opacity: 0 }}
                    className="mt-5">
                    <h2 className="text-slate-900 text-lg mt-5 mb-3 font-bold dark:text-white">{t('pages.about.My goals for this project')}</h2>
                    <ol className="list-disc ml-5">
                        <li className="text-slate-900 text-sm dark:text-white">
                            {t('pages.about.Practice React basics')}
                            <ul className="list-inside list-disc">
                                <li className="text-slate-900 text-sm dark:text-white">{t('pages.about.Router')}</li>
                                <li className="text-slate-900 text-sm dark:text-white">{t('pages.about.Components')}</li>
                                <li className="text-slate-900 text-sm dark:text-white">{t('pages.about.Props')}</li>
                                <li className="text-slate-900 text-sm dark:text-white">{t('pages.about.Redux')}</li>
                            </ul>
                        </li>
                        <li className="text-slate-900 text-sm dark:text-white">{t("pages.about.Fetching data from github API")}</li>
                        <li className="text-slate-900 text-sm dark:text-white">{t("pages.about.Store my github key in a .env variable - used for more requests to the public API")}</li>
                        <li className="text-slate-900 text-sm dark:text-white">{t("pages.about.Use tailwindcss")}</li>
                        <li className="text-slate-900 text-sm dark:text-white">{t("pages.about.Try out styled components")}</li>
                        <li className="text-slate-900 text-sm dark:text-white">{t("pages.about.Adding dark mode toggle, which is stored in localStorage")}</li>
                        <li className="text-slate-900 text-sm dark:text-white">{t("pages.about.Learn best practices eg. folder structure")}</li>
                        <li className="text-slate-900 text-sm dark:text-white">{t("pages.about.Trying out different libraries like:")}
                            <ul className="list-inside list-disc">
                                <li className="text-slate-900 text-sm dark:text-white">
                                    {t('pages.about.Framer motion - for animations')}
                                </li>
                                <li className="text-slate-900 text-sm dark:text-white">
                                    {t("pages.about.Moment - for displaying formatted date (I was lazy)")}
                                </li>
                                <li className="text-slate-900 text-sm dark:text-white">
                                    {t("pages.about.React tooltip - for displaying tooltips")}
                                </li>
                                <li className="text-slate-900 text-sm dark:text-white">
                                    {t("pages.about.React hot toast - for displaying toast notifications")}
                                </li>
                            </ul>
                        </li>
                    </ol>
                </m.ul>

                <m.h2
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    exit={{ opacity: 0 }}
                    className="text-slate-900 text-xl tracking-tight mt-5 font-extrabold dark:text-white">
                    {t('pages.about.Overall I think I have learnt a lot of new things.')}
                </m.h2>
            </section>
        </div>
    )
}