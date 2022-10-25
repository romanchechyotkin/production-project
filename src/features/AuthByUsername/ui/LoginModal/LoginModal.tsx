import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {Modal} from "shared/ui/Modal/Modal";
import {LoginForm} from "../LoginForm/LoginForm";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({className, isOpen, onClose}) => (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
        <LoginForm />
    </Modal>
);
