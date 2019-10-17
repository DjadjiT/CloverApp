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
import { Clipboard } from 'react-native';

type Props = {}

const qr_json = {
    "qr_link" : "https://www.augarde.com/produit/blue-saphire-ladies-watch/",
    "code" : "ADEHEBY38382",
    "position" :
        {
            "lat" : 48.8491986,
            "lon" :	2.3895802
        }
};

const promoCode = {
    "promo" :[
        {
            "code" : "ADEHEBY38382",
            "type" : "strap",
            "value" : 20
        },
        {
            "code" : "KJM1N8301OI2",
            "type" : "watches",
            "value" : 15
        }
    ]
};


export default class QrCodeReaderScreen extends Component<Props> {

    constructor(props) {
        super(props);

        this.state = {
            cam_permission : false ,
            visible : false,
            qr_value : '',
            promotion :{
                code : '',
                promoType : '',
                value : 0
            }};

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
        this.setState({ qr_value: qrvalue });
        this.setState({visible : true});
        this.setState({ camOpen: true });
        this.compareLink();
    }

    returnHomePage() {
            this.setState({visible : false});
            Actions.popTo("MainScreen");
    }

    compareLink() {
        console.log("start compare link");
        let type = '';
        let value = '';

        let data = JSON.stringify(qr_json);
        let promo_qr = JSON.stringify(promoCode);
        let parse_qr = JSON.parse(data);
        let parse_promo = JSON.parse(promo_qr);

        if (parse_qr.qr_link === this.state.qr_value) {

            for(let i = 0; i<parse_promo.promo.length; i++){
                if(parse_qr.code === parse_promo.promo[i].code){
                    console.log("qr code is equal to qr code from the promo list");
                    switch (parse_promo.promo[i].type) {
                        case 'watches' :
                            this.state.promotion.promoType = "montres";
                            break;
                        case 'strap' :
                            this.state.promotion.promoType = "bracelets";
                            break;
                        case 'custom_watches' :
                            this.state.promotion.promoType = "montres personnalisée";
                            break;
                        case 'cases' :
                            this.state.promotion.promoType = "boitiers";
                            break;
                        case 'dial' :
                            this.state.promotion.promoType = "cadrans";
                            break;
                        default :
                            console.warn("Promo type not specified");
                    }
                    this.state.promotion.value = parse_promo.promo[i].value;
                    this.state.promotion.code = parse_qr.code;
                }
            }
            return true;
        }
        return false;
    }

    copyToClipBoard = async () => {

    };

    render() {
        if(!this.state.cam_permission) {
            this.requestCameraPermission();
        }
        else if(this.state.cam_permission) {
            return(
                <View style={{ flex: 1 }}>a
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
                        <Dialog
                            visible={this.state.visible}
                            dialogTitle={<DialogTitle title="Voici votre cadeau : " />}
                            footer={
                                <DialogFooter>
                                    <DialogButton
                                        text="Merci !"
                                        onPress={() => {this.returnHomePage();
                                            defaultAnimationDialog: false}
                                        }
                                    />

                                </DialogFooter>
                            }
                        >
                            <DialogContent>
                                <Text style = {
                                    {padding : 10,
                                    fontSize : 16}
                                }> {"Vous avez gagné : -"+this.state.promotion.value+"% sur les "+this.state.promotion.promoType+
                                " grâce au code : "}  </Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        this.copyToClipBoard();
                                    }}>
                                    <Text style={styles.promoCode}>{this.state.promotion.code}</Text>
                                </TouchableOpacity>
                            </DialogContent>
                        </Dialog>
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
