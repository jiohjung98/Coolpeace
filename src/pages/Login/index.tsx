import { useState } from 'react';
import styled from '@emotion/styled';

import { ErrorModal, Footer } from '@components/common';
import { LoginForm, LoginTitle } from '@components/Login';
import ERROR_MODAL_MESSAGE from 'src/constants/lib/ERROR_MODAL_MESSAGE';

const Login = () => {
  const [modalContent, setModalContent] = useState(ERROR_MODAL_MESSAGE.LOGIN);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => setIsModalOpen(prev => !prev);
  const handleModalOpen = (text: string) => {
    setModalContent(prev => ({ ...prev, text }));
    setIsModalOpen(true);
  };

  return (
    <WhiteBackground>
      <Container>
        <Content>
          <LoginTitle />
          <LoginForm handleModalOpen={handleModalOpen} />
        </Content>
      </Container>
      <Footer />
      {isModalOpen && (
        <ErrorModal
          modalContent={modalContent}
          ButtonFunc={handleModalClose}
        />
      )}
    </WhiteBackground>
  );
};

export default Login;

const WhiteBackground = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #fff;
`;

const Container = styled.div`
  max-width: 524px;
  height: calc(100% - 100px);

  margin: auto;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  margin: 50px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 65px;
`;
