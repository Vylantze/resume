import { Component, type ErrorInfo, type ReactNode } from 'react';
import styles from './index.module.css';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError (error: Error): State {
    console.error('[ErrorBoundary][getDerivedStateFromError]', error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    console.error('[ErrorBoundary] Uncaught error:', error, errorInfo);
  }

  public render () {
    if (this.state.hasError) {
      return (
        <div className={styles['error-boundary']}>
          <h1>An error has occurred</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;