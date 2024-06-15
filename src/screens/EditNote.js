import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

const EditNote = ({ noteList, editNote, setCurrentPage, editNoteId }) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    useEffect(() => {
        const noteToEdit = noteList.find(note => note.id === editNoteId);
        if (noteToEdit) {
            setTitle(noteToEdit.title);
            setDesc(noteToEdit.desc);
        }
    }, [editNoteId]);

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Ubah Note</Text>
            {/* <TextInput
                multiline={multiline}
                numberOfLines={numberOfLines}
                style={styles.input}
                placeholder={label}
                onChangeText={onChange}
                defaultValue={text}
                /> */}
            <View style={styles.textInputWrapper}>
                <Text>Judul</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={title}
                    onChangeText={setTitle}
                    multiline={false}
                />
            </View>
            <View style={styles.textInputWrapper}>
                <Text>Deskripsi</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    value={desc}
                    onChangeText={setDesc}
                />
            </View>
            <View style={styles.spacerTop}>
                <CustomButton
                    backgroundColor="#247881"
                    color="white"
                    text="Simpan"
                    width="100%"
                    onPress={() => {
                        editNote(editNoteId, title, desc);
                        setCurrentPage('home');
                    }}
                />
            </View>
            <View style={styles.spacerTop}>
                <CustomButton
                    backgroundColor="#DDDDDD"
                    color="#203239"
                    text="Kembali ke Home"
                    width="100%"
                    onPress={() => setCurrentPage('home')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
    },
    pageTitle: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        color: '#203239',
    },
    spacerTop: {
        marginTop: 30,
    },
    textInputWrapper: {
        marginTop: 20,
    },
    input: {
        borderWidth: 2,
        borderColor: '#DDD',
        padding: 10,
    },
})

export default EditNote;
