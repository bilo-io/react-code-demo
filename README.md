# react-code-demo

This component displays React code that can be toggled, as a way of showing/hiding documentation. In particular, it is designed to behave in a way that is self-documenting. As such, whenever your code changes, the documentation reflects that.

### Installation

`npm install react-code-demo`

### Usage

```jsx
import React from 'react'
import CodeView from 'react-code-demo'

export default class MyComponent extends React.Component {
    componentDidMount() {
        this.setState({ browser: detectBrowser() })
    }
    render() {
        const customComponent = <div>
            <h1>Hello, this is my component</h1>
            <div>
        </div>

        return (
            <CodeView code={ customCompoent } title={'optional title'} />
        )
    }
}
```
