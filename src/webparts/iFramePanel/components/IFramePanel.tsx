import * as React from 'react';
import styles from './IFramePanel.module.scss';
import { IIFramePanelProps } from './IIFramePanelProps';
// import { escape } from '@microsoft/sp-lodash-subset';
import { IFramePanelState } from './IFramePanelState';
import {  PrimaryButton, Panel } from 'office-ui-fabric-react';

export default class IFramePanel extends React.Component<IIFramePanelProps, IFramePanelState> {
  constructor(props: IIFramePanelProps) {
    super(props);
    this.state = {
      iFramePanelOpened: false,
    };
  }

  private _onDismiss(): void {
    console.log("onDismiss");
    this.setState({ iFramePanelOpened: false });
  }

  // private _onIframeLoaded(): void {
  //   console.log("onIframeLoaded");
  // }

  public render(): React.ReactElement<IIFramePanelProps> {
    const {
      isDarkTheme,
      hasTeamsContext,
     
    } = this.props;

    return (
      <section className={`${styles.iFramePanel} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          {/* <h2>Well done, {escape(userDisplayName)}!</h2> */}
        </div>

        <div>
          <h2>IFramePanel control</h2>
          <h3>Link: {this.props.iFramePanelurl}</h3>
          <PrimaryButton text="Open IFramePanel" onClick={() => this.setState({ iFramePanelOpened: true })} />

          <Panel
            isOpen={this.state.iFramePanelOpened}
            onDismiss={this._onDismiss.bind(this)}
            headerText="IFramePanel URL "
            closeButtonAriaLabel="Close"
            customWidth="600px" // Set your desired width value here

          >
            <iframe src={this.props.iFramePanelurl} title="Panel Title" style={{ width: '1000px', height: '1000px' }} />
          </Panel>
        </div>
      </section>
    );
  }
}
