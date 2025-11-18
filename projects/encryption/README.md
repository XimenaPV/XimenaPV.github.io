# Encryption Activity Reflection


## Part 1: Key Exchange

My Key:7
My Partner's Key:7

Our initial shared key:14

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
| Vsm             |       Hey       | 14  |
| De              |       Hi        | 23  |
| Ammj            |      Cool       | 24  |
| Ojdf            |      Nice       | 1   |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:
gCrkRq
Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 
1100111 1000011 1110010 1101011 1010010 1110001 
### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Ximena]
    Destination: [Cristiano]  
    Sequence: 1/3
    Data: [1100111] [1000011]
    =========
    Packet 2:

    Source: [Ximena]
    Destination: [Cristiano]
    Sequence: 2/3 
    Data: [1110010] [1101011]
    =========
    Packet 3:

    Source: [Ximena]
    Destination: [Cristiano]
    Sequence: 3/3
    Data: [1010010] [1110001]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?
Symmetric encryption uses a single shared secret key between two people and asymmetric encryption uses a public and a private key. Symmetric encryption was used to encode and decode the messages faster and asymmetric was used to exchange the keys securely.
- Why is it important that this protocol uses a new key for each message?
So that an attacker can't decode all the messages even if they decode one key.
- Why is it important that you never share your secret key?
Because if you do, anyone who has it can decrypt all yout secret messages.
- In the transport layer, do these messages use TCP or UDP? Why?
TCP to deliver the messages in the correct order and it is reliable.
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.
In the internet layer, the packets are given a IP address which decides the best path for the packet to travel through. In the link layer, the packets are given a header and payload, to know where the packet is being sent to and then it is sent over the physical network (a router).
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other information can they still see?
They can still see the IP address, the header and payload, the packet size, the destination ports, and the frequency of communication.

