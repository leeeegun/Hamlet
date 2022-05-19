import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/style';
import Question from '../../components/Question/Question';
import { QuestionType, question, hamlet } from '../../types';
import { BsPlusLg } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import Game from '../Game/Game';

type ItemProps = {
    item: hamlet
    onClick(): void
    isClosed: boolean
}

const Hamlet = styled.div<{ isClosed: boolean }>`
    width: 10rem;
    height: 10rem;
    background-color: ${ colors.hamlet.quiz };
    color: ${ colors.fontLight };
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.isClosed ? "": "center"};
    position: relative;
    border-radius: 16px;
    margin: 16px;
`

const CloseBtn = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    padding: 0.5rem;
    color: white;
`

const HamletTitle = styled.div`
    margin-top: 3rem;
    position: absolute;
    top: 0;
`

const HamletInfo = styled.div`
    font-size: 0.875rem;
    text-align: center;
    margin-bottom: 1rem;
    position: absolute;
    bottom: 0;
`

const Item = ({item, onClick, isClosed} : ItemProps) => {
    const {id, title, code, date} = item

    return (
        <Hamlet isClosed={isClosed}>
            <CloseBtn>
                <VscChromeClose />
            </CloseBtn>
            {
                isClosed && code && date
                &&
                <>
                    <HamletTitle>
                        {title}
                    </HamletTitle>
                    <HamletInfo>
                        <div>{`#${code}`}</div>
                        <div>{`${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`}</div>
                    </HamletInfo>
                </>
            }
            {
                !isClosed
                &&
                <div>
                    {title}
                </div>
            }
        </Hamlet>
    )
}


const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    .navBar {
        display: flex;
        margin-left: 3rem;
    }
`

const StyledNavLabel = styled.label<{ selected: boolean }>`
    background-color: ${ colors.pointSub2 };
    opacity: ${ props => (props.selected ? 1 : 0.7 )};
    color: ${ colors.fontLight };
    width: 8.5rem;
    height: 3rem;
    border-radius: 2.5rem 2.5rem 0 0; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const StyledContentWrapper = styled.div`
    background-color: ${ colors.bgMain };
    color: ${ colors.fontDark };
    width: 90vw;
    max-width: 1200px;
    height: 70vh;
    border-radius: 55px;
    padding: 24px;
    box-sizing: border-box;
    position: relative;
`

const ContentScrollWrapper = styled.div<{ selectedLabelIdx: number }>`
    display: ${ props => (props.selectedLabelIdx === 1 ? "block" : "flex") };
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;

    ::-webkit-scrollbar {      // 스크롤바 전체
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {        // 스크롤 막대
        background-color: ${ colors.scrollBar };
        border-radius: 5px;
    }

    ::-webkit-scrollbar-track {        // 스크롤 막대 외부
        background-color: transparent;
        border-radius: 5px;
    }
`

const AddBtn = styled.div`
    background-color: ${ colors.bgMain };
    width: 12rem;
    height: 60px;
    position: absolute;
    right: 24px;
    bottom: 16px;
    border-radius: 30px;
    box-shadow: 0 0 15px rgba(79, 63, 40, 0.3);

    display: flex;
    align-items: center;

    cursor: pointer;

    .btnTitle {
        margin-left: 1.5rem;
    }

    .roundBtn {
        background-color: ${ colors.pointSub2 };
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        color: white;
    }
`

