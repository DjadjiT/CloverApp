/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, setGlobal} from 'reactn';

import Dialog, { DialogTitle, DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';

import {
    Platform,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    PermissionsAndroid
} from 'react-native';

import { CameraKitCameraScreen, } from 'react-native-camera-kit';

import {Actions} from 'react-native-router-flux';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';

import styles from '../styles/mainScreenStyle';

type Props = {};

export default class QrCodeReaderScreen extends Component<Props> {

    constructor(props) {
        super(props);

        this.state = {
            cam_permission : false ,
            visible : false,
            qr_value : ''};

    }

    async requestCameraPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'CloverApp needs access to your camera ' +
                        'so you can take pictures of qr code.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
                this.setState({ qr_value: '' });
                this.setState({cam_permission : true})
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }

    }

    onBarcodeScan(qrvalue) {
        //called after te successful scanning of QRCode/Barcode
        this.setState({ qr_value: qrvalue });
        console.log("qr link :"+    qrvalue);
        this.setState({ camOpen: true });
        this.setState({visible : true});
    }

    returnHomePage() {

    }

    render() {
        if(!this.state.cam_permission) {
            this.requestCameraPermission();
        }
        else if(this.state.cam_permission) {
            return(
                <View style={{ flex: 1 }}>
                    <CameraKitCameraScreen
                        showFrame={false}
                        //Show/hide scan frame
                        scanBarcode={true}
                        //Can restrict for the QR Code only
                        laserColor={'blue'}
                        //Color can be of your choice
                        frameColor={'yellow'}
                        //If frame is visible then frame color
                        colorForScannerFrame={'black'}
                        //Scanner Frame color
                        onReadCode={event =>
                            this.onBarcodeScan(event.nativeEvent.codeStringValue)
                        }
                    />
                    <View style={styles.container}>

                        <Text> Qr scan here</Text>
                    </View>

                </View>
            );
        }
        return(
            <View style={styles.mainView}>
                <TouchableOpacity onPress={() => Actions.push('CustomizerScreen')}>
                    <Text style={styles.mainText}>vous n'avez pas la permission de la caméra !</Text>
                </TouchableOpacity>
            </View>);
    }
}
