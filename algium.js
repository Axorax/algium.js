const algium = {
    stack: class {
        constructor () {
            this.items = [];
        }

        add(item) {
            return this.items.unshift(item);
        }

        addList(list) {
            return Array.isArray(list) ? this.items = list : undefined;
        }

        remove() {
            return this.items.length > 0 ? this.items.shift() : undefined;
        }

        removeItem(item) {
            const index = this.items.indexOf(item);
            return index > -1 ? this.items.splice(index, 1) : undefined;
        }

        search(item) {
            return this.items.includes(item) ? Number(this.items.indexOf(item)) + 1 : -1;
        }

        get peek() {
            return this.items[0];
        }

        clear() {
            this.items = [];
        }

        get size() {
            return Number(this.items.length) + 1;
        }

        get empty(){
            return Boolean(this.items.length == 0);
        }
    },
    queue: class {
        constructor () {
            this.items = [];
        }

        add(item) {
            return this.items.push(item);
        }

        remove() {
            return this.items.shift();
        }

        clear() {
            this.items = [];
        }

        contains(item) {
            return this.items.includes(item);
        }

        get peek() {
            return this.items[0];
        }

        get head() {
            return this.items[0];
        }

        get tail() {
            return this.items[this.items.length - 1];
        }

        get size() {
            return Number(this.items.length) + 1;
        }

        get empty(){
            return Boolean(this.items.length == 0);
        }
    },
    priorityQueue: class {
        constructor (reverse = false) {
            this.items = [];
            this.reverse = reverse;
        }

        add(item) {
            this.items.push(item);
            return this.reverse ? this.items.sort().reverse() : this.items.sort();
        }

        remove() {
            return this.items.shift();
        }

        clear() {
            this.items = [];
        }

        contains(item) {
            return this.items.includes(item);
        }

        get peek() {
            return this.items[0];
        }

        get head() {
            return this.items[0];
        }

        get tail() {
            return this.items[this.items.length - 1];
        }

        get size() {
            return Number(this.items.length) + 1;
        }

        get empty(){
            return Boolean(this.items.length == 0);
        }
    }
}