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
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import CollectionCarousel from '../component/collectionCarousel';
import CommunityBlock from '../component/communityBlock';

import styles from '../styles/mainScreenStyle';
import commonStyles from '../sharedStyles/commonStyle';

type Props = {};

const array = [
  {
    name: "La collection d'hiver",
    watchList: [
      {
        title: 'BLUE SAPHIRE LADIES WATCH',
        desc:
          'Smooth stretch fabric, contrast binding, round neckline, cap sleeves, ruched side detail.\nTake your shoe style to new heights with this alluring peep toe court shoe. Features a slim high heel and metallic detailing along the platform. Team with a high waisted pencil skirt and midi top for after dark glam.',
        image: require('../../assets/watches/lux7.jpg'),
        commentaryList: [
          {
            author: 'Marc',
            commentary: "Très belle montre, j'adore",
          },
          {
            author: 'Lukas',
            commentary: 'Très jolie couleur',
          },
          {
            author: 'Jonathan',
            commentary: 'Parfaite pour offrir à sa moitié',
          },
          {
            author: 'Manon',
            commentary:
              'Très agréable à porter, jolie finition, je la recommande !',
          },
        ],
      },
      {
        title: 'BLACK NIGHT GENTLEMEN WATCH',
        desc:
          'Lorem ipsum dolor sit amet, ad semper deseruisse vim, eos equidem consequat definitiones cu, vel at etiam velit efficiantur. Est ex quando causae efficiendi, ad volutpat periculis definiebas est.',
        image: require('../../assets/watches/lux6.jpg'),
        commentaryList: [
          {
            author: 'Djadji',
            commentary: 'Montre de qualité',
          },
          {
            author: 'John',
            commentary:
              'Belle montre, les matériaux sont de qualité et la finition est parfaite.',
          },
        ],
      },
      {
        title: 'DESIGNER BLACK CHROME WATCH',
        desc:
          'Lorem ipsum dolor sit amet, ad semper deseruisse vim, eos equidem consequat definitiones cu, vel at etiam velit efficiantur. Est ex quando causae efficiendi, ad volutpat periculis definiebas est.',
        image: require('../../assets/watches/lux5.jpg'),
        commentaryList: [
          {
            author: 'Mégane',
            commentary: 'Les détails sont vraiment travaillés',
          },
        ],
      },
    ],
  },
  {
    name: 'Elégance',
    watchList: [
      {
        title: 'BLACK RED SHADOW LINX',
        desc:
          'Lorem ipsum dolor sit amet, ad semper deseruisse vim, eos equidem consequat definitiones cu, vel at etiam velit efficiantur. Est ex quando causae efficiendi, ad volutpat periculis definiebas est.',
        image: require('../../assets/watches/lux8.jpg'),
        commentaryList: [
          {
            author: 'Djadji',
            commentary: 'Montre de qualité',
          },
          {
            author: 'John',
            commentary:
              'Belle montre, les matériaux sont de qualité et la finition est parfaite.',
          },
        ],
      },
      {
        title: 'BLACK NIGHT GENTLEMEN WATCH',
        desc:
          'Lorem ipsum dolor sit amet, ad semper deseruisse vim, eos equidem consequat definitiones cu, vel at etiam velit efficiantur. Est ex quando causae efficiendi, ad volutpat periculis definiebas est.',
        image: require('../../assets/watches/lux6.jpg'),
        commentaryList: [
          {
            author: 'Djadji',
            commentary: 'Montre de qualité',
          },
          {
            author: 'John',
            commentary:
              'Belle montre, les matériaux sont de qualité et la finition est parfaite.',
          },
        ],
      },
      {
        title: 'BLUE SAPHIRE LADIES WATCH',
        desc:
          'Smooth stretch fabric, contrast binding, round neckline, cap sleeves, ruched side detail.\nTake your shoe style to new heights with this alluring peep toe court shoe. Features a slim high heel and metallic detailing along the platform. Team with a high waisted pencil skirt and midi top for after dark glam.',
        image: require('../../assets/watches/lux7.jpg'),
        commentaryList: [
          {
            author: 'Marc',
            commentary: "Très belle montre, j'adore",
          },
          {
            author: 'Lukas',
            commentary: 'Très jolie couleur',
          },
          {
            author: 'Jonathan',
            commentary: 'Parfaite pour offrir à sa moitié',
          },
          {
            author: 'Manon',
            commentary:
              'Très agréable à porter, jolie finition, je la recommande !',
          },
        ],
      },
      {
        title: 'DESIGNER BLACK CHROME WATCH',
        desc:
          'Lorem ipsum dolor sit amet, ad semper deseruisse vim, eos equidem consequat definitiones cu, vel at etiam velit efficiantur. Est ex quando causae efficiendi, ad volutpat periculis definiebas est.',
        image: require('../../assets/watches/lux5.jpg'),
        commentaryList: [
          {
            author: 'Mégane',
            commentary: 'Les détails sont vraiment travaillés',
          },
        ],
      },
    ],
  },
  {
    name: 'La collection Team 7',
    watchList: [
      {
        title: 'DESIGNER BLACK CHROME WATCH',
        desc:
          'Lorem ipsum dolor sit amet, ad semper deseruisse vim, eos equidem consequat definitiones cu, vel at etiam velit efficiantur. Est ex quando causae efficiendi, ad volutpat periculis definiebas est.',
        image: require('../../assets/watches/lux5.jpg'),
        commentaryList: [
          {
            author: 'Mégane',
            commentary: 'Les détails sont vraiment travaillés',
          },
        ],
      },
      {
        title: 'BLACK RED SHADOW LINX',
        desc:
          'Lorem ipsum dolor sit amet, ad semper deseruisse vim, eos equidem consequat definitiones cu, vel at etiam velit efficiantur. Est ex quando causae efficiendi, ad volutpat periculis definiebas est.',
        image: require('../../assets/watches/lux8.jpg'),
        commentaryList: [
          {
            author: 'Djadji',
            commentary: 'Montre de qualité',
          },
          {
            author: 'John',
            commentary:
              'Belle montre, les matériaux sont de qualité et la finition est parfaite.',
          },
        ],
      },
      {
        title: 'BLACK NIGHT GENTLEMEN WATCH',
        desc:
          'Lorem ipsum dolor sit amet, ad semper deseruisse vim, eos equidem consequat definitiones cu, vel at etiam velit efficiantur. Est ex quando causae efficiendi, ad volutpat periculis definiebas est.',
        image: require('../../assets/watches/lux6.jpg'),
        commentaryList: [
          {
            author: 'Djadji',
            commentary: 'Montre de qualité',
          },
          {
            author: 'John',
            commentary:
              'Belle montre, les matériaux sont de qualité et la finition est parfaite.',
          },
        ],
      },
      {
        title: 'BLUE SAPHIRE LADIES WATCH',
        desc:
          'Smooth stretch fabric, contrast binding, round neckline, cap sleeves, ruched side detail.\nTake your shoe style to new heights with this alluring peep toe court shoe. Features a slim high heel and metallic detailing along the platform. Team with a high waisted pencil skirt and midi top for after dark glam.',
        image: require('../../assets/watches/lux7.jpg'),
        commentaryList: [
          {
            author: 'Marc',
            commentary: "Très belle montre, j'adore",
          },
          {
            author: 'Lukas',
            commentary: 'Très jolie couleur',
          },
          {
            author: 'Jonathan',
            commentary: 'Parfaite pour offrir à sa moitié',
          },
          {
            author: 'Manon',
            commentary:
              'Très agréable à porter, jolie finition, je la recommande !',
          },
        ],
      },
    ],
  },
];

export default class CollectionScreen extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItem = ({item, index}) => {
    console.log(item);
    return (
      <CommunityBlock
        source={item.image}
        title={item.title}
        text={item.desc}
        commentaryList={item.commentaryList}
        onPress={() => {
          Actions.push('CommunityDetailsScreen', {
            title: item.title,
            description: item.desc,
            source: item.image,
            commentaryList: item.commentaryList,
          });
        }}
      />
    );
  };

  render() {
    return (
      <View style={commonStyles.mainView}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {array.map((collectionObject, index) => {
            return (
              <View key={'carousel' + index}>
                <CollectionCarousel
                  data={collectionObject.watchList}
                  title={collectionObject.name}
                  renderItem={this.renderItem}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
