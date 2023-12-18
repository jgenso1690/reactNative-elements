import React, {useEffect, useState} from "react";
import { View, Text, TouchableOpacity, FlatList, Modal, TextInput, Pressable } from "react-native";

const NewItemModal = (props) =>{

    const {
        styles,
        showModal,
        setShowModal,
        addReminder

    } = props;

    const [selectedOption, setSelectedOption ] = useState('');
    const [text, onChangeText] = useState('');

    const options = ['New Todo', 'New Note']

    const saveText = () => {
         addReminder({'option': selectedOption, 'text':text})
         closeModal()

    }

    const closeModal = () =>{
        setSelectedOption('')
        onChangeText('')
        setShowModal(false)
    }

    return (

 
    <View style={styles.centeredView}>
                <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.modalHeader}>
                                <Text style={styles.modalTitle}>ADD NEW ITEM</Text>
                            </View>
                            {selectedOption.length === 0? 
                            <View style={styles.modalFooter}>
                                {options.map((option, index) => {
                                    return(
                                        <TouchableOpacity key={index.toString()} style={[styles.options,]}
                                        index={index}
                                        onPress={()=>setSelectedOption(options[index])}>
                                            <Text style={{padding: 10}}>{option}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                            :
                            
                            <View style={[styles.modalFooter, styles.inputContainer, {justifyContent: 'flex-start'}]}>
                                <TextInput style={{padding: 10, alignSelf: 'flex-start'}}
                                onChangeText={onChangeText}
                                value={text}/>
                            </View>
                            }   
                            <View style={styles.modalFooter}>
                                <Pressable
                                    style={[styles.button, {backgroundColor: '#e33d3d'}]}
                                    onPress={closeModal}>
                                    <Text style={styles.buttonTextStyle}>Cancel</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.button, {backgroundColor: '#96c97b'}]}
                                    onPress={selectedOption.length > 0 ? ()=>saveText(): null}>
                                    <Text style={styles.buttonTextStyle}>Save</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
}

export default (NewItemModal);
