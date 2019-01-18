$(document).ready(function() {
  $('#foobar').fullCalendar({
    googleCalendarApiKey: 'AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ',
    eventSources: [
      {
        googleCalendarId: 'concordps.org_classroom6880af80@group.calendar.google.com',
        className: '6band'
      },
      {
        googleCalendarId: 'concordps.org_classroom60624685@group.calendar.google.com',
        className: '78band'
      },
      {
        googleCalendarId: 'concordps.org_nbu2m6begv8r25refgt02umj1c@group.calendar.google.com',
        className: 'elementary'
      },
      {
        googleCalendarId: 'concordps.org_classroomfa6b71ca@group.calendar.google.com',
        className: 'jazz'
      },
      {
        googleCalendarId: 'concordps.org_classroom6d3a6565@group.calendar.google.com',
        className: 'windensemble'
      }
    ]
  });
});

// AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ
// AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs
