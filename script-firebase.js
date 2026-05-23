// USERS
function getUsers(callback) {
    db.ref('users').on('value', s => callback(s.val() || {}));
}

function deleteUser(id) {
    db.ref('users/' + id).remove();
}

function updateUser(id, data) {
    db.ref('users/' + id).update(data);
}

// MESSAGES
function getMessages(callback) {
    db.ref('messages').on('value', s => callback(s.val() || {}));
}

function deleteMessage(id) {
    db.ref('messages/' + id).remove();
}