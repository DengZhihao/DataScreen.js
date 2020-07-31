import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <i data-dir="se" onMouseDown={e => {
            e.preventDefault()
            let {clientX, clientY} = e
            let width = parseFloat(editorStyle.width)
            let height = parseFloat(editorStyle.height)
            document.body.onmousemove = e => {
                let newWidth = width + (e.clientX - clientX)
                let newHeight = height + (e.clientY - clientY)
                seteditorStyle({
                    ...editorStyle,
                    width: newWidth + 'px',
                    height: newHeight + 'px'
                })
                setTreeItemDataValue({
                    ...selectItem,
                    style: {
                        ...selectItem.style,
                        'width': `${newWidth}px`,
                        'height': `${newHeight}px`
                    }
                })
            }
            document.body.onmouseup = function () {
                document.body.onmousemove = null
            }
        }} className="editor-grip editor-grip-se"><b></b></i>
    );
}

export default App;
