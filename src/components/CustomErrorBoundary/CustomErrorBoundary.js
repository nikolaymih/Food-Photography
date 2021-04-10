import { Component } from 'react';

class CustomErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state= {
            hasError: false
        }
    }
    
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error) {
        console.log('Error from global errorHandler: ', error)
    }

    render() {
        if(this.state.hasError) {
            return <h1>I am sorry but something wrong happened, please try again</h1>
        }
        return this.props.children
    }
}

export default CustomErrorBoundary