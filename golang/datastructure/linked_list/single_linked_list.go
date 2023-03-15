package linked_list

/*
单链表基本操作
author: chenuvi
*/

type ListNode struct {
	next  *ListNode
	value interface{}
}

type LinkedList struct {
	head   *ListNode
	length uint
}

func NewListNode(v interface{}) *ListNode {
	return &ListNode{nil, v}
}

func GetNext(this *ListNode) *ListNode {
	return this.next
}

func GetValue(this *ListNode) interface{} {
	return this.value
}

func NewLinkedList() *LinkedList {
	return &LinkedList{NewListNode(0), 0}
}

// InsertAfter 在某个节点后插入节点
func InsertAfter() {

}

// InsertBefore 在某个节点后插入节点
func InsertBefore() {

}

// InsertToHead 在链表头部插入节点
func InsertToHead() {

}

// InsertToTail 在链表尾部部插入节点
func InsertToTail() {

}

// FindByIndex 通过索引查找节点
func FindByIndex() {

}

// DeleteNode 删除传入的节点
func DeleteNode() {

}

// Print 打印链表
func Print() {

}
