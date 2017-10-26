import React, {Component} from 'react';
import css from './TitleBar.scss';
import classnames from 'classnames';

class TitleBar extends Component {

  render(){
    const {title} = this.props;

    return (
      <div className={css.titleVerticalSpace} >
        <div className={classnames(css.titleBar, 'text-center')}>
          <div className={css.logoDiv}>
            <img src="http://via.placeholder.com/350x150" />
          </div>
          <div className={classnames(css.titleDiv, 'text-center')}>
          {title ?
            <h1 className={css.titleText}>{title}</h1>
          : null}
          </div>
        </div>
      </div>
    );
  }
}

export default TitleBar;
