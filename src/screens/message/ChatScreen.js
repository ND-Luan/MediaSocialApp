import React, {useState, useCallback, useEffect} from 'react';
import {Bubble, GiftedChat} from 'react-native-gifted-chat';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#F7F6CF',
          },
        }}
        textStyle={{
          right: {
            color: '#28161C',
          },
        }}
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      alwaysShowSend
      renderBubble={renderBubble}
      messagesContainerStyle={{backgroundColor: '#F4CFDF'}}
      timeTextStyle={{
        right: {
          color: 'black',
        },
      }}
      placeholder="Nhắn tin..."
    />
  );
};

export default ChatScreen;
