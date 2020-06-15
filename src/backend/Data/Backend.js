// import React,{Component} from 'react';
// import {createRxDatabase, addRxPlugin} from 'rxdb';
// import { schema } from 'backend/Data/Schema';
// import moment from 'moment';

// require('@babel/polyfill');


// addRxPlugin(require('pouchdb-adapter-idb'));
// addRxPlugin(require('pouchdb-adapter-http'));

// const syncURL = 'http://localhost:5985/';
// const dbName = 'chatdb';


// class Backend extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       newMessage: '', messages: []
//     };
//     this.subs = [];
//     this.addMessage = this.addMessage.bind(this);
//     this.handleMessageChange = this.handleMessageChange.bind(this);
//   }

//   async createDatabase() {
//     // password must have at least 8 characters
//     const db = await createRxDatabase(
//       {name: dbName, adapter: 'idb', password: '12345678'}
//     );
//       console.dir(db);

//     // show who's the leader in page's title
//     db.waitForLeadership().then(() => {
//       document.title = 'Online ' + document.title;
//     });

//     // create collection
//     const messagesCollection = await db.collection({
//       name: 'messages',
//       schema: schema
//     });

//     // set up replication
//     const replicationState =
//       messagesCollection.sync({ remote: syncURL + dbName + '/' });
//     this.subs.push(
//       replicationState.change$.subscribe(change => {
//         alert('Replication change');
//         console.dir(change)
//       })
//     );
//     this.subs.push(
//     replicationState.docs$.subscribe(docData => console.dir(docData))
//     );
//     this.subs.push(
//       replicationState.active$.subscribe(active => alert(`Replication active: ${active}`))
//     );
//     this.subs.push(
//       replicationState.complete$.subscribe(completed => alert(`Replication completed: ${completed}`))
//     );
//     this.subs.push(
//       replicationState.error$.subscribe(error => {
//         alert('Replication Error');
//         console.dir(error)
//       })
//     );

//     return db;
//   }

//   async componentDidMount() {
//     this.db = await this.createDatabase();

//     // Subscribe to query to get all messages
//     const sub =
//       this.db.messages.find().sort({id: 1}).$.subscribe(messages => {
//       if (!messages)
//         return;
//       alert('Reloading messages');
//       this.setState({messages: messages});
//     });
//     this.subs.push(sub);
//   }

//   componentWillUnmount() {
//     // Unsubscribe from all subscriptions
//     this.subs.forEach(sub => sub.unsubscribe());
//   }

//   render() {
//     return (
//       <div className="App">

//         <div>{this.renderMessages()}</div>

//         <div id="add-message-div">
//           <h3>Add Product</h3>
//           <input type="text" placeholder="Message" value={this.state.newMessage} onChange={this.handleMessageChange} />
//           <button onClick={this.addMessage}>Add</button>
//         </div>

//       </div>
//     );
//   }

//   renderMessages() {
//     return this.state.messages.map(({id, message}) => {
//       const date = moment(id, 'x').fromNow();
//       return (
//         <div key={id}>
//           <p>{date}</p>
//           <p>{message}</p>
//           <hr/>
//         </div>
//       );
//     });
//   }

//   handleMessageChange(event) {
//     this.setState({newMessage: event.target.value});
//   }

//   async addMessage() {
//     const id = Date.now().toString();
//     const newMessage = {id, message: this.state.newMessage};

//     await this.db.messages.insert(newMessage);

//     this.setState({newMessage: ''});
//   }

// }

// export default Backend;
