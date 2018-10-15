import { trigger, state, style, transition, animate, query, animateChild } from "@angular/animations";

// export const tttt = trigger('tttt', [
//     transition(':enter', [
//       query('span', [
//         style({ color: 'yellow' })
//       ]),
//       query('.back3--img', animateChild())
//     ])
//   ])

export const pens = trigger('pens', [
    state('hide', style({
        top: '-30rem',
        left: '-75rem',
        transform: 'rotate(-90deg)',
        transformOrigin: '77% 60%'
    })),
    transition('hide => show', [
        animate('750ms ease', style({
            transform: 'rotate(0deg)',
            transformOrigin: '77% 60%',
            top: '-10rem',
            left: -'24rem',
        })),
        animate('300ms ease', style({
            transform: 'scale(1)'
        }))
    ]),
    transition('show => hide', [
        animate('900ms ease')
    ])
]);
// export const scrollRevealR = trigger('scrollRevealR', [
//     state('hideR', style({
//         transform: 'translateX(80rem)'
//     })),
//     transition('hideR => showR', [
//         animate('750ms ease', style({
//             transform: 'scale(.7) translateX(0)',
//         })),
//         animate('300ms ease', style({
//             transform: 'scale(1)'
//         }))
//     ]),
//     transition('showR => hideR', [
//         animate('900ms ease')
//     ])
// ]);
