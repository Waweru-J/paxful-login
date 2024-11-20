import React from "react";

class ErrorBoundary extends React.Component {
   constructor(props) {
    super(props);
    this.state = { hasError: false};
   }
 /* eslint-disable  */
  static getDerivedStateFromError(error) {
    return  {hasError: true };
  }
  /* eslint-enable react/prop-types */
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
    }
   /* eslint-disable react/prop-types */
    return this.props.children;
  }

}

export default ErrorBoundary