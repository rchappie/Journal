import React from 'react';
import ViewNotes from './ViewEntries';

const EntryEditor = () => (
    <div>
        <textarea class="fullpage" autofocus="TRUE" />
        <input type="button" value="Add Entry" onclick="save()" class="submitButton">
    </div>
);

//TODO Create function to save entry content to server.
