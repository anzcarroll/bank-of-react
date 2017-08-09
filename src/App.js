import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Debits from './components/Debits'


class App extends Component {
  constructor() {
    super();
    this.state = {
        currentUser: {
          userName: 'bob_loblaw',
          memberSince: '08/23/99',
        },
          debits: [],
          credits:[]
          
    }
  }


 

_getDebits = (event) => {
     axios.get(`http://localhost:4000/debits`)
      .then( (res) => {
        const debits = res.data;
        this.setState({
            debits
        });
      })
      .catch( (error) => {
        console.log(error);
      })
  }

_getCredits = (event) => {
     axios.get(`http://localhost:4000/credits`)
      .then( (res) => {
        const credits = res.data;
          this.setState({
            credits
        });
      })
      .catch( (error) => {
        console.log(error);
      })
  }

_calculateAccountBalance = () => {
const totalCredits = this.state.credits.reduce((totalCredits, credit) =>{
return totalCredits + credit.amount
}, 0);
const totalDebits = this.state.debits.reduce((totalDebits, debit) => {
  return totalDebits + debit.amount
}, 0);

return totalCredits - totalDebits;
}

 componentWillMount() {
   this._getDebits();
  this._getCredits();

  }


  render() {
    const accountBalance = this._calculateAccountBalance();
    const HomeComponent = () => (
      <Home 
        accountBalance={accountBalance}
      />);
      const UserProfileComponent = () => ( 
      <UserProfile 
        userName={this.state.currentUser.userName} 
        memberSince={this.state.currentUser.memberSince}  
      />);
      const DebitsComponent = () => (
       <Debits 
        debits={this.state.debits}
       />
      )

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/UserProfile" render={UserProfileComponent}/>
            <Route exact path="/Debits" render={DebitsComponent}/>
          </div>
        </Router>
    );
  }
}

export default App;