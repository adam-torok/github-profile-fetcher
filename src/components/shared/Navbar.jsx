import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleDarkMode } from "../../redux/settings"
import { Tooltip } from 'react-tooltip'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { useState } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const { t } = useTranslation()
    const [currentLang, setCurrentLang] = useState('hu')
    const settings = useSelector(store => store.settings)
    const dispatch = useDispatch()

    const changeLanguage = (lng) => {
        setCurrentLang(lng)
        i18next.changeLanguage(lng)
    }

    const navigation = [
        { name: t('navbar.links.About the project'), href: '/about', current: false },
    ]

    const handleModeChange = (() => {
        dispatch(toggleDarkMode())
    })

    return (
        <Disclosure as="nav" className="sticky dark:bg-slate-800 bg-white top-0 z-50 border-b-2  border-black">
            {({ open, close }) => (
                <>
                    <Tooltip id="links" />
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <Link to={'/'} onClick={close} className='mr-4 sm:ml-8 dark:text-white ml-12'><b className=''>{t('navbar.Github Fetcher')}</b></Link>
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">{t("navbar.Open main menu")}</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden sm:block">
                                    <div className="flex">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                className={classNames(
                                                    item.current ? 'bg-gray-200 text-white' : 'text-black hover:bg-black hover:text-white',
                                                    'rounded-md px-3 mr-2 py-2 text-sm font-medium dark:text-white'
                                                )}
                                                aria-current={item.current ? 'page' : undefined} to={item.href}>{item.name}</Link>
                                        ))}

                                        <div className='mt-1'>
                                            <span
                                                data-tooltip-id="links"
                                                data-tooltip-content={t('tooltips.Dark mode')}
                                                className="mr-3 mt-1 text-lg font-medium text-gray-900 dark:text-gray-300">🌞</span>

                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input onChange={handleModeChange} type="checkbox" checked={settings.darkMode ? true : false} className="sr-only peer"></input>
                                                <div className="w-10 h-3 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[-3px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
                                            </label>

                                            <span
                                                data-tooltip-id="links"
                                                data-tooltip-content={t('tooltips.Light mode')}
                                                className="ml-3 mt-1 text-lg font-medium text-gray-900 dark:text-gray-300">🌙</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='ml-5'>
                                { currentLang == 'hu'  && (
                                    <div onClick={() => changeLanguage('en')} className='text-2xl cursor-pointer'>
                                        🇺🇸
                                    </div>
                                )}

                                { currentLang == 'en'  && (
                                    <div onClick={() => changeLanguage('hu')} className='text-2xl cursor-pointer'>
                                        🇭🇺
                                    </div>
                                )}
                            </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link
                                    onClick={close}
                                    key={item.name}
                                    className='text-gray-800 hover:bg-gray-700  dark:text-white hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                                    to={item.href}>{item.name}</Link>
                            ))}

                            <div className='ml-5 sm:show md:hidden'>
                                <span
                                    data-tooltip-id="links"
                                    data-tooltip-content={t('tooltips.Dark mode')}
                                    className="mr-3 mt-1 text-lg font-medium text-gray-900 dark:text-gray-300">🌞</span>

                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input onChange={handleModeChange} type="checkbox" checked={settings.darkMode ? true : false} className="sr-only peer"></input>
                                    <div className="w-10 h-3 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[-4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
                                </label>

                                <span
                                    data-tooltip-id="links"
                                    data-tooltip-content={t('tooltips.Light mode')}
                                    className="ml-3 mt-1 text-lg font-medium text-gray-900 dark:text-gray-300">🌙</span>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}