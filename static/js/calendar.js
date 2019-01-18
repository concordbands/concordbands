$(document).ready(function() {
  $('#foobar').fullCalendar({
    eventSources: [
      // your event source
        {
          url: 'https://ical-to-json.herokuapp.com/convert.json?url=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Fical%2Fconcordps.org_classroom6880af80%2540group.calendar.google.com%2Fpublic%2Fbasic.ics', // use the `url` property
          color: 'yellow',    // an option!
          textColor: 'black'  // an option!
        }

        // any other sources...

      ]
    });
  });
