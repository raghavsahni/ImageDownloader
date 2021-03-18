import React, { Component } from 'react';
import {
  Image, StyleSheet, Text, TouchableOpacity, 
  ToastAndroid,
  PermissionsAndroid, TextInput, View
} from 'react-native';
import RNFetchBlob from "rn-fetch-blob";

import { ozToMl , inToCm , lbsToKg , mlToOz , cmToIn , kgToLbs} from './conversionFunctions';

class imageDownload extends Component {
  constructor() {
    super()
    this.state = {
      image_url: "",
      url: "",
      imgPath:"",
      fileName:"",
    }

  }
  check_Button = async () => {
    this.setState({
      image_url: this.state.url
    })

  }

  actualDownload = () => {
    this.setState({
      loading: true
    });


    let dirs = RNFetchBlob.fs.dirs;
    RNFetchBlob.config({
        // . is added infront of image name to hide it from gallery

      path: dirs.DownloadDir + "/image.png",
    // path: dirs.DownloadDir + "/" + this.state.fileName + '.png',
      fileCache: true,

    })

      .fetch(
        "GET",
        this.state.image_url,
        {
        }
      )
      .then(res => {
        this.setState({
          loading: false,
          imgPath: res.data
        });

        ToastAndroid.showWithGravity(
          "Download Completed!",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM
        );
      },

      );
  };
 

  async downloadFile() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Storage Permission",
          message: "App needs access to memory to download the file "
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.actualDownload();

      } else {
        Alert.alert(
          "Permission Denied!",
          "You need to give storage permission to download the file"
        );
      }
    } catch (err) {
      console.warn(err);
    }
  }



render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input_Text}
          onChangeText={(url) => this.setState({ url , fileName:url.split('/').pop()})}
          placeholder='Enter Url '
          value={this.state.url}
        />
        <TouchableOpacity style={styles.check_Button}>
          <Text
            style={styles.button_Text}
             onPress={this.check_Button}> Check </Text>
        </TouchableOpacity>

        <Image
          style={styles.imageset}
          source={{ uri: this.state.image_url }}
        />

        <TouchableOpacity style={styles.download_Button}>
          <Text
            style={styles.button_Text} onPress={() => this.downloadFile()}>  Download  </Text>
        </TouchableOpacity>

        <Image
          style={styles.imageset}
          source={{ uri: `file://${this.state.imgPath}`}}

        />
      {/* <Text>{this.state.imgPath}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  input_Text: {
    marginTop: 20,
    width: 350,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderColor: 'blue'
  },
  check_Button: {
    marginTop: 10,
    width: 150,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_Text: {
    color: 'black',
    fontSize: 18
  },
  imageset: {
    width: 350,
    height: 350,
    marginTop: 20,
    backgroundColor: 'white'
  },
  download_Button: {
    marginTop: 30,
    width: 250,
    borderRadius: 10,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'lightblue',
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default imageDownload;