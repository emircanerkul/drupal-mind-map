Event systems are used in many complex applications as a way to allow extensions to modify how the system works. An event system can be implemented in a variety of ways, but generally the concepts and components that make up the system are the same.

* **Event Subscribers** \- Sometimes called "Listeners", are callable methods or functions that react to an event being propagated throughout the Event Registry.
* **Event Registry** \- Where event subscribers are collected and sorted.
* **Event Dispatcher** \- The mechanism in which an event is triggered, or "dispatched", throughout the system.
* **Event Context** \- Many events require specific set of data that is important to the subscribers to an event. This can be as simple as a value passed to the Event Subscriber, or as complex as a specially created class that contains the relevant data.