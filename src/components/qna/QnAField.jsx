import React from 'react';
import styled from 'styled-components';

// styles
import FlexBox from '../../styles/common/FlexStyle';
import { SubTitle } from '../../styles/common/TextStyle';

const AnswerContainer = styled.div`
  display: ${({ count, questionId }) =>
    questionId === 2 ? 'flex' : count === 4 ? 'grid' : 'flex'};

  flex-direction: ${({ count, questionId }) =>
    questionId === 2 ? 'row' : count <= 3 ? 'column' : 'row'};

  grid-template-columns: ${({ count, questionId }) =>
    count === 4 && !(questionId === 2) ? '1fr 1fr' : 'none'};

  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

const OptionButton = styled.button`
  background: ${({ selected, theme }) => (selected ? theme.colors.pink : '#f9f9f9')};
  color: ${({ selected, theme }) => (selected ? theme.colors.white : theme.colors.black)};
  border: 2px solid ${({ selected }) => (selected ? '#ff5e78' : '#d3d3d3')};
  padding: 12px 18px;
  margin: 8px;
  cursor: pointer;
  border-radius: 25px;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  box-shadow: ${({ selected }) =>
    selected
      ? '0px 4px 12px rgba(255, 94, 120, 0.4)' // 선택된 버튼: 더 강조된 그림자 효과
      : '4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(255, 255, 255, 0.5)'};

  &:hover {
    background: ${({ theme }) => theme.colors.pink};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0px 6px 15px rgba(255, 94, 120, 0.5);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 3px 8px rgba(255, 94, 120, 0.3);
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 30px 0 0 0;
  font-size: ${({ theme }) => theme.fontSize.desktop.sm};
  border: 2px solid #d3d3d3;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.pink};
  }
`;

const Divider = styled.div`
  width: 80%;
  height: 2px;
  background: ${({ theme }) => theme.colors.gray.light};
  margin: 2rem 0;
`;
const QuestionField = ({ question, answer, setAnswer }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const filteredValue = inputValue.replace(/[^a-z0-9!@#$%^&*()_+=\-{}\[\]:;"'<>,.?/|\\`~]/g, '');
    setAnswer(filteredValue);
  };

  return (
    <FlexBox dir="col" col="center">
      <SubTitle>{question.question}</SubTitle>
      <Divider />

      {question.type === 'text' ? (
        <InputField
          type="text"
          placeholder={question.placeholder}
          value={answer}
          onChange={handleInputChange}
        />
      ) : (
        <AnswerContainer count={question.options.length} questionId={question.id}>
          {question.options.map((option) => (
            <OptionButton
              key={option}
              selected={answer === option}
              onClick={() => setAnswer(option)}
            >
              {option}
            </OptionButton>
          ))}

        </AnswerContainer>
      )}
                <Divider />

    </FlexBox>
    
  );
};

export default QuestionField;
