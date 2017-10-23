import React, {Component} from 'react';
import css from './StarsSVG.scss';

class StarsSVG extends Component {

  render(){
    const {items} = this.props;

    return (

      <svg className={css.stars} viewBox="0 0 560 289.77">
        <defs>

          <pattern id="image-1" x="0" y="0" width="1" height="1">
            <image xlinkHref={items[0].imageUrl} height="220" />
          </pattern>
          <pattern id="image-2" width="1" height="1">
            <image xlinkHref={items[1].imageUrl} height="200" />
          </pattern>
          <pattern id="image-3" width="1" height="1">
            <image xlinkHref={items[2].imageUrl} height="220" />
          </pattern>
        </defs>

        <filter id="dropshadow" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="2" dy="2" result="offsetblur"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <path data-position={items[0].position} className={css.starLeft} d="M101.47 54.58c8.86-3.17 45.6 36.42 54.63 39.06 9.02 2.64 61.32-10.9 67.07-3.45 5.75 7.4-20.55 54.6-20.27 64 .28 9.4 29.3 54.9 24 62.7-5.3 7.7-58.3-2.7-67.14.5-8.86 3.1-43.2 44.8-52.23 42.2-9.03-2.7-15.5-56.3-21.24-63.7-5.8-7.5-56.1-27.3-56.3-36.7-.3-9.4 48.7-32.1 54-39.88 5.3-7.77 8.6-61.7 17.4-64.86z"/>
        <path data-position={items[1].position} className={css.starRight} d="M458.53 54.58c-8.86-3.17-45.6 36.42-54.63 39.06-9.02 2.64-61.32-10.9-67.07-3.45-5.75 7.4 20.55 54.6 20.27 64-.28 9.4-29.3 54.9-24 62.7 5.3 7.7 58.3-2.7 67.14.5 8.86 3.1 43.2 44.8 52.23 42.2 9.03-2.7 15.5-56.3 21.24-63.7 5.8-7.5 56.1-27.3 56.3-36.7.3-9.4-48.7-32.1-54-39.88-5.3-7.77-8.6-61.7-17.4-64.86z"/>
        <path data-position={items[2].position} className={css.starCenter} d="M280 30c9.4 0 30.66 49.66 38.27 55.2 7.6 5.5 61.4 10.4 64.3 19.33 2.92 8.94-37.74 44.5-40.65 53.45-2.9 8.94 9.1 61.62 1.48 67.14-7.6 5.53-54-22.15-63.4-22.15-9.4 0-55.8 27.68-63.4 22.15-7.6-5.52 4.38-58.2 1.48-67.14-2.9-8.94-43.57-44.5-40.66-53.45 2.9-8.94 56.7-13.82 64.3-19.34C249.35 79.6 270.6 30 280 30z"/>
      </svg>
    );
  }

}

export default StarsSVG;
