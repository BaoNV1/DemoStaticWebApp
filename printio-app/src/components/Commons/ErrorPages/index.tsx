import { Image } from '@fluentui/react';
import React from 'react';
import './ErrorPages.css';
export default class NotFound extends React.Component {
  render() {
    return (
        <div className="not-found-container">
            <img src="assets/Images/page-not-found.jpg" className="image-not-found"/> 
            <div className="txt-not-found-main">
                <p className="txt-not-found">URLが正しいことを確認してください。</p>
            </div>
        </div>
    );
  }
}