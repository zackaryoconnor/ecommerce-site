export interface User {
  email: string;
  name?: string;
}

export interface LoginSignupProps {
  onLoginSuccess: (userData: User) => void;
}

export interface LoginSignupUIProps {
  onSubmit: (email: string, password: string, name?: string) => void;
  onToggleMode: () => void;
  isLogin: boolean;
  error?: string;
} 