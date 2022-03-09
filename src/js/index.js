// console.log('Hello, Js working');

// let string = 'This is String'; //string
// let number = 123;


// console.log(string);
// console.log(number);

// console.log(string !== number); //Boolean : false or true

// //if
// if (string === number) {
//     console.log('Not')
// } else {
//     console.log('yes')
// }

// let stringNumber = '123';

// stringNumber = parseInt(stringNumber);

// /// string = 123

// if (stringNumber === number) {
//     console.log('----> Not')
// } else {
//     console.log('----> yes')
// }

// //function 

// function consoleMy() {
//     console.log('Im function')
// }

// consoleMy();

// function sum(a, b) {
//     return a + b;
// }

// let result = sum(5, 10);
// console.log('result: ', result);


// let tmpobj = {
//     name: 'this is name',
//     age: 32,
//     sum3: function(a, b, c) {
//         return a + b + c;
//     }
// };

// console.log(tmpobj);

// console.log(tmpobj.age);
// console.log(tmpobj.name);
// console.log(tmpobj.sum3(1, 2, 3));

// //Array

// //  index: 0  1  2      3
// let arr = [1, 2, 3, 'string'];

// console.log(arr);

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])

// arr.forEach(function(el) {
//     console.log('ForEachl: ', el);
// });

// let result2 = arr.find(function(el){
//     return el === 2;
// });

// console.log(result2)

// let result3 = arr.filter(function(el){
//     return el !== 2;
// });

// console.log(result3)


// //High order function 

// function addEventListener (eventName, fn) {
//     if (eventName === 'click') {
//         fn();
//     } else {
//         console.log('We have not this event: ', eventName)
//     }
// }

// addEventListener('hover', function() {
//     console.log('clicked');
// })


/// Start
/**
 * Mobile meny buttons 
 * mobile-menu-button-open
 * mobile-menu-container
 * mobile-menu-button-close
 * 
 */
const MOBILE_SHOW = 'nav-mobile-menu-container--show';

console.log(document);
let mobileMenuButtonOpen = document.getElementById('mobile-menu-button-open');

console.log(mobileMenuButtonOpen);

let mobileMenuContainer = document.getElementById('mobile-menu-container');


mobileMenuButtonOpen.addEventListener('click', function() {
    console.log('Open')
    mobileMenuContainer.classList.add(MOBILE_SHOW);
});
let mobileMenuButtonClose = document.getElementById('mobile-menu-button-close');
mobileMenuButtonClose.addEventListener('click', function() {
    console.log('Close')
    mobileMenuContainer.classList.remove(MOBILE_SHOW);
});
/**
 * experience-links
 * experience-descriptions
 * active-some
 */
const ACTIVE_CLASS = 'active-some'

let aboutLinksList = document
    .getElementById('experience-links')
    .getElementsByTagName('div');

aboutLinksList = Array.from(aboutLinksList);    

console.log('aboutLinksList');

let descriptions = document
    .getElementById('experience-descriptions')
    .getElementsByTagName('div');

descriptions = Array.from(descriptions);

aboutLinksList.forEach(function(element) {
    element.addEventListener('click', function(event) {
        let aboutLink = event.target;

        let aboutLinkIndex = parseInt(event.target.dataset.index);

        aboutLink.classList.add(ACTIVE_CLASS)

        let otherAboutLinks = aboutLinksList.filter(function(otherLink) {
            let otherLinkIndex = parseInt(otherLink.dataset.index);

            return otherLinkIndex !== aboutLinkIndex;
        })
        
        otherAboutLinks.forEach(function(el) {
            el.classList.remove(ACTIVE_CLASS)
        })

        let currentDescription = descriptions.find(function(el) {
            let currentDescriptionIndex = parseInt(el.dataset.index);

            return currentDescriptionIndex === aboutLinkIndex;
        })

        currentDescription.classList.add(ACTIVE_CLASS)

        let otherDescription = descriptions.filter(function(otherLink) {
            let otherLinkIndex = parseInt(otherLink.dataset.index);

            return otherLinkIndex !== aboutLinkIndex;
        })
        
        otherDescription.forEach(function(el) {
            el.classList.remove(ACTIVE_CLASS)
        })
    })
})

aboutLinksList[0].classList.add(ACTIVE_CLASS)
descriptions[0].classList.add(ACTIVE_CLASS)