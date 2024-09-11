import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

const Todo = () => {
    // useState per definire 'value' e 'todoList'
    const [value, setValue] = useState<string>('');
    const [todoList, setTodoList] = useState<string[]>([]);

    // Funzione per gestire il cambiamento dell'input
    const onChangeText = (text: string) => {
        setValue(text);
    };

    // Funzione per aggiungere un elemento alla lista ToDo
    const insertInTodoList = () => {
        if (value.trim() === "") {
            alert('Non inserire spazi vuoti');
            return;
        } else {
            const updatedTodoList = [...todoList, value];
            setTodoList(updatedTodoList);
            setValue(''); // Reset input dopo il "save"
        }
    };

    // Componente per il separatore
    const SeparatorComponent = () => <View style={styles.separator} />;

    // Componente per il checkbox
    const CheckboxComponent = () => {
        const [checked, setChecked] = useState(false);
        return (
            <Pressable
                style={[styles.checkbox, checked && styles.checkboxChecked]}
                onPress={() => setChecked(!checked)}>
                {checked && <Ionicons name="checkmark" size={20} color="white" />}
            </Pressable>
        );
    };

    // Renderizzazione della lista di ToDo
    const listTodo = todoList.map((item, index) => (
        <View key={index} style={styles.todoItem}>
            <CheckboxComponent />
            <Text>{item}</Text>
        </View>
    ));

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* Sezione Titolo */}
            <View style={styles.titlePage}>
                <Text>ToDo List</Text>
                <SeparatorComponent />
            </View>

            {/* Sezione input ToDo List */}
            <View style={styles.row}>
                <TextInput
                    placeholder='ToDo List'
                    value={value}
                    onChangeText={onChangeText}
                    style={{ marginHorizontal: 20, width: '50%', borderWidth: 1, borderRadius: 10 }}
                />
                <Button
                    icon="playlist-plus"
                    mode="contained"
                    onPress={insertInTodoList}
                    disabled={!value.trim()}>
                    Save
                </Button>
            </View>

            {/* Output ToDo List */}
            <View style={{ marginTop: 25 }}>
                {listTodo}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    titlePage: {
        marginLeft: 20,
        marginBottom: 50,
    },
    separator: {
        height: 1,
        backgroundColor: 'red',
        width: '100%',
    },
    row: {
        flexDirection: 'row',
    },
    todoItem: {
        flexDirection: 'row',
        margin: 10,
    },
    checkbox: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'blue',
        marginEnd: 5,
    },
    checkboxChecked: {
        backgroundColor: 'blue',
    },
});

export default Todo;
