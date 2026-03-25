// Module.js

class Module {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.createdAt = new Date();
    }

    getDetails() {
        return `Module: ${this.name}, Description: ${this.description}, Created At: ${this.createdAt}`;
    }
}

module.exports = Module;