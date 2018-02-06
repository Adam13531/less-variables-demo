import Media from 'react-media';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './styles.less';

/**
 * App Component.
 */
export default class App extends Component {
  /**
   * Renders the component.
   * @return {JSX} The component.
   */
  render() {
    const PogChamp = () => <img src="https://static-cdn.jtvnw.net/emoticons/v1/88/2.0" width={20} />

    return (
      <div className={styles.hello}>
        <Media query={styles.xs}>
          {matches =>
            matches && <div>Matched {styles.xs} (breakpoint at {styles.xsBreakpoint}) <PogChamp /></div>
          }
        </Media>
        <Media query={styles.sm}>
          {matches =>
            matches && <div>Matched {styles.sm} (breakpoint at {styles.smBreakpoint}) <PogChamp /> <PogChamp /></div>
          }
        </Media>
        <Media query={styles.md}>
          {matches =>
            matches && <div>Matched {styles.md} (breakpoint at {styles.mdBreakpoint}) <PogChamp /> <PogChamp /> <PogChamp /></div>
          }
        </Media>
        <Media query={styles.lg}>
          {matches =>
            matches && <div>Matched {styles.lg} (breakpoint at {styles.lgBreakpoint}) <PogChamp /> <PogChamp /> <PogChamp /> <PogChamp /></div>
          }
        </Media>
      </div>
    );
  }
}
