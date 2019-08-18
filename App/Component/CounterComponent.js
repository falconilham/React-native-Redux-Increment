import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class CounterApp extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <Button 
                    onPress={this.props.increment}
                    title="tambah"
                />
                <Text>{this.props.count}</Text>

                <Button 
                    onPress={this.props.decrement}
                    title="kurang"
                />
            </View>
        )
    }
}