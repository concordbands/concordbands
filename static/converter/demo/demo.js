ics_sources = [
    {url:'samples/6th.ics',event_properties:{color:'gold'}},
    {url:'https://calendar.google.com/calendar/ical/concordps.org_classroom6880af80%40group.calendar.google.com/public/basic.ics',event_properties:{color:'red'}},
    {url:'https://calendar.google.com/calendar/ical/concordps.org_classroom60624685%40group.calendar.google.com/public/basic.ics',event_properties:{color:'orange'}},
    {url:'https://calendar.google.com/calendar/ical/concordps.org_nbu2m6begv8r25refgt02umj1c%40group.calendar.google.com/public/basic.ics',event_properties:{color:'yellow'}},
    {url:'https://calendar.google.com/calendar/ical/concordps.org_classroomfa6b71ca%40group.calendar.google.com/public/basic.ics',event_properties:{color:'green'}},
    {url:'https://calendar.google.com/calendar/ical/concordps.org_classroom6d3a6565%40group.calendar.google.com/public/basic.ics',event_properties:{color:'blue'}}
]


function data_req (url, callback) {
    req = new XMLHttpRequest()
    req.addEventListener('load', callback)
    req.open('GET', url)
    req.send()
}

function add_recur_events() {
    if (sources_to_load_cnt < 1) {
        $('#calendar').fullCalendar('addEventSource', expand_recur_events)
    } else {
        setTimeout(add_recur_events, 30)
    }
}

function load_ics(ics){
    data_req(ics.url, function(){
        $('#calendar').fullCalendar('addEventSource', fc_events(this.response, ics.event_properties))
        sources_to_load_cnt -= 1
    })
}

$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultView: 'month',
        defaultDate: '2016-03-01'
    })
    sources_to_load_cnt = ics_sources.length
    for (ics of ics_sources) {
        load_ics(ics)
    }
    add_recur_events()
})
