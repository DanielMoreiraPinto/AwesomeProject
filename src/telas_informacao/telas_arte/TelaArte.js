import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  SectionList,
} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
        {
          title: "Definição",
          data: ["Phasellus sagittis mollis ultrices. Maecenas sed venenatis tortor, at dictum nunc. Suspendisse lorem nisl, gravida et lorem sed, ullamcorper venenatis risus. Pellentesque finibus tellus non risus gravida, lobortis blandit nulla euismod. Vestibulum congue ipsum sem, eu convallis nisl dignissim et."]
        },
        {
          title: "As áreas a explorar",
          data: ["Etiam imperdiet finibus erat non dignissim. Aliquam cursus pharetra purus, eu ornare felis condimentum vitae. Praesent sed est sit amet felis ullamcorper rutrum quis a augue. Maecenas bibendum ante cursus, lacinia ante eu, tincidunt velit. Vestibulum tortor purus, cursus sit amet suscipit scelerisque, porta vel ipsum. Donec mauris nisi, tempor a varius ac, consequat quis odio. Praesent luctus justo luctus dictum mollis. Morbi tempor eget est non ullamcorper."]
        },
        {
          title: "O algoritmo",
          data: ["Phasellus sagittis mollis ultrices. Maecenas sed venenatis tortor, at dictum nunc. Suspendisse lorem nisl, gravida et lorem sed, ullamcorper venenatis risus. Pellentesque finibus tellus non risus gravida, lobortis blandit nulla euismod. Vestibulum congue ipsum sem, eu convallis nisl dignissim et."]
        }
        ]}
        renderSectionHeader={({section}) => 
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{section.title}</Text>
          </View>
        }
        renderItem={({item}) => 
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item}</Text>
            </View> 
        }
        keyExtractor={(item, index) => index}
      />
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },

  titleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "#2017a3",
    marginHorizontal: 5
  },

  titleText: {
    fontSize: 24
  },

  itemContainer: {
    marginBottom: 10,
    marginHorizontal: 5
  },

  itemText: {
    fontSize: 16,
    textAlign: "justify"
  }
})