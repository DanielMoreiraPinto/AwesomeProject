import React,{Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  SectionList,
} from 'react-native';

export function TelaArte() {
  return (
    <View style={styles.container1}> 
      <Text style={styles.header1}> A Arte da Computação </Text>
      <View style={styles.container2}>
        <Text style={styles.text1}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis magna lacinia felis lobortis vehicula sed sed odio. Etiam tristique, mi sit amet viverra auctor, quam mi tempus mauris, at aliquam ex augue vitae ante. Ut ornare tempus egestas. </Text>
      </View>
      <View style={styles.container3}>
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
        renderItem={({item}) => <Text style={styles.text1}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.header2}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: "center"
  },
  
  container2: {
    flex: 1,
    flexWrap: "wrap",
    alignContent: "flex-start",
    flexDirection: "row",
    margin: 10
  },
  
  container3: {
    flex: 3,
    alignItems: "center",
    margin: 10
  },
  
  text1: {
    textAlign: "justify",
    fontSize: 16,
    color : "#000000" 
  },
  
  header1: {
    fontSize: 30, 
    color : "#000000"
  },
  
  header2: {
    fontSize: 20, 
    color : "#000000"
  }
})