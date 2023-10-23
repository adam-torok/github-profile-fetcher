import GithubLottie from "../components/GithubLottie";
import styled from 'styled-components';
import Input from "../components/Input";

const StyledSearchBar = styled.div`
    small{
        font-size: 10px;
        margin-top: 15px;
        text-align:center;
    }
`;

export default function Index() {
    return (
        <StyledSearchBar>
            <div className="container search--container mx-auto max-w-sm mt-5 font-mono">
                <Input />
                <GithubLottie />
            </div>
        </StyledSearchBar>
    )
}