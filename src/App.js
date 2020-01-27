import React,{Component} from 'react';
import "tachyons";
import Nav from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import Register from "./Components/Register/Register";
import FaceRecoginition from "./Components/FaceRecoginition/FaceRecoginition";
import Signin from "./Components/SignIn/SignIn";
import Particles from 'react-particles-js';
import "./index.css";
import "./App.css";



const particleOptions={
                particles: {
                  number:{
                    value:150,
                    density:{
                      enable:true,
                      value_area:400
                    }
                  }
                  
              }
            }
const initialState={
      input:"",
      imageUrl:"",
      box:{},
      isSignIn:false,
      route:"signin",
      user:{
            email:'',
            name:'',
            id:'',
            entries:0
         }
      }

class App extends Component {
  constructor(){
    super();
    this.state=initialState;
  }

  loadUser=(data)=>{
    this.setState({user:{
                          email:data.email,
                          name:data.name,
                          id:data.id,
                          entries:data.entries
                        }
                  })
              }

 calculateFaceLocation=(data)=>{
          const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
          const image=document.getElementById("inputimage");
          const  width=(image.width);
          const height=(image.height);
          return{
            leftcol:clarifaiFace.left_col*width,
            topRow:clarifaiFace.top_row*height,
            bottomRow:height-(clarifaiFace.bottom_row*height),
            rightcol:width-(clarifaiFace.right_col*width)        }
  }

  displayFaceBox=(box)=>{
    console.log(box);
    this.setState({box:box});

  
  }

  onRouteChange=(route)=>{
    if(route==='signin'){
      this.setState(initialState);
    }
    else if(route==='home'){
      this.setState({isSignIn:true})
    }
    this.setState({route:route})

  }
  
  onInputChange=(event)=>{
     this.setState({input:event.target.value})

  }

  onButtonPress=()=>{
   this.setState({imageUrl:this.state.input})
   fetch('http://localhost:3000/imageurl',{
                  method:'post',
                  headers:{'Content-type':'application/json'},
                  body: JSON.stringify({
                        input:this.state.input
                  })
          })
          .then(response=>response.json())
          .then(response=>{
           if (response) {
              fetch('http://localhost:3000/image',{
                  method:'put',
                  headers:{'Content-type':'application/json'},
                  body: JSON.stringify({
                        id:this.state.user.id
                  })
                })
                  .then(response=>response.json())
                  .then(count=>{
                    this.setState(Object.assign(this.state.user,{entries:count}))
                  })
                    .catch(err=>console.log(err))
              }
            this.displayFaceBox(this.calculateFaceLocation(response));
          }
      )
    .catch(err=>console.log(err));
  }

  render(){
            return (
                <div className="App">
                                            <Particles className="particles" 
                                            params={particleOptions}
                                            />
                                             {this.state.route === "home"
                                             ? <div>
                                                  <Nav onRouteChange={this.onRouteChange}/>  
                                                  <Logo/>
                                                  <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                                                  <ImageLinkForm onInputChange={this.onInputChange} onButtonPress={this.onButtonPress}/>
                                                  <FaceRecoginition imageUrl={this.state.imageUrl}  box={this.state.box}/>
                                                </div>
                                              :(this.state.route==="signin"?
                                                <div>
                                                  <Signin isSignIn={this.state.isSignIn} loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                                                </div>
                                                :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                                              )}
                                              
                                </div>
            )
          }
      }

export default App;
