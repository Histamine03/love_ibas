import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// assets
import BannerImg from '../../assets/images/banner.png';

// components
import Container from '../common/Container';
import Header from '../common/Header';
import Poster from './Poster';
import Button from '../common/Button';

// styles
import { Img } from '../../styles/common/ImgStyle';
import FlexBox from '../../styles/common/FlexStyle';
import StyledText from '../common/StyledText';
// import styled from 'styled-components';

const StyledButton = styled.button`
  background: linear-gradient(135deg, #ff758c, #ff7eb3);
  color: white;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  padding: 0 0 0 3rem;
`;

const Divider = styled.div`
  width: 80%;
  height: 2px;
  background: ${({ theme }) => theme.colors.gray.light};
  margin: 2rem 0;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
`;

const LandingContainer = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <Header />
        <Img
          src={BannerImg}
          width="100%"
          border="1px solid ${({ theme }) => theme.colors.gray.light}"
        />
      </div>
      <Divider />
      <FlexBox width="100%">
        <Left>
          <Poster />
        </Left>
        <Center>
          <StyledText type="title">
            좋아하면 울리는
          </StyledText>
        </Center>
        <Right />
      </FlexBox>
      <FlexBox dir="col" row="between" col="center" height="14.5rem" padding="0 0 7rem 0">
      <FlexBox width="22.75rem" row="between">
        <StyledText type="caption">#여사친 / 남사친</StyledText>
        <StyledText type="caption">#CC</StyledText>
        <StyledText type="caption">#로맨틱</StyledText>
        <StyledText type="caption">#성공적</StyledText>
      </FlexBox>
      
      {/* 구분선 추가 */}
      <Divider />

      {/* 새롭게 정의한 버튼 사용 */}
      <StyledButton onClick={() => navigate('/qna')}>
        나랑 가까운 사람 찾으러 가기
      </StyledButton>
    </FlexBox>
    </Container>
  );
};

export default LandingContainer;
