import { Node } from "./models/linked-models-list";
export default class LinkedList<T> {
    protected count = 0;
    protected head?: Node<T>;

    constructor() { }

    isEqual(a, b) {
        return a == b
    }

    push(element: T) {
        const node = new Node(element)
        let current

        if (!this.head) {
            this.head = node
        } else {
            current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }

    getElementAt(index: number) {
        if (index >= 0 && index <= this.count) {
            let node = this.head
            for (let i = 0; i < index && node; i++) {
                node = node.next
            }
            return node
        }
        return undefined
    }

    insert(element: T, index: number) {
        const node = new Node(element)
        let current = this.head
        if (index >= 0 && index <= this.count) {
            if (index === 0) {
                this.head = node
            } else {
                // TODO
                let previous = this.getElementAt(index - 1) as Node<T>
                node.next = previous?.next
                previous.next = node
            }
            return true
        }
        return false
    }

    remove(element: T) {
        this.removeAt(this.indexOf(element))
    }

    removeAt(index: number) {
        if (index >= 0 && index <= this.count) {
            let current = this.head

            if (index === 0) {
                this.head = current?.next
            } else {
                // TODO
                const previous = this.getElementAt(index - 1) as Node<T>
                current = previous?.next
                previous.next = current?.next
            }
            this.count--
            return current?.element
        }
        return undefined
    }

    indexOf(element: T): number {
        let current = this.head

        for (let i = 0; i < this.size() && current; i++) {
            if (this.isEqual(element, current)) {
                return i
            }
            current = current?.next
        }

        return -1
    }

    isEmpty(): boolean { return Boolean(this.size()) }

    size(): number { return this.count }

    getHead() { return this.head }

    clear() {
        this.head = undefined
        this.count = 0
    }

    toString() {

    }

}