package linked_list

import "fmt"

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

func (l *ListNode) GetNext() *ListNode {
	return l.next
}

func (l *ListNode) GetValue() interface{} {
	return l.value
}

func NewLinkedList() *LinkedList {
	return &LinkedList{NewListNode(0), 0}
}

// InsertAfter 在某个节点后插入节点
func (l *LinkedList) InsertAfter(node *ListNode, v interface{}) bool {
	if node == nil {
		return false
	}
	newNode := NewListNode(v)
	oldNext := node.next
	node.next = newNode
	newNode.next = oldNext
	l.length++
	return true
}

// InsertBefore 在某个节点前插入节点
func (l *LinkedList) InsertBefore(node *ListNode, v interface{}) bool {
	if nil == node || node == l.head {
		return false
	}
	cur := l.head.next
	pre := l.head
	if nil == cur {
		return false
	}
	for nil != cur {
		if cur == node {
			break
		}
		pre = cur
		cur = cur.next
	}
	newNode := NewListNode(v)
	pre.next = newNode
	newNode.next = cur
	l.length++
	return true
}

// InsertToHead 在链表头部插入节点
func (l *LinkedList) InsertToHead(v interface{}) bool {
	return l.InsertBefore(l.head, v)
}

// InsertToTail 在链表尾部部插入节点
func (l *LinkedList) InsertToTail(v interface{}) bool {
	cur := l.head
	for cur.next != nil {
		cur = cur.next
	}
	return l.InsertAfter(cur, v)
}

// FindByIndex 通过索引查找节点
func (l *LinkedList) FindByIndex(index uint) *ListNode {
	if index >= l.length {
		return nil
	}
	var i uint = 0
	cur := l.head.next
	for ; i < index; i++ {
		cur = cur.next
	}
	return cur
}

// DeleteNode 删除传入的节点
func (l *LinkedList) DeleteNode(node *ListNode) bool {
	if node == nil {
		return false
	}
	cur := l.head.next
	pre := l.head
	for cur != nil {
		if cur == node {
			break
		}
		pre = cur
		cur = cur.next
	}
	if cur == nil {
		return false
	}
	pre.next = cur.next
	node = nil
	l.length--
	return true
}

// Print 打印链表
func (l *LinkedList) Print() {
	cur := l.head
	format := ""
	for cur != nil {
		format += fmt.Sprintf("%+v", cur.GetValue())
		cur = cur.next
		if nil != cur {
			format += "->"
		}
	}
	fmt.Println(format)
}
