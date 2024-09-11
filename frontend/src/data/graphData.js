// officeGraphData.js

export const nodes = [{ id: 'alice', name: 'Alice', group: 'employee' },
  { id: 'bob', name: 'Bob', group: 'employee' },
  { id: 'carol', name: 'Carolina', group: 'employee' },
  { id: 'dave', name: 'Dave', group: 'employee' },
  { id: 'coffee_machine', name: 'Coffee', group: 'resource' },
  { id: 'printer', name: 'Stampante', group: 'resource' },
  { id: 'meeting_room', name: 'Meeting', group: 'resource' },
  { id: 'office_plant', name: 'Office', group: 'resource' },
  { id: 'monday_meeting', name: 'Monday', group: 'event' },
  { id: 'friday_happy_hour', name: 'Friday', group: 'event' },
  { id: 'deadline_day', name: 'Deadline', group: 'event' },
  { id: 'office_party', name: 'Office', group: 'event' }];

export const links = [{ source: 'alice', target: 'coffee_machine', value: 'Frequently' },
  { source: 'bob', target: 'printer', value: 'Often' },
  { source: 'carol', target: 'meeting_room', value: 'Books' },
  { source: 'dave', target: 'office_plant', value: 'Waters' },
  { source: 'alice', target: 'monday_meeting', value: 'Organizes' },
  { source: 'bob', target: 'office_party', value: 'DJs' },
  { source: 'carol', target: 'deadline_day', value: 'Fa tardi' },
  { source: 'dave', target: 'friday_happy_hour', value: 'Arranges' },
  { source: 'coffee_machine', target: 'monday_meeting', value: 'High' },
  { source: 'printer', target: 'deadline_day', value: 'Breaks' },
  { source: 'meeting_room', target: 'friday_happy_hour', value: 'Venue' },
  { source: 'office_plant', target: 'office_party', value: 'Centerpiece' },
  { source: 'monday_meeting', target: 'meeting_room', value: 'Takes' }];