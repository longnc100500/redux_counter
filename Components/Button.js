import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';



const Button = ({ title, bkcolor }) => <View>
    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, backgroundColor: bkcolor, width: 70, height: 40 }}
        onPress={title == 'Add' ? () => this.props.dispatch({ type: 'ADD' }) : () => this.props.dispatch({ type: 'SUB' })}
    >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            {title}
        </Text>
    </TouchableOpacity>
</View>
// const mapDispatchToProps = dispatch => ({
//     add: dispatch({ type: "ADD" }),
//     sub: dispatch({ type: "SUB" })
// })
export default connect()(Button);
//export default connect(null, { add: add, sub: sub })(Button);
//export default Button;