/**
 * Created by SLPower on 2016/11/17.
 */
import React, { Component, PropTypes } from 'react';
import {
    requireNativeComponent
} from 'react-native';

var PushManager = requireNativeComponent('RCTPushView', PushView);


export default class PushView extends Component {
    render() {
        console.log("zzzzzzz");
        return (
            <PushManager {...this.props} />
        );
    }
}