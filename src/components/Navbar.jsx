import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleDarkMode } from "../redux/settings"
import { Tooltip } from 'react-tooltip'

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/about', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const settings = useSelector(store => store.settings)
    const dispatch = useDispatch()
    const tooltipText = settings.darkMode ? 'Toggle dark mode' : 'Toggle light mode'
    console.log(tooltipText)

    const handleModeChange = (() => {
        dispatch(toggleDarkMode())
    })

    return (
        <Disclosure as="nav" className="sticky dark:bg-slate-800 bg-white top-0 z-50 border-b-2 font-mono border-black">
            {({ open }) => (
                <>
                    <Tooltip id="links" />
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <h2 className='mr-4 dark:text-white'><b>Github Profile Fetcher</b></h2>
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
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

                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input onChange={handleModeChange} type="checkbox" value="" className="sr-only peer"></input>
                                            <div className="w-10 h-3 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[8px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
                                            <span
                                                data-tooltip-id="links"
                                                data-tooltip-content={tooltipText}
                                                className="ml-3 text-lg font-medium text-gray-900 dark:text-gray-300">{settings.darkMode ? '🌞' : '🌙'}</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    className={classNames(
                                        item.current ? 'bg-gray-200 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )} to={item.href}>{item.name}</Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}