import React from 'react';
import * as emailjs from 'emailjs-com';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'; 

class Feedback extends React.Component {
    constructor(props) {
      super(props);
  this.state = {
       input:{},
        errors:{}  
      };
    }

    
  

  handleInputChange(event) {
      event.preventDefault();
      let input = this.state.input;
      input[event.target.name] = event.target.value;
    
      this.setState({
        input
      });
    }

    sendMessage(event) {
        event.preventDefault();
        if(this.validate()){
          console.log(this.state);
          let input = {};
          input["name"] = "";
          input["email"] = "";
          input["comment"] = "";
          this.setState({input:input});
    const templateParams = {
          from_name: this.state.input.name + " (" + this.state.input.email + ")",
          to_name:'rj03012002@gmail.com',
          message:this.state.input.comment ,
        };
    emailjs
          .send("service_jfh3cwa", "template_kjr7xz8", templateParams, "user_ry5lSL5sNWJnygCE2Pyib");
  
        input["name"] = "";
        input["email"] = "";
        input["comment"] = "";
        this.setState({input:input});
      }
    }
      validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
    
        if (!input["name"]) {
          isValid = false;
          errors["name"] = "Please enter your name.";
        }
    
        if (!input["email"]) {
          isValid = false;
          errors["email"] = "Please enter your email Address.";
        }
    
        if (typeof input["email"] !== "undefined") {
            
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["email"])) {
            isValid = false;
            errors["email"] = "Please enter valid email address.";
          }
        }
    
        if (!input["comment"]) {
          isValid = false;
          errors["comment"] = "Please enter your comment.";
        }
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }




      render() {
        return (
          <div>
            <form
              className="ui form"
              id={this.props.id}
              name={this.props.name}
              method={this.props.method}
              action={this.props.action}
              noValidate 
              autoComplete="off"
            >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
              <TextField 
              id="name" 
              name="name"
              label="Name" 
              variant="outlined"  
              onChange={this.handleInputChange.bind(this)}
              value={this.state.input.name}
              style={{ width: "100%",marginLeft:8}}/>
      <div >{this.state.errors.name}</div>
      </Grid>
   
      <Grid item xs={12} sm={6}>
              <TextField id="email"
              name="email" 
              label="Email"
              variant="outlined" 
              onChange={this.handleInputChange.bind(this)}
              value={this.state.input.email}
              style={{ width: "100%",marginLeft:8 }}/>
            
              <div >{this.state.errors.email}</div>
        </Grid>
              
              <Grid item xs={12} sm={12}>
              <TextField
          id="comment"
          name="comment"
          label="Comment"
          multiline
          rows={6}
          variant="outlined"
          onChange={this.handleInputChange.bind(this)}
          value={this.state.input.comment}
          style={{ width: "100%",marginLeft:8}}
        />
                 <div >{this.state.errors.comment}</div>
          </Grid>
        <Grid item xs={12} sm={12}>
         <center><Button 
              variant="contained" 
              color="primary"   
              type="button" 
              value="Send"  
               onClick={this.sendMessage.bind(this)}    
               style={{
                  fontFamily: "Amatic SC",
                  fontSize: "20px",

                }}>Submit
             </Button></center>
             </Grid>
             </Grid>
            </form>
          </div>
        );
      }
    }

    export default Feedback;