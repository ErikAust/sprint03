'use strict'
function myTeam() {

    let a = prompt('Input title team');
    let b = prompt('Input team leader name');
    let c = prompt('Input team members name, enter the names separated by a comma');
    let c2 = c.match(/,/g);
    let c3 = c2.length + 1;
    let d = prompt('Input team agenda');
    let e = Boolean(+prompt('If team is Evil enter 0, if not - 1'));

    let teamUp = {
        title: a,
        leader: b,
        members: c,
        memberCount: c3,
        agenda: d,
        isEvil: e
    };

    alert(`Here's the team:
    name - ${teamUp.title}
    leader - ${teamUp.leader}
    member - ${teamUp.members}
    memberCount - ${teamUp.memberCount}
    agenda - ${teamUp.agenda}
    isEvil - ${teamUp.isEvil}`);
}
myTeam();