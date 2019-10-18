/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, setGlobal} from 'reactn';
import {
  Platform,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';

import {TextField} from 'react-native-material-textfield';

import {Actions} from 'react-native-router-flux';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import styles from '../styles/communityDetailsScreenStyle';
import commonStyles from '../sharedStyles/commonStyle';

type Props = {};

export default class CommunityDetailsScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      commentary: '',
      commentaryList: this.props.commentaryList
        ? this.props.commentaryList
        : [],
    };
  }

  sendCommentary() {
    let {commentary, commentaryList} = this.state;
    if (commentary) {
      commentaryList.unshift({author: 'Megane', commentary: commentary});
      this.setState({commentary: '', commentaryList: commentaryList});
    }
  }

  render() {
    let {commentary, commentaryList} = this.state;

    const watch = {
      title: this.props.title,
      description: this.props.description,
      price: '2500 €',
    };

    return (
      <View style={commonStyles.mainView}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.watchDetails}>
            <Image
              source={this.props.source}
              resizeMode="contain"
              style={styles.watchImage}
            />
            <View style={{flex: 1.5}}>
              <View style={styles.watchDescription}>
                <Text style={styles.title}>{watch.title}</Text>
                <Text
                  numberOfLines={10}
                  ellipsizeMode="tail"
                  style={styles.description}>
                  {watch.description}
                </Text>
              </View>
            </View>
          </View>

          <View>
            <TextField
              label="Lache ton com'"
              value={commentary}
              clearButtonMode="always"
              onChangeText={commentary => this.setState({commentary})}
              containerStyle={styles.textField}
              multiline
            />

            <TouchableOpacity
              style={styles.sendTouchable}
              onPress={() => {
                this.sendCommentary();
              }}>
              <Text style={styles.sendText}>{'Envoyer'}</Text>
            </TouchableOpacity>

            {commentaryList.map((item, index) => (
              <View key={index} style={styles.commentaryListContainer}>
                <Text style={styles.commentaryAuthor}>{item.author}</Text>
                <Text style={styles.commentaryDescription}>
                  {item.commentary}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.addToCartTouchable}>
          <Text style={styles.addToCartText}>Ajouter au panier</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
