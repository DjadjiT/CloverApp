/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
    ViewPropTypes,
    TouchableOpacity,
    Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'purple',
        borderWidth: 2,
        justifyContent: 'center',
    },
    text: {
        fontSize: responsiveFontSize(3),
        color: 'white',
        marginVertical: responsiveHeight(5),
    },
    button: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 2,
    },
});

class MainScreenBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={{
                    height: responsiveHeight(30),
                    width: responsiveWidth(80),
                    marginVertical: responsiveHeight(3),
                    backgroundColor: 'white',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.53,
                    shadowRadius: 8,
                    elevation: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <Image
                    source={require('../../assets/watches/lux7.jpg')}
                    resizeMode="contain"
                    style={{flex: 1, height: responsiveHeight(30)}}
                />
                <View style={{flex: 1.5}}>
                    <View style={{flex: 2, justifyContent: 'flex-end'}}>
                        <Text
                            style={{fontWeight: 'bold', marginVertical: 5}}
                            numberOfLines={1}>
                            {this.props.title}
                        </Text>
                        <Text
                            numberOfLines={4}
                            ellipsizeMode="tail"
                            style={{
                                width: responsiveWidth(45),
                                marginHorizontal: responsiveWidth(2),
                            }}>
                            {this.props.text}
                        </Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Text
                            style={{
                                color: 'lightgrey',
                                marginBottom: responsiveHeight(2),
                                alignSelf: 'flex-end',
                                marginRight: responsiveWidth(5),
                            }}>
                            Voir plus >>
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

        );
    }
}

export default MainScreenBlock;