const Admin = () => {

    const [selectedLabelIdx, setSelectedLabelIdx] = useState<number>(0);
    const [myHamlets, setMyHamlets] = useState<hamlet[]>([]);
    const [myQuestions, setMyQuestions] = useState<question[]>([]);
    const [closedHamlets, setClosedHamlets] = useState<hamlet[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    useEffect(() => {
        const myham: hamlet[] = [
            {
                id: 1,
                title: "내 햄릿1"
            },
            {
                id: 2,
                title: "내 햄릿2"
            },
            {
                id: 3,
                title: "내 햄릿3"
            },
            {
                id: 4,
                title: "내 햄릿4"
            },
        ]

        const clham: hamlet[] = [
            {
                id: 1,
                title: "종료된 햄릿1",
                code: "Aal35le2",
                date: new Date("2022-01-03")
            },
            {
                id: 2,
                title: "종료된 햄릿2",
                code: "akbl31NY",
                date: new Date("2022-02-24")
            },
            {
                id: 3,
                title: "종료된 햄릿3",
                code: "etb4J2Ui",
                date: new Date("2022-04-30")
            },
            {
                id: 4,
                title: "종료된 햄릿4",
                code: "nv0b9oxP",
                date: new Date("2022-05-01")
            },
            {
                id: 5,
                title: "종료된 햄릿5",
                code: "2wE48mzc",
                date: new Date("2022-05-02")
            },
        ]

        const myQs: question[] = [
            {
                q: "현재 다니는 SSAFY 캠퍼스는 어딘가요?",
                type: "poll",
                time: 20,
                choices: [
                    "서울 캠퍼스",
                    "대전 캠퍼스",
                    "부울경 캠퍼스",
                    "구미 캠퍼스",
                ]
            },
            {
                q: "1+1=?",
                type: "subjective",
                time: 10,
                point: 10,
            },
            {
                q: "컨설턴트님은 무엇을 더 좋아할까요?",
                type: "quiz",
                time: 30,
                point: 50,
                choices: [
                    "짜장면",
                    "짬뽕",
                ]
            },
            {
                q: "햄릿에 대해 어떻게 생각하시나요?",
                type: "survey",
                time: 40,
            },
        ]

        setMyHamlets(myham);
        setClosedHamlets(clham);
        setMyQuestions(myQs);
    }, []);


    
    const onClick = ({id, title, code,date } : hamlet) => {
        setModalOpen(!modalOpen); // 이 햄릿안에 들어있는 질문을 가져와야함
        <div>
            { modalOpen ? (
                <section>
                    <header>
                        {title}
                        <button className="close" onClick={() => setModalOpen(!modalOpen)}>
                            &times;
                        </button>
                    </header>
                    <main>없어</main>
                    <footer>
                        <button className="close" onClick={onClick2}>
                            시작하기
                        </button>
                    </footer>
            </section>
            ) : null}
        </div>
    }

    const onClick2 = () => {

    }
    const onEditQuestion = () => {
        
    }

    return (
        <StyledContainer>
        <main>
            <nav className='navBar'>
                {
                    ["내 햄릿", "질문 목록", "종료된 햄릿"].map((title, idx) => 
                        <StyledNavLabel selected={selectedLabelIdx === idx} onClick={(): void => setSelectedLabelIdx(idx)} key={`label-${idx}`}>
                            {title}
                        </StyledNavLabel>
                    )
                }
            </nav>
            <StyledContentWrapper>
                <ContentScrollWrapper selectedLabelIdx={selectedLabelIdx}>
                    {
                        selectedLabelIdx === 0      // 내 햄릿
                        &&
                        myHamlets.map((item, idx) => (
                            <Item 
                                key={`myHamlets-${idx}`}
                                item={item}
                                onClick={() => onClick(item)}
                                isClosed={false} 
                            />
                        ))
                    }
                    {
                        selectedLabelIdx === 1      // 질문 목록
                        &&
                        myQuestions.map((item, idx) => (
                            <Question 
                                key={`myQuestions-${idx}`}
                                item={item}
                                onClick={onClick2} 
                                onEditQuestion={onEditQuestion}
                            />
                        ))
                    }
                    {
                        selectedLabelIdx === 2      // 종료된 햄릿
                        &&
                        closedHamlets.map((item, idx) => (
                            <Item 
                                key={`closedHamlets-${idx}`}
                                item={item}
                                onClick={() => onClick(item)}
                                isClosed={true} 
                            />
                        ))
                    }
                </ContentScrollWrapper>
                <AddBtn>
                        {
                            selectedLabelIdx === 0      // 내 햄릿
                            &&
                            <div className="btnTitle">
                                새 햄릿 추가
                            </div>
                        }
                        {
                            selectedLabelIdx === 1      // 질문 목록
                            &&
                            <div className="btnTitle">
                                새 질문 추가
                            </div>
                        }
                    <div className="roundBtn">
                        <BsPlusLg />
                    </div>
                </AddBtn>
            </StyledContentWrapper>
        </main>
    </StyledContainer>
    )
}

export default Admin;
