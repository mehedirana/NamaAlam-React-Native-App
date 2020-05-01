import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const ViewHolder = (props) => {
    return (

        <View style={{ padding: 10, backgroundColor:'#bbdefb' }}>
            <Card style={{ elevation: 5 }}>
                <View style={{ flexDirection: "row", padding: 10, }}>
                    <View style={{ height: 80, width: 80, borderRadius: 40, backgroundColor: '#191cd2' }} />
                    <View>
                        <Card.Content>
                        <View style={{ flexDirection: 'row' }}>
                             <Text style={{color:'#191cd2', fontWeight: 'bold', paddingLeft: 10, fontSize:35 }}>{props.abc}</Text>
                            </View>
                            <Paragraph style={{ color: 'green', fontWeight: 'bold' }}>abcd</Paragraph>
                            <Paragraph >mbbs</Paragraph>
                        </Card.Content>
                    </View>
                    <View>
                        <Card.Content>
                            <Paragraph>available date</Paragraph>
                            <View style={{ flexDirection: 'row' }}>
                                <Ionicons name="md-calendar" color='green' size={30} />
                                <Text style={{ fontWeight: 'bold', paddingLeft: 10 }}>5/1/2020</Text>
                            </View>
                        </Card.Content>

                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-around', padding: 10, }}>
                    <Button mode="contained" style={{ backgroundColor: '#191cd2', borderRadius: 40 }}>
                        Start Time
                    </Button>
                    <Button mode="contained" style={{ backgroundColor: '#191cd2', borderRadius: 40 }}>
                        End Time
                    </Button>
                </View>
                <Card.Content>
                </Card.Content>
            </Card>
        </View>

    )
}
export default ViewHolder;

const styles = StyleSheet.create({
    mycard: {
        marginBottom: 10,
        elevation: 4,
    }
});