import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';

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
            <CustomTextInput
                text={title}
                onChangeText={setTitle}
                label="Judul"
                placeholder="Title"
                numberOfLines={1}
                multiline={false}
            />
            <CustomTextInput
                text={desc}
                onChangeText={setDesc}
                label="Deskripsi"
                placeholder="Deskripsi"
                multiline
                numberOfLines={4}
            />
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
})

export default EditNote;
