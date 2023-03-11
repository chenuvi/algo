export class Node<K> {
    constructor(public key: Node<K>) { }

    toString() {
        return `${this.key}`
    }

    left: Node<K>

    right: Node<K>
}