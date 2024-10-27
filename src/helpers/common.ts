import {Dimensions} from 'react-native';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

interface iTest {
  
}
export const wp = (percentage: any) => {
    const width =  deviceWidth;
    return (percentage*width)/100;
}
export const hp = (percentage: any) => {
    const height =  deviceHeight;
    return (percentage*height)/100;
}

export const getImageSize= (height: any, width: any) => {
    if (width > height) {
        return 250;
    }
    else if (width < height) {
        return 300;
    }
    else{
        return 200;
    }
}

export const handleGetListMediaOrAlbum = (MediaAlbum) => {
    if(MediaAlbum === "Media"){
      getAllListMedia()
      .then((data) => {
        console.log(data.myListMedia)
      })
      .catch((error) => {
        console.error("Error fetching tags:", error);
      });
    }else if (MediaAlbum === "Album"){
      alert("123")
    }
  }