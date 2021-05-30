import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
export const App = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const getCharacters = async () => {
      const {results} = await fetch(
        'https://rickandmortyapi.com/api/character',
      ).then(res => res.json());
      setResults(results);
    };
    getCharacters();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        {results.map(({name, species, image, gender}) => (
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri: image,
                  }}
                />
                <Body>
                  <Text>{name}</Text>
                  <Text note>{species}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri: image,
                }}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem>
              <Right>
                <Text>{gender}</Text>
              </Right>
            </CardItem>
          </Card>
        ))}
      </Content>
    </Container>
  );
};
