import { useSelector } from "react-redux"
import GithubLottie from "../../components/shared/GithubLottie"
import Input from "../../components/form/Input"
import GithubCard from "../cards/GithubCard"
import styled from 'styled-components'
import { useTranslation } from "react-i18next"
import { Suspense } from "react"

export default function Form() {
    const { t, i18n } = useTranslation()
    const { profile } = useSelector(state => state.profile)

    const StyledSearchBar = styled.div`
        small{
            font-size: 10px;
            margin-top: 15px;
            text-align:center;
        }
    `

    return (
        <Suspense fallback="loading">
            <StyledSearchBar>
                <div className="container search--container mx-auto max-w-lg mt-5 max-w-8xl mx-auto px-8 sm:px-6 md:px-8">
                    <h1 className="text-slate-900 text-4xl mb-5 tracking-tight font-extrabold sm:text-5xl dark:text-white">{t('Welcome to React')}</h1>
                    <h4 className="text-slate-900 text-1xl font-extrabold dark:text-white mb-5">The most 🔥 <i>original</i> 🔥 idea</h4>
                    <Input />
                    {!profile && (
                        <GithubLottie />
                    )}
                    {profile && (
                        <GithubCard profile={profile} />
                    )}
                </div>
            </StyledSearchBar>
        </Suspense>
    )
}