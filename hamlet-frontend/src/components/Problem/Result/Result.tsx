import { StyledDiv, StyledOption } from './styles';


// 관리자일시
{/* <StyledDiv3>
      <AdminButton>
        다음 문제 풀기
      </AdminButton>
    </StyledDiv3> */}

const Result = () => {
  return(
    <StyledDiv>
      <StyledOption isTitle={true}>최종 순위</StyledOption>
      <StyledOption isTitle={false}><p>1위</p> <p>A206_윤혜구</p> <p>1500점</p></StyledOption>
      <StyledOption isTitle={false}><p>2위</p> <p>A206_이규은</p> <p>1320점</p></StyledOption>
      <StyledOption isTitle={false}><p>3위</p> <p>A206_이건</p> <p>1280점</p></StyledOption>
    </StyledDiv>
  );
}

export default Result;