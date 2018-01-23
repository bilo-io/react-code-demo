import React from 'react';
// import { Icon } from 'bilo-ui'
import './style.scss'
// import Highlight from 'react-highlight.js'
// import Highlight from 'react-highlight'
import Highlight from 'react-hljs'
import jsxToString from 'jsx-to-string-2'
var hljs = require('highlight.js')
hljs.initHighlightingOnLoad()

class CodeDemo extends React.Component {
    state = {
        isOpen: true
    }

    componentWillMount() {
        const { code, title, functionNameOnly, useFunctionCode } = this.props;
        console.log(title, code)
        console.log('hljs', hljs.highlight('html','<div></div>'))
        this.setState({
            codeString: jsxToString(code, {
                // functionNameOnly: true,
                useFunctionCode: true
            })
        })
    }
    
    toggle() {
        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        })
        console.log(this.jsxCodeRef)
    }
    
    render() {
        const { isOpen, codeString } = this.state;
        const { code, title } = this.props;
        return this.state && code ? (
            <div className='ws-card'>
                <div className='code-demo'>
                    <span className='title'>{ title }</span>
                    <div className='toggle' onClick={() => this.toggle()}>
                        {/* <Icon name='code' />  */}
                        code
                    </div>
                    <br />
                    <div className='code-block'>
                        {
                            code && isOpen
                            // ? <Highlight className={'html'}>
                            //     {codeString ? codeString : '<div>...loading code</div>'}
                            //     </Highlight>
                                ? <span dangerouslySetInnerHTML={{ __html: `${hljs.highlight('html', codeString).value}` }}></span>    
                            :null
                        }
                    </div>
                </div>
                { code }
            </div>
        ) : null
    }
}

export default CodeDemo;