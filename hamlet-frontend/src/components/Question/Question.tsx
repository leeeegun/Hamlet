<<<<<<< HEAD
export{}
=======
import { QuestionType, question } from '../../types';
import styled from 'styled-components';
import { colors } from '../../styles/style';
import { useState } from 'react';
import { AiOutlineDown } from "react-icons/ai";

type QuestionProps = {
    item: question
    onClick(): void,
    onEditQuestion(): void,
}

const StyledQuestionWrapper = styled.div`
    display: flex;
    margin-right: 24px;

    .check {
        width: 1rem;
        height: 1rem;
        margin-top: 1.5rem;
        cursor: pointer;
    }
`

const StyledQuestionBarWrapper = styled.div`
    position: relative;
    flex-grow: 1;
`

const StyledQuestionBar = styled.div<{ type: QuestionType }>`
    background-color: ${ props => colors.hamlet[props.type] };
    color: ${ colors.fontLight };
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 1.25rem;
    margin: 0.75rem;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    cursor: ${ props => (props.type === "poll" || props.type === "quiz") ? "pointer" : "default"};
    position: relative;
    z-index: 10;

    .qInfo {
        margin-right: 2rem;
    }
`

const StyledChoicesWrapper = styled.div`
    background-color: ${ colors.fontLightSub };
    padding: 2rem 1rem 1.5rem 2.5rem;
    margin: 0.75rem;
    box-sizing: border-box;
    border-radius: 0 0 24px 24px;
    position: relative;
    top: -2rem;
    z-index: 1;
    margin-bottom: -1rem;
`

const StyledChoice = styled.div`
    background-color: ${ colors.fontLight };
    color: ${ colors.fontDark };
    height: 2.25rem;
    line-height: 2.25rem;
    padding: 0 1rem;
    border-radius: 1.125rem;
    width: 50%;
    margin: 1rem;
`

const EditBtn = styled.button`
    background-color: transparent;
    border: 1px solid ${ colors.fontDark };
    height: 2rem;
    width: 4rem;
    border-radius: 1rem;
    cursor: pointer;
    margin-top: 1rem;
`

const Question = ({item, onClick, onEditQuestion}: QuestionProps) => {
    const {q, type, time, point, choices} = item;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledQuestionWrapper>
            <input type="checkbox" className="check" />
            <StyledQuestionBarWrapper>
                <StyledQuestionBar type={type} onClick={(event) => setIsOpen(prev => !prev)}>
                    <span>{q}</span>
                    <span>
                        <span className="qInfo">
                            {`${type} | ${time}초 | ${point ? `${point}점` : "-"}`}
                        </span>
                        {
                            (type === "poll" || type === "quiz")
                            &&
                            <span>
                                <AiOutlineDown />
                            </span>
                        }
                    </span>
                </StyledQuestionBar>
                {
                    (isOpen && choices && choices.length > 0)
                    &&
                    <StyledChoicesWrapper>
                        {
                            choices.map((choice, idx) => 
                                <StyledChoice key={`choice-${choice}-${idx}`}>
                                    {choice}
                                </StyledChoice>
                            )
                        }
                    </StyledChoicesWrapper>
                }
            </StyledQuestionBarWrapper>
            <EditBtn onClick={onEditQuestion}>
                수정
            </EditBtn>
        </StyledQuestionWrapper>
    )

}

export default Question;
>>>>>>> 05c0232451d7cab136ca4ffbb73b49a03cffff15
