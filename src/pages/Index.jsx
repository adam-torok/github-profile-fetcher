import GithubLottie from "../components/GithubLottie";
import styled from 'styled-components';
import Input from "../components/Input";
import { useSelector } from "react-redux";

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
            <div className="container search--container mx-auto max-w-sm mt-5 font-mono">
                <Input />
                { !profile && (
                    <GithubLottie />
                ) }
                {profile && (
                    <div>
                        <p>{profile.name}</p>
                        <img src={profile.avatar_url} alt={profile.name} />
                    </div>
                )}
            </div>
        </StyledSearchBar>
    )
}