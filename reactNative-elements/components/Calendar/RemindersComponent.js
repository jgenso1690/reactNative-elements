import React, {useEffect, useState} from "react";
import { View, Text, TouchableOpacity, FlatList, Modal, StyleSheet, Pressable } from "react-native";
import moment from "moment";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import NewItemModal from './NewItemModal';

const RemindersComponent = (props) => {
    const {
        selectedDay,
    } = props;

    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const [currentMonth, setCurrentMonth] = useState();
    const [currentDayNumber, setCurrentDayNumber] = useState();
    const [currentDayName, setCurrentDayName] = useState();
    const [taskList, setTaskList] = useState(['Pick up laundry', 'Finish TA', 'Feed the dog']);
    const [notesList, setNotesList] = useState([{id: '0001', text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`},]);
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
       if (selectedDay !== undefined) {
        let monthFullName = months.filter(month=> month.slice(0,3) == selectedDay["date"].slice(4,7))
        setCurrentMonth(monthFullName[0])
        setCurrentDayNumber(selectedDay["date"].slice(-2))
        let dayFullName = dayNames.filter(dayName=> dayName.slice(0,3) == selectedDay["date"].slice(0,3));
        setCurrentDayName(dayFullName[0])
       }
    },[selectedDay])

    const addReminder = (newReminder) => {
        if (newReminder.option == 'New Todo') {
            let currentTodo = taskList;
            let newId = Math.random();
            setTaskList([...currentTodo, newReminder.text])
        } else {
            let currentList = notesList;
            let newId = Math.random();
            setNotesList([...currentList, {id: newId, text: newReminder.text}])
        }
    }
    
    return(
        <>
        <NewItemModal
        styles={styles}
        showModal={showModal}
        setShowModal={(state)=>setShowModal(state)}
        addReminder={(state)=>addReminder(state)}
        />
        
        <View style={{marginTop: 20}}>
           
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                <View>
                    <Text style={{fontSize: 18}}>
                        {currentMonth}
                    </Text>
                    <Text style={{fontSize: 16}}>
                        {currentDayName} {currentDayNumber}
                    </Text>
                </View>
                <TouchableOpacity onPress={()=>setShowModal(true)} style={{ borderRadius: 30}}>
                    <Text style={{fontSize: 18, marginHorizontal: 7}}>+</Text>
                </TouchableOpacity>
            </View>

            <View>
                {taskList.map(task=> {
                    return (
                        <View key={task}>
                            <BouncyCheckbox
                            style={{ marginTop: 16 }}
                            iconStyle={{ borderWidth: 3, borderColor: "#669181", color: '#669181' }}
                            text={task}
                            textContainerStyle={{color: '#595c5b'}}
                            textStyle={{color: '#2d2e2e'}}
                            innerIconStyle={{color: '#669181', borderColor: "#669181"}}
                            fillColor={'#669181'}
                            />
                        </View>
                    )
                })}
                <View style={{marginTop: 15}}>
                <Text>Notes:</Text>
                <FlatList
                data={notesList}
                renderItem={({item, index}) => {
                    return( 
                    <View style={[styles.notesContainer]}>
                        <View style={styles.dot}/>
                        <Text style={{color: '#2d2e2e', textAlign: 'justify'}} >{item.text}</Text>
                    </View>
                    )
                }
                }
                keyExtractor={(item)=>item.id}
                />
                </View>
            </View>

        </View>
        </>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        minHeight: '40%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent:'space-between'
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 10,
        width: 100,
      },
      buttonTextStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
      },
      modalHeader: {
        width: '100%',

      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      modalBody: {
        width: '100%',
        
      },
      modalFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
      },
      notesContainer: {
        margin: 15,
        flexDirection: 'row',
        alignItems: 'flex-start',
      },
      dot: {
        height: 5,
        width: 5,
        backgroundColor: '#2d2e2e',
        borderRadius: 50,
        margin: 7
      },
      options: {
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#bfe0d3',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: 'white',
      },
      optionSelected: {
        backgroundColor: '#bfe0d3'
      },
      inputContainer: {
        borderWidth: 1,
        borderRadius: 20,
        minHeight: 140,
        borderColor: '#787a79',

      }
  });

export default (RemindersComponent);
