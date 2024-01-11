import styled from '@emotion/styled';
import theme from '@styles/theme';

import { StepperProps, NumberProps, LineProps } from '@/types/register';
import checkMark from '@assets/icons/ic-register-check.svg';

const Stepper = ({ steps, currentStep }: StepperProps) => {
  return (
    <StepperContainer>
      {steps.map((step, index) => {
        return (
          <Step key={index}>
            <Number
              className={
                step.isCompleted
                  ? 'completed'
                  : currentStep !== index
                    ? 'disabled'
                    : undefined
              }
              src={checkMark}
            >
              <span>{index + 1}</span>
            </Number>
            <Description
              className={
                !step.isCompleted && currentStep !== index
                  ? 'disabled'
                  : undefined
              }
            >
              {step.title}
            </Description>
            <Line $isLastStep={index}>···</Line>
          </Step>
        );
      })}
    </StepperContainer>
  );
};

export default Stepper;

const StepperContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
`;

const Number = styled.div<NumberProps>`
  width: 35px;
  height: 35px;

  margin-right: 10px;
  padding-bottom: 2px;
  border: 3px solid ${theme.colors.hover};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.hover};
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0.5px;

  &.completed {
    background: url(${props => props.src}) center;

    & > span {
      display: none;
    }
  }

  &.disabled {
    border: 3px solid #979c9e;

    & > span {
      color: #979c9e;
    }
  }
`;

const Description = styled.div`
  color: ${theme.colors.ink600};
  font-size: 22px;
  font-weight: 700;
  line-height: 26.148px;
  letter-spacing: -0.7px;

  &.disabled {
    color: #979c9e;
  }
`;

const Line = styled.div<LineProps>`
  margin: 0px 40px;

  display: ${props => (props.$isLastStep === 3 ? 'none' : 'block')};
`;
