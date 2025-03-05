import React, { useState } from 'react';
import styled from 'styled-components';

// data & context
import { questions } from '../../data/question';
import { useAnswers } from '../../context/AnswersContext';

// components
import Container from '../common/Container';
import QuestionField from './QnAField';
import ProgressBar from './ProgressBar';
import Header from '../common/Header';

// styles
import { FlexBox } from '../../styles/common/FlexStyle';

const NavButtons = styled(FlexBox)`
  width: 65%;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${({ theme }) => theme.fontSize.desktop.sm};
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 30px;
  background: ${({ disabled }) =>
    disabled ? '#ccc' : 'linear-gradient(135deg, #ff758c, #ff7eb3)'};
  color: white;
  transition: all 0.3s ease-in-out;
  box-shadow: ${({ disabled }) =>
    disabled
      ? 'none'
      : '4px 4px 10px rgba(255, 117, 140, 0.3), -4px -4px 10px rgba(255, 255, 255, 0.2)'};

  &:hover {
    background: ${({ disabled }) =>
      disabled ? '#ccc' : 'linear-gradient(135deg, #ff5e78, #ff85a1)'};
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-2px)')};
    box-shadow: ${({ disabled }) =>
      disabled ? 'none' : '0px 6px 15px rgba(255, 117, 140, 0.4)'};
  }

  &:active {
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(0.96)')};
    box-shadow: ${({ disabled }) =>
      disabled ? 'none' : '0px 3px 8px rgba(255, 117, 140, 0.2)'};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const InputFieldContainer = styled.div`
  width: 100%;
  height: 3%;
  padding: 70px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TestForm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { answers, setAnswers } = useAnswers();

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleAnswerChange = (answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentIndex].id]: answer,
    }));
  };

  // 완료 버튼 클릭 시, API 호출
  const handleSubmit = async () => {
    try {
      const response = await fetch('https://endpoint.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answers),
      });

      if (!response.ok) {
        throw new Error('Failed to submit answers');
      }

      const data = await response.json();
      alert('테스트 완료! 감사합니다.');
    } catch (error) {
      alert('제출 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const isAnswerSelected =
    answers[questions[currentIndex].id] !== undefined && answers[questions[currentIndex].id] !== '';

  return (
    <Container row="start">
      <FlexBox dir="col" row="between" col="center" height="20%">
        <Header />
        <ProgressBar current={currentIndex} total={questions.length} />
      </FlexBox>

      <InputFieldContainer>
        <QuestionField
          question={questions[currentIndex]}
          answer={answers[questions[currentIndex].id] || ''}
          setAnswer={handleAnswerChange}
        />
        <NavButtons row="between">
          <Button onClick={handlePrev} disabled={currentIndex === 0}>
            Prev
          </Button>
          <Button
            onClick={currentIndex < questions.length - 1 ? handleNext : handleSubmit}
            disabled={!isAnswerSelected}
          >
            {currentIndex < questions.length - 1 ? 'Next' : '완료'}
          </Button>
        </NavButtons>
      </InputFieldContainer>
    </Container>
  );
};

export default TestForm;
