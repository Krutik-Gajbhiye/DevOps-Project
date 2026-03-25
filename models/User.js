class User {
    constructor(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role; // 'student' or 'teacher'
    }

    authenticate(password) {
        // Logic for authenticating user
        // Check password and return true or false
    }

    getRole() {
        return this.role;
    }
}

module.exports = User;