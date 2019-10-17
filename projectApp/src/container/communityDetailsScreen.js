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

const componentDetailsArray = {
  boitier: [
    {
      id: 1,
      title: 'titre 1',
      type: 'boitier',
      image: require('../../assets/watches/boitier_A.png'),
    },
    {
      id: 2,
      title: 'titre 2',
      type: 'boitier',
      image: require('../../assets/watches/boitier_B.png'),
    },
    {
      id: 3,
      title: 'titre 3',
      type: 'boitier',
      image: require('../../assets/watches/boitier_C.png'),
    },
  ],
  cadran: [
    {
      id: 1,
      title: 'titre A',
      type: 'cadran',
      image: require('../../assets/watches/cadre_0.png'),
    },
    {
      id: 2,
      title: 'titre B',
      type: 'cadran',
      image: require('../../assets/watches/cadre_1.png'),
    },
    {
      id: 3,
      title: 'titre C',
      type: 'cadran',
      image: require('../../assets/watches/cadre_2.png'),
    },
    {
      id: 4,
      title: 'titre D',
      type: 'cadran',
      image: require('../../assets/watches/cadre_3.png'),
    },
  ],
  bracelet: [
    {
      id: 1,
      title: 'titre alpha',
      type: 'bracelet',
      image: require('../../assets/watches/bracelet_cuir.png'),
    },
    {
      id: 2,
      title: ' titre omega',
      type: 'bracelet',
      image: require('../../assets/watches/bracelet_cuir_fin_rouge.png'),
    },
  ],
};

let falseCommentaryList = [
  {
    author: 'author1',
    commentary: 'Meilleure montre du monde, elle a changé ma vie à jamais',
  },
  {
    author: 'author1',
    commentary: 'Meilleure montre du monde, elle a changé ma vie à jamais',
  },
  {
    author: 'author1',
    commentary: 'Meilleure montre du monde, elle a changé ma vie à jamais',
  },
  {
    author: 'author1',
    commentary: 'Meilleure montre du monde, elle a changé ma vie à jamais',
  },
  {
    author: 'author1',
    commentary: 'Meilleure montre du monde, elle a changé ma vie à jamais',
  },
  {
    author: 'author1',
    commentary: 'Meilleure montre du monde, elle a changé ma vie à jamais',
  },
  {
    author: 'author1',
    commentary: 'Meilleure montre du monde, elle a changé ma vie à jamais',
  },
  {
    author: 'author1',
    commentary: 'Meilleure montre du monde, elle a changé ma vie à jamais',
  },
  {
    author: 'author1',
    commentary: 'Meilleure montre du monde, elle a changé ma vie à jamais',
  },
];

export default class CommunityDetailsScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      commentary: '',
      commentaryList: falseCommentaryList,
    };
  }

  sendCommentary() {
    let {commentary, commentaryList} = this.state;
    if (commentary) {
      commentaryList.unshift({author: 'John Doe', commentary: commentary});
      this.setState({commentary: '', commentaryList: commentaryList});
    }
  }

  render() {
    let {commentary, commentaryList} = this.state;

    const watch = {
      title: 'Incroyable montre de luxe super stylée par la team 7',
      description:
        "Ceci est une incroyable montre de luxe, certifiée Team 7 la meilleure equipe de l'univers et je sais pas quoi dire d'autre mais c'est pas grave",
      price: '2500 €',
    };

    return (
      <View style={commonStyles.mainView}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.watchDetails}>
            <Image
              source={require('../../assets/watches/lux7.jpg')}
              resizeMode="contain"
              style={styles.watchImage}
            />
            <View style={{flex: 1.5}}>
              <View style={styles.watchDescription}>
                <Text style={styles.title}>{watch.title}</Text>
                <Text
                  numberOfLines={4}
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
                <Text style={styles.commentaryText}>{item.author}</Text>
                <Text style={styles.commentaryText}>{item.commentary}</Text>
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
