/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 */

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Modal from '../Modal/Modal';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBody from '../ModalBody/ModalBody';
import ModalFooter from '../ModalFooter/ModalFooter';
import Button from '../Button/Button';
import Input from '../Input/Input';
import IconButton from '../IconButton/IconButton';
import styles from './JoinModal.css';

export type Props = {
  className?: string,
  groupTitle: string,
  onClose: () => any,
  onJoin: () => any
};

class JoinModal extends PureComponent {
  props: Props;

  render() {
    const className = classNames(styles.root, this.props.className);

    return (
      <Modal isOpen className={className} onClose={this.props.onClose}>
        <ModalHeader className={styles.header}>
          <div className={styles.text}>Enter your contact details to join</div>
          <h4 className={styles.title}>{this.props.groupTitle}</h4>
        </ModalHeader>
        <ModalBody className={styles.body}>
          <form className={styles.form}>
            <Input
              type="text"
              placeholder="Enter your email or mobile"
              className={styles.input}
            />
            <Button wide onClick={this.props.onJoin} theme="primary">Continue</Button>
          </form>
        </ModalBody>
        <ModalFooter className={styles.footer}>
          <div className={styles.text}>
            Dialog is all your team messaging with free calling,<br />
            file sharing and fast mobile applications.
          </div>
          <div className={styles.buttons} >
            <IconButton glyph="logo" flat className={styles.button} size="large" />
            <IconButton glyph="phone" flat className={styles.button} size="large" />
            <IconButton glyph="apple" flat className={styles.button} size="large" />
            <IconButton glyph="android" flat className={styles.button} size="large" />
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}

export default JoinModal;
