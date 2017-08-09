import React, {Component} from 'react';
import AccountBalance from './AccountBalance'
import DebitList from './DebitList'

class Debits extends Component {
  render() {
      debits = this.props.debits;
  const DebitComponent = debits.map(( debit, index ) => {
    return <DebitList
    key= {index}
    description= {debit.description} 
    date= {debit.amount} 
    date= {debit.date}
    />
} )
    return (
        <div>
          <h1> DEBITS:</h1>
           {DebitComponent}
        </div>
    );
  }
}



export default Debits;