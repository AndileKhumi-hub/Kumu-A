import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState('');

  // Login screen
  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Kumu Chat</Text>
        <Text>Enter phone number:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="+267 76 123 456"
          keyboardType="phone-pad"
        />
        <Button title="Login" onPress={() => setUser({ _id: 1, name: phone })} />
      </View>
    );
  }

  // Chat screen
  const onSend = (newMessages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{ _id: 1 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginVertical: 10,
  },
});
