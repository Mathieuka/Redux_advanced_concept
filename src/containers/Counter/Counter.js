import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

// Refactoring
import { 
    _incrementCounter, 
    _decrementCounter, 
    _addCounter, 
    _subtractCounter, 
    _storeResult, 
    _deleteResult } from '../../store/actions/index';

import { bindActionCreators } from 'redux';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props._incrementCounter} />
                <CounterControl label="Decrement" clicked={this.props._decrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props._addCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props._subtractCounter}  />
                <hr />
                <button onClick={() => this.props._storeResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props._deleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        _incrementCounter, 
        _decrementCounter, 
        _addCounter, 
        _subtractCounter, 
        _storeResult, 
        _deleteResult}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);