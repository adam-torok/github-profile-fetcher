import GithubLottie from "../components/GithubLottie";
import styled from 'styled-components';
import Input from "../components/Input";
import { useSelector } from "react-redux";
import GithubCard from "../components/GithubCard";
import { motion } from "framer-motion";

const StyledSearchBar = styled.div`
    small{
        font-size: 10px;
        margin-top: 15px;
        text-align:center;
    }
`;

export default function Index() {
    const { profile } = useSelector(state => state.profile)

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            exit={{ opacity: 0 }}
        >
            <StyledSearchBar>
                <div className="container search--container mx-auto max-w-lg  mt-5 ">
                    <h1 className="text-slate-900 text-4xl mb-5 tracking-tight font-extrabold sm:text-5xl dark:text-white">GitHub Fetcher</h1>
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
        </motion.div>
    )
}