import {
  ModalBackGround,
  ModalContainer,
  ModalContents,
  ModalStyler,
} from './[id]';

const Modal = () => {
  return (
    <ModalContainer>
      <ModalStyler />
      <ModalBackGround
        initial={{ height: '0px' }}
        animate={{ height: '200px' }}
        exit={{ height: '0px' }}
      >
        <ModalContents
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          수정하기
        </ModalContents>
        <ModalContents
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          삭제하기
        </ModalContents>
        <ModalContents
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          예약처리하기
        </ModalContents>
        <ModalContents
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          거래완료하기
        </ModalContents>
      </ModalBackGround>
    </ModalContainer>
  );
};

export default Modal;
