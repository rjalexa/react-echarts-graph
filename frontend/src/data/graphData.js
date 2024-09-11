// officeGraphData.js

export const nodes = [
  // Employees
  { id: "alice", name: "Alice", group: "employee" },
  { id: "bob", name: "Bob", group: "employee" },
  { id: "carol", name: "Carol", group: "employee" },
  { id: "dave", name: "Dave", group: "employee" },

  // Office Resources
  { id: "coffee_machine", name: "Coffee Machine", group: "resource" },
  { id: "printer", name: "Printer", group: "resource" },
  { id: "meeting_room", name: "Meeting Room", group: "resource" },
  { id: "office_plant", name: "Office Plant", group: "resource" },

  // Office Events
  { id: "monday_meeting", name: "Monday Morning Meeting", group: "event" },
  { id: "friday_happy_hour", name: "Friday Happy Hour", group: "event" },
  { id: "deadline_day", name: "Deadline Day", group: "event" },
  { id: "office_party", name: "Office Party", group: "event" },
];

export const links = [
  // Employees and Office Resources
  { source: "alice", target: "coffee_machine", value: "Frequently uses" },
  { source: "bob", target: "printer", value: "Often fixes" },
  { source: "carol", target: "meeting_room", value: "Books for sales pitches" },
  { source: "dave", target: "office_plant", value: "Waters" },

  // Employees and Office Events
  { source: "alice", target: "monday_meeting", value: "Organizes" },
  { source: "bob", target: "office_party", value: "DJs" },
  { source: "carol", target: "deadline_day", value: "Stays late before" },
  { source: "dave", target: "friday_happy_hour", value: "Arranges" },

  // Office Resources and Office Events
  { source: "coffee_machine", target: "monday_meeting", value: "High demand during" },
  { source: "printer", target: "deadline_day", value: "Breaks down on" },
  { source: "meeting_room", target: "friday_happy_hour", value: "Venue for" },
  { source: "office_plant", target: "office_party", value: "Centerpiece for" },
  { source: "monday_meeting", target: "meeting_room", value: "Takes place in" },
];