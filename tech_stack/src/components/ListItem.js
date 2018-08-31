import React, { Component } from 'react';
import { CardSection } from './common';
import { connect } from 'react-redux';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import * as actions from '../actions';


class ListItem extends Component {

    renderDescription() {

        const {library, selectedLibraryId} = this.props;

        if (library.item.id === selectedLibraryId){
            return(
                <Text>
                    {library.item.description}
                </Text>
            );
        }
    }

    render(){

        const {id, title} = this.props.library.item;

        
        return(
            <TouchableWithoutFeedback 
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={styles.ListItemStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}      
                </View>
            </TouchableWithoutFeedback>
        );
    }

    
};

const styles ={

    ListItemStyle:{
        fontSize:18,
        paddingLeft:10
    }

}

const mapStateToProps = state => {
    return {selectedLibraryId: state.selectedLibraryId};
}

export default connect(mapStateToProps,actions)(ListItem);