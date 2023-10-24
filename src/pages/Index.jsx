import GithubLottie from "../components/GithubLottie";
import styled from 'styled-components';
import Input from "../components/Input";
import { useSelector } from "react-redux";
import GithubCard from "../components/GithubCard";

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
        <StyledSearchBar>
            <div className="container search--container mx-auto max-w-lg  mt-5 font-mono">
                <Input />
                {!profile && (
                    <GithubLottie />
                )}
                {profile && (
                    <GithubCard profile={profile} />
                )}
            </div>
        </StyledSearchBar>
    )
}