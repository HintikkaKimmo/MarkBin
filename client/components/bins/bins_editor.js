/**
 * Created by Kimmo on 12.7.2016.
 */

import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class BinsEditor extends Component {
    onEditorChange(content) {
        Meteor.call('bins.update', this.props.bin, content);
    }

    render() {
        return (
          <div className="col-xs-8">
              <h5>Input</h5>
              <CodeMirror
                  value={this.props.bin.content}
                  onChange={this.onEditorChange.bind(this)}
                  options={{mode: 'markdown', lineNumber: true}}/>
          </div>
        );
    }
}

export default BinsEditor;