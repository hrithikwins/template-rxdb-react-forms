import React, { useState, useEffect } from "react";

import { TextField } from "@material-ui/core";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import { createRxDatabase, addRxPlugin } from 'rxdb';
import { categorySchema } from 'views/Data/CategorySchema';
import moment from 'moment';
import { of } from 'rxjs';

require('@babel/polyfill');


addRxPlugin(require('pouchdb-adapter-idb'));
addRxPlugin(require('pouchdb-adapter-http'));

const syncURL = 'http://localhost:5985/';
const dbName = 'categorydb';
const source = ['Category 1', 'Category 2', 'Category 3'];
const names$ = of(source);


export default function EditCategory() {
    return (
        <>
            <EditCategoryHome />
        </>
    );
}

const List = ({ items = [], loading = false }) => (
    <ul className={loading ? 'loading' : null}>
        {items.map(item => (
            <li key={item}>{item}</li>
        ))}
    </ul>
);
function EditCategoryHome() {

    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const subs = [];
    function handleMessageChange(e) {
        setNewMessage(e.target.value);
    }
    async function renderMessages() {
        const db = await createDatabase();
        const messagesCollection = db['category1'];
        const messageDocument = await messagesCollection.find().exec();
        // writing the value of 
        console.log('-------------');
        messagesCollection.find().exec() // <- find all documents
            .then(documents => console.log(documents));
        console.log(messageDocument.length);
        console.log('data fetched')
        return (
            'output name'
        );
    }

    const put= function putMessages() {
        return messages.map(({ id, name }) => {
            const date = moment(id, 'x').fromNow();
            return (
                <div key={id}>
                    <p>{date}</p>
                    <p>{name}</p>
                    <hr />
                </div>
            );
        });
    }

    async function addMessage() {
        const db = await createDatabase();
        const id = Date.now().toString();
        const message = { id: id, name: newMessage, discountPercentage: '50' };
        const messagesCollection = db['category1'];
        await messagesCollection.insert(message);
        setNewMessage('');
    }

    // todo: initialize a messages[] in state

    async function createDatabase() {
        const db = await createRxDatabase(
            { name: 'categorydb', adapter: 'idb', password: '12345678',ignoreDuplicate: true }
        );
        const messagesCollection = await db.collection({
            name: "category1",
            schema: categorySchema
        });
        const replicationState =
            messagesCollection.sync({ remote: syncURL + dbName + '/' });
        subs.push(
            replicationState.change$.subscribe(change => {
                console.log('Replication change');
                console.dir(change)
            })
        );
        subs.push(
            replicationState.docs$.subscribe(docData => {
                console.log('replication docs');
                console.dir(docData)
            })
        );
        subs.push(
            replicationState.active$.subscribe(active => console.log(`Replication active: ${active}`))
        );
        subs.push(
            replicationState.complete$.subscribe(completed => console.log(`Replication completed: ${completed}`))
        );
        subs.push(
            replicationState.error$.subscribe(error => {
                console.log('Replication Error');
                console.dir(error)
            })
        );

        return db;
    }

    // useEffect(() => {
    //         const db = createDatabase();
    //         const sub =
    //             db.messages.find().sort({ name: 1 }).$.subscribe(messages => {
    //                 if (!messages)
    //                     return;
    //                 alert('reloading messages');
    //                 setMessages({ messages: messages });
    //             });
    //             alert('rel');
    //         subs.push(sub);
    //         subs.forEach(sub => sub.unsubscribe());

    // });
    


    return (
        <>
            <Card>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <TextField
                                required
                                variant="outlined"
                                label="Code"
                                defaultValue="C001"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <br />
                            <br />
                            <TextField
                                required
                                variant="outlined"
                                label="Category Name"
                                value={newMessage} 
                                onChange={handleMessageChange}
                            />
                            <br />
                            <br />
                            <TextField
                                required
                                variant="outlined"
                                label="Max Discount"
                                type="number" 
                            />
                            <br />
                            <br />
                            <Button color="primary" onClick={addMessage}>
                                ADD
                            </Button>
                            <Button color="primary" onClick={renderMessages}>
                                FETCH DATA
                            </Button>
                            <Button color="primary" onClick={myfunction}>
                                Click me
                            </Button>
                        </GridItem>
                    </GridContainer>
                </CardBody>
            </Card>
        </>
    );
}

function myfunction() {
    alert('hello');
}
