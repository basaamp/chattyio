import React from 'react';
import { Text,KeyboardAvoidingView, TextInput,View, ScrollView, Image, TouchableOpacity, CameraRoll } from 'react-native';
import { Camera, Permissions, Constants } from 'expo';
import AssetUtils from 'expo-asset-utils'; // Version can be specified in package.json

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front,
    
    login: 'none',
        signup: 'none',
      comment: [],
      commentii:[] ,          
      userx: '',
      email: '',
      password: 'zlmmq',       
      profilepic: '',
      userii: 'basaamproioio',
      passwordii: 'zlmmq',
      iiuserii: 'basaamproio',
      iipasswordii: 'zlmmq',
       contactii: 'basaamproio',
       imageuri: 'b', 
       userlogin: '',
       passwordlogin: '',
       contacti: '',
       commenti:  '',
       userxr: '',
       emailr: '',
       passwordr: '',
       profilepicuri: 'smile.png',
       menu: 'flex'    
  };
constructor(props) {
  super(props);

  //this.register = this.register.bind(this);
  //this.function2 = this.function2.bind(this);
}
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

componentDidMount() {
  
 // this.contactsiiii = setInterval(this.contactsii, 8888);
 clearInterval(this.zxcii);    
 clearTimeout(this.zxcii);
 this.zxcii = setInterval(this.contactsiiii, 4444);
}

  render() {
    /*
    this.contactsii = () => {
    alert(82)
    clearInterval(this.contactsiiii);
    clearTimeout(this.contactsiiii);
  }
  */
    const { hasCameraPermission } = this.state;
    const loginii = () => {
     // alert(this.state.signup);
      this.setState({signup: 'none'})
      this.setState({login: 'flex'})
      }
    
    const signup = () => {
      //alert(this.state.signup);
     // this.setState({signup: 'flex'})
      this.setState({login: 'none'})
      this.state.signup == 'none' ? this.setState({signup: 'flex'}) : this.setState({signup: 'none'})
      }

       const login = () => {
     // alert(this.state.login);
      this.setState({signup: 'none'})
      this.state.login == 'none' ? this.setState({login: 'flex'}) : this.setState({login: 'none'})
      }

      const menu = () => {
    this.state.menu == 'none' ? this.setState({menu: 'flex'}) : this.setState({menu: 'none'})
      }

       const register = async () => {    
      //alert(this.state.userx);
  
const { uri } = await this.camera.takePictureAsync();
                 //.. alert(uri);
                  alert(this.state.imageuri)
                  this.setState({imageuri: uri})
                  alert(this.state.imageuri)
                  
 var    iiziixcii ={
   name: this.state.imageuri,
   uri: this.state.imageuri,
   type: "image/jpg"
 }   
     var iiziixciieight = new FormData();
    iiziixciieight.append("userx", this.state.userxr);

     iiziixciieight.append("email", this.state.emailr);
    iiziixciieight.append("file", iiziixcii);
     iiziixciieight.append("iiuploa", true);
    iiziixciieight.append("MAX_FILE_SIZE", 50000);
    iiziixciieight.append("password", this.state.passwordr);
    iiziixciieight.append("profilepic", this.state.imageuri);

    fetch('https://chattyioio.000webhostapp.com/iiziixcii.php', {
    
        method: "POST",
        body: iiziixciieight
    })

    
  

.then((response) => {
    return response.text()
  
  })
  .then((json) => {
    //alert(json);
 
     this.setState({login: 'flex', signup: 'none', userlogin: this.state.userxr, passwordlogin: this.state.passwordr })
     clearInterval(this.zxciiio);    
 clearTimeout(this.zxciiio);
 this.zxciiio = setInterval(this.contactsiiii, 4444);

  });
      }
      const loginsend = () => {
     // alert(this.state.signup);
          

 var    iiziixcii ={
   name: this.state.imageuri,
   uri: this.state.imageuri,
   type: "image/jpg"
 }   
     var iiziixciieight = new FormData();
    iiziixciieight.append("uploa", true);
    iiziixciieight.append("userii", this.state.userlogin);
     iiziixciieight.append("password", this.state.passwordlogin);
    iiziixciieight.append("contactii", this.state.contacti);
     iiziixciieight.append("commentii", this.state.commenti);
   
this.setState({ commenti: '' })
    fetch('https://chattyioio.000webhostapp.com/iiziixcii.php', {
    
        method: "POST",
        body: iiziixciieight
    })

    
  

.then((response) => {
    return response.json()
  
  })
  .then((json) => {
    //alert(json);
   this.setState({comment: json, signup: 'none', login: 'none'})
       

  });
      }
var loginsendiiii =  () => {
     clearInterval(this.loginsendii);
     clearTimeout(this.loginsendii);
      this.loginsendii = setInterval(loginsend, 2222);
      //clearInterval(zxcii);
     //clearTimeout(zxcii);  
    } 
      
   let pos = 1;
     //clearInterval(this.tabii);    
        // clearTimeout(this.tabii);
     this.contactsiiii = () => {
      
       pos = pos + 1;      
     //alert(pos);
   
         clearInterval(this.zxcii);    
         clearTimeout(this.zxcii);
         clearInterval(this.zxciiio);    
         clearTimeout(this.zxciiio);
 var    iiziixcii ={
   name: this.state.imageuri,
   uri: this.state.imageuri,
   type: "image/jpg"
 }   
     var iiziixciieight = new FormData();
    iiziixciieight.append("uploa", true);
    iiziixciieight.append("userii", this.state.userlogin);
     iiziixciieight.append("password", this.state.passwordlogin);
    iiziixciieight.append("contactii", this.state.contacti);
     iiziixciieight.append("commentii", this.state.commenti);
   

    fetch('https://chattyioio.000webhostapp.com/zxcii.php', {
    
        method: "POST",
        body: iiziixciieight
    })

    

    
  

.then((response) => {
    return response.json()
  
  })
  .then((json) => {
    //clearInterval(tabii); 
    //alert(json);
  
   // clearInterval(contactstab);
     //window.clearInterval(contactstab);
     this.setState({commentii: json});
      //alert(82);
    //clearInterval(this.contactsiiii);
   // clearTimeout(this.contactsiiii);

  });
       
  
      }

    if (hasCameraPermission === null) {
      return <View  style={{ height: 100 + '%'}} />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
   // clearInterval(this.zxcii);    
 ///clearTimeout(this.zxcii);
// this.zxcii = setInterval(this.contactsiiii, 6666);
      return (
        <KeyboardAvoidingView style={{ height: 100 + '%', paddingTop: Constants.statusBarHeight, }}   behavior="padding" enabled>
        <View style={{ height: 100 + '%', backgroundColor: 'rgb(245, 249, 253),'
        }} >
         
         
                  <Image source = {{ uri: 'https://c2.staticflickr.com/8/7416/13965358269_a86eeb22c9_b.jpg'}}
                  resizeMethod = "resize" 
  style = {{ position: 'absolute',
  height: 100 + '%',
  width: 100 + '%'
  }} />
  <TouchableOpacity
                style={{
             position: 'absolute',
    top: 4,
    left: 0,   
 height: 28,
  borderRadius: 1,
  marginLeft: 18,
  borderColor: 'rgb(18, 18, 18)',
  borderWidth: 0,
  width: 28,
  zIndex: 88,  
  //backgroundColor: 'white',
  //padding: 2
                }}
                
                onPress={menu}>
    <Image source = {{ uri: 'https://chattyioio.000webhostapp.com/003-menu-2.png'}}
    resizeMethod = "resize" 
  style = {{   
 height: 28,
  borderRadius: 1,
  borderColor: 'rgb(18, 18, 18)',
  borderWidth: 0,
  width: 28, 
   //backgroundColor: 'white',
  padding: 18
  }} />
  </TouchableOpacity>

  <View
  style = {{
  alignItems: 'center',
  // backgroundColor: 'rgb(88, 28, 88)',
  marginTop: 0,
  justifyContent: 'space-around',
  flexDirection: 'row'
  }}
  >
  <View style = {{ display: this.state.menu, marginTop: 0, backgroundColor: 'white', padding: 8, flexDirection: 'row', alignItems: 'space-around', justifyContent: 'space-around', width: 100 + '%' } } >
  <TouchableOpacity onPress={login}><Text>Login</Text></TouchableOpacity>
  <TouchableOpacity onPress={signup}><Text>Signup</Text></TouchableOpacity> 
  </View> 
    
  </View> 
  
          <View style = {{ height: 88, }} >
          <ScrollView
          horizontal={true}
  style = {{
 // height: 8,
  // backgroundColor: 'white',
  width: 100 + '%'
  }}
  >
  {
  
  this.state.commentii.map((item) => (
 <TouchableOpacity
                style={{
                  alignItems: 'center',
  //height: 28,
   //backgroundColor: 'blue',
  justifyContent: 'center',
  flexDirection: 'column',
  marginLeft: 18
                }}
                onPress={() => {

                  
                  this.setState({profilepicuri: item.profilepic, contacti: item.userx})
                  //alert(this.state.profilepicuri)
                  //alert(item.profilepic);

                          }}>

  
  <Image source = {{ uri: 'https://chattyioio.000webhostapp.com/' + item.profilepic }} 
  style = {{
  height: 48,
  borderRadius: 8,
  marginLeft: 2,
  borderColor: 'rgb(18, 18, 18)',
  borderWidth: 0,
  width: 48 }}
  resizeMethod = "resize" 
  />
  <Text>{item.userx}</Text>
 
  
  
  </TouchableOpacity>
  
  ))
  
  }
  </ScrollView>
  </View>
<View style = {{ display: this.state.signup, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', marginTop: 8 }} >

        <View style = {{ height: 88,
            backgroundColor: 'purple',
            borderRadius: 48,
            overflow: 'hidden',
            width: 88
         }} >

          <Camera
            style={{ flex: 1 ,
              borderRadius: 32,
            overflow: 'hidden'}}
            ref={ref => (this.camera = ref)}
            type={this.state.type}>
            
          </Camera>
          </View>
           
  <TextInput underlineColorAndroid = "transparent" placeholder="Username" onChangeText = { (text) =>   { this.setState({ userxr: text });  }}  style = {{ width: 100 + '%', backgroundColor: 'white', marginTop: 8 }} />
  <TextInput underlineColorAndroid = "transparent" placeholder="Email" onChangeText = { (text) =>   { this.setState({ emailr: text });  }} style = {{ width: 100 + '%', backgroundColor: 'white', marginTop: 2 }} />
  <TextInput underlineColorAndroid =  "transparent" placeholder="Password" onChangeText = { (text) =>   { this.setState({ passwordr: text });  }} style = {{ width: 100 + '%', backgroundColor: 'white', marginTop: 2 }}/>
      
  <TouchableOpacity
                style={{
                  alignItems: 'center',
                  marginTop: 5
                }}
                onPress={register}
                >
                <Text
                  style={{ fontSize: 18, color: 'black' }}>
                  {' '}Register{' '}
                </Text>
              </TouchableOpacity>

  </View>
  <View style ={{ display: this.state.login, backgroundColor: 'transparent', width: 100 + '%', justifyContent: 'center', alignItems: 'center', marginTop: 8}}>

  <TextInput underlineColorAndroid = "transparent" value = {this.state.userlogin} placeholder="Username" onChangeText = { (text) =>   { this.setState({ userlogin: text });  }} style = {{marginTop: 1 + '%', backgroundColor: 'white', width: 100 + '%' }} />
  <TextInput underlineColorAndroid = "transparent" value = {this.state.passwordlogin} placeholder="Password" onChangeText = { (text) =>   { this.setState({ passwordlogin: text });  }} style = {{backgroundColor: 'white', marginTop: 1 + '%', width: 100 + '%' }} />
<TouchableOpacity
                style={{
                  alignItems: 'center',
                  marginTop: 8
                }}
                onPress={loginsend}>
                <Text
                  style={{ fontSize: 18, color: 'black' }}>
                  {' '}Login{' '}
                </Text>
              </TouchableOpacity>
</View>

          
          <ScrollView
  style = {{
  height: 88,
  // backgroundColor: 'rgb(188, 188, 188)',
  }}
  >
  {
  
  this.state.comment.map((item) => (
  
  <View 
  style = {{
  alignItems: 'center',
  
  // backgroundColor: 'rgb(88, 28, 88)',
  
  
  
  marginTop: 8,
  justifyContent: 'center',
  flexDirection: 'row'
  }}
  >
  <View style = {{
  // backgroundColor: 'rgb(88, 88, 88)',
  
  display: item.imgx ? 'flex' : 'none',
  width: 18 + '%',
  marginLeft: 18,  
  }}
  >
  
  <Image
   source = {{ uri: 'https://chattyioio.000webhostapp.com/' + item.imgx }} 
   resizeMethod = "resize" 
  style = {{
  height: 28,
  borderRadius: 32,
  marginLeft: 18,
  borderColor: 'rgb(18, 18, 18)',
  borderWidth: 0,
  width: 28 }}
  />
  <Text 
  style = {{ fontWeight: '100'}}
  >{item.userx}</Text>
  </View>
  
  
  <View style = {{
  alignItems: item.imgx ? 'flex-start' : 'flex-end',
  // height: 22 + '%',
  //backgroundColor: 'rgb(18, 18, 18)',
  //alignItems: 'center',
  //backgroundColor: 'rgb(88, 28, 88)',
  //borderRadius: 18,
  justifyContent: 'center',
  flexDirection: 'column',
  width: 80 + '%'
  }}>
  
  <View
  style = {{ 
  //alignItems: 'center',
  // height: 22 + '%',
  // backgroundColor: 'rgb(18, 18, 18)',
  //backgroundColor: 'rgb(88, 28, 88)',
  //borderRadius: 18,
  // justifyContent: 'space-around',
  // flexDirection: 'column',
  //width: 80 + '%'
    justifyContent: 'center',
  flexDirection: 'column',
  }} >
  <Text  style = {{
  // alignItems: 'center',
  backgroundColor: item.profilepic ? 'rgb(104, 154, 206)' : 'rgb(255, 255, 255)',
  borderRadius: 8,
  padding: 14,
  // justifyContent: 'space-around',
  //   flexDirection: 'row'
  paddingTop: 8,
  paddingBottom: 8,
  color: item.profilepic ? 'white' : 'black',
  marginLeft: item.profilepic ? 0 : 18,
  marginRight: item.profilepic ? 18 : 0,
  }}
  >{item.comment}</Text>
  </View>
  </View>
  
  <View style = {{
  // backgroundColor: 'rgb(88, 88, 88)',
  
  display: item.profilepic ? 'flex' : 'none',
  width: 18 + '%',
  marginRight:  0,
  }}
  >
  
  <Image source = {{ uri: 'https://chattyioio.000webhostapp.com/' + item.profilepic }}  
  resizeMethod = "resize" 
  style = {{
  height: 28,
  borderRadius: 32,
  marginLeft: 18,
  borderColor: 'rgb(18, 18, 18)',
  borderWidth: 0,
  width: 28 }}
  />
  <Text>{item.contactx}</Text>

  </View>
  
  </View>
  
  
  ))
  
  }
  </ScrollView>
  <View style ={{ 
    //height: 80 + '%',
  // postion: 'absolute',
  height: 42,
  // top: 2 + '%',
   backgroundColor: 'rgb(255, 255, 255)',
  marginTop: 8,
  justifyContent: 'space-around',
  left: 0,
  flexDirection: 'row',
  alignItems: 'center'
  }}>
  <TouchableOpacity
                style={{
  height: 100 + '%',
   width: 18 + '%',
                backgroundColor:'transparent',
  alignItems: 'center',
    justifyContent: 'space-around',
  left: 0,
  flexDirection: 'row'
  //borderRadius: 88,
  //overflow: 'hidden'
                }}
                onPress={loginsend}>
<Image source = {{ uri: 'https://chattyioio.000webhostapp.com/' + this.state.profilepicuri}}
resizeMethod = "resize" 
  style = {{
 height: 28,
  borderRadius: 32,
  marginLeft: 18,
  borderColor: 'rgb(18, 18, 18)',
  borderWidth: 0,
  width: 28
  }} />
  </TouchableOpacity>
  {/*
  <TextInput  onChangeText = { (text) =>   { this.setState({ contacti: text });  }} style = {{ width: 100 + '%' }} />
  */}
  <TextInput 
  underlineColorAndroid='transparent'    value = {this.state.commenti}   
   onChangeText = { (text) =>   { this.setState({ commenti: text }); clearInterval(this.loginsendii);    
                  clearTimeout(this.loginsendii); }} style = {{ width: 60 + '%', backgroundColor: 'rgba(255, 255, 255, 0.8)', }}
 placeholder = "New message"                                   
                   />
<TouchableOpacity
                style={{
                  height: 50 + '%',
                  width: 8 + '%',
                backgroundColor: 'transparent',
                  alignItems: 'center',
                  borderRadius: 88,
                  overflow: 'hidden'
                }}
                resizeMethod = "resize" 
                onPress={loginsendiiii}>
                <Image source = {{ uri: 'https://chattyioio.000webhostapp.com/send.png'}}
  style = {{
      // position: 'absolute',
    borderRadius: 42,
  height: 98 + '%',
  width: 90 + '%',
  //backgroundColor: 'purple',
  }} />
              </TouchableOpacity>
</View>
        </View>
        </KeyboardAvoidingView>
      );
    }
  }
}
 