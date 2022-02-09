import './header.css';
export interface HeaderProps {
    user?: {};
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
export declare const Header: ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => JSX.Element;
//# sourceMappingURL=Header.d.ts.map