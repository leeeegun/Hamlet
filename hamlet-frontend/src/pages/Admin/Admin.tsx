import { FunctionComponent, FunctionComponentElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/style';
import Question from '../../components/Question/Question';
import { QuestionType, question, hamlet } from '../../types';

type ItemProps = {
    item: hamlet
    onClick(): void
    isClosed: boolean

}

const Item = ({item, onClick, isClosed} : ItemProps) => {
    const {id, title, code, date} = item

    const Hamlet = styled.div<{ isClosed: boolean }>`
        width: 10rem;
        height: 10rem;
        background-color: ${ colors.hamlet.quiz };
        color: ${ colors.fontLight };
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: ${isClosed ? "": "center"};
        position: relative;
        border-radius: 16px;
        margin: 16px;
    `

    const CloseBtn = styled.div`
        position: absolute;
        right: 0;
        top: 0;
        padding: 0.5rem;
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
    
    return (
        <Hamlet isClosed={isClosed}>
            <CloseBtn>X</CloseBtn>
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

const Admin = () => {


    const StyledContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
    `

    const StyledNav = styled.nav`
        display: flex;
        margin-left: 3rem;
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
        display: flex;
    `

    const [selectedLabelIdx, setSelectedLabelIdx] = useState<number>(0);
    const [myHamlets, setMyHamlets] = useState<hamlet[]>([]);
    const [myQuestions, setMyQuestions] = useState<question[]>([]);
    const [closedHamlets, setClosedHamlets] = useState<hamlet[]>([]);

    const onClick = () => {

    }


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
                choices: [
                    "서울 캠퍼스",
                    "대전 캠퍼스",
                    "부울경 캠퍼스",
                    "구미 캠퍼스",
                ]
            }
        ]

        setMyHamlets(myham);
        setClosedHamlets(clham);
        setMyQuestions(myQs);

    }, []);

    return (
        <StyledContainer>
        <main>
            <StyledNav>
                {
                    ["내 햄릿", "질문 목록", "종료된 햄릿"].map((title, idx) => 
                        <StyledNavLabel selected={selectedLabelIdx === idx} onClick={(): void => setSelectedLabelIdx(idx)}>
                            {title}
                        </StyledNavLabel>
                    )
                }
            </StyledNav>
            <StyledContentWrapper>
                {
                    selectedLabelIdx === 0      // 내 햄릿
                    &&
                    myHamlets.map((item, idx) => (
                        <Item 
                            item={item}
                            onClick={onClick}
                            isClosed={false} 
                        />
                    ))
                }
                {
                    selectedLabelIdx === 1      // 질문 목록
                    &&
                    myQuestions.map((item, idx) => (
                        <Question />
                    ))
                }
                {
                    selectedLabelIdx === 2      // 종료된 햄릿
                    &&
                    closedHamlets.map((item, idx) => (
                        <Item 
                            item={item}
                            onClick={onClick}
                            isClosed={true} 
                        />
                    ))
                }

            </StyledContentWrapper>
        </main>
    </StyledContainer>
    )
}

export default Admin;