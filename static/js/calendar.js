ics_sources = [
    {url:'calendars/6.ics',event_properties:{color:'#9ccc65'}},
    {url:'calendars/78.ics',event_properties:{color:'#66bb6a'}},
    {url:'calendars/elem.ics',event_properties:{color:'#d4e157'}},
    {url:'calendars/jazz.ics',event_properties:{color:'#64b5f6'}},
    {url:'calendars/windens.ics',event_properties:{color:'#e57373'}}
]


function data_req (url, callback) {
    req = new XMLHttpRequest()
    req.addEventListener('load', callback)
    req.open('GET', url)
    req.send()
}

function add_recur_events() {
    if (sources_to_load_cnt < 1) {
        $('#foobar').fullCalendar('addEventSource', expand_recur_events)
    } else {
        setTimeout(add_recur_events, 30)
    }
}

function load_ics(ics){
    data_req(ics.url, function(){
        $('#foobar').fullCalendar('addEventSource', fc_events(this.response, ics.event_properties))
        sources_to_load_cnt -= 1
    })
}

$(document).ready(function() {
    $('#foobar').fullCalendar({
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
